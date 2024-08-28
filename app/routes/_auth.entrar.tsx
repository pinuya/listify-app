import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { Checkbox } from "@radix-ui/react-checkbox"
import { Label } from "@radix-ui/react-label"
import type { ActionFunctionArgs } from "@remix-run/node"
import { Form, Link, json, redirect, useActionData } from "@remix-run/react"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { createSupabaseServerClient } from "~/services/supabase.server"

const loginSchema = z.object({
	email: z
		.string({ message: "Campo obrigatorio." })
		.email({ message: "E-mail invalido." }),
	password: z
		.string({ message: "Campo obrigatorio." })
		.min(8, { message: "Senha tem que ter no minimo 8 caracteres." }),
})

export const action = async (args: ActionFunctionArgs) => {
	const formData = await args.request.formData()
	//TODO: pegar os itens do form, validar e login
	const submission = parseWithZod(formData, { schema: loginSchema })

	if (submission.status !== "success") {
		return json(submission.reply())
	}

	const { headers, supabaseClient } = createSupabaseServerClient(args.request)
	const { email, password } = submission.value
	const { error, data } = await supabaseClient.auth.signInWithPassword({
		email,
		password,
	})

	if (error) {
		return json(
			submission.reply({
				fieldErrors: {
					email: ["email ou senha incorretos."],
					password: ["email ou senha incorretos."],
				},
			}),
		)
	}

	return redirect("/home", {
		headers,
	})
}

export default function SignIn() {
	const lastResult = useActionData<typeof action>()

	const [form, fields] = useForm({
		// Sync the result of last submission
		lastResult,

		// Reuse the validation logic on the client
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: loginSchema })
		},

		// Validate the form on blur event triggered
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})

	return (
		<div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
			<div className="x-auto w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
						Entre com a sua conta
					</h2>
					<p className="mt-2 text-center text-sm text-muted-foreground">
						Ou{" "}
						<Link
							to={"/cadastrar"}
							className="font-medium text-primary hover:text-primary/90">
							registre uma nova conta
						</Link>
					</p>
					<div>
						<Form
							method="POST"
							className="space-y-6"
							id={form.id}
							onSubmit={form.onSubmit}>
							<Label htmlFor="email" className="sr-only">
								E-mail
							</Label>
							<input
								className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
								type="email"
								placeholder="example@example.com"
								key={fields.email.key}
								name={fields.email.name}
								defaultValue={fields.email.initialValue}
							/>
							<p>{fields.email.errors}</p>

							<input
								className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
								type="password"
								placeholder="Senha"
								key={fields.password.key}
								name={fields.password.name}
								defaultValue={fields.password.initialValue}
							/>

							<div className="flex justify-end">
								<div className="text-sm">
									<Link
										to={""}
										className="font-medium text-primary hover:text-primary/90">
										Esqueceu a senha?
									</Link>
								</div>
							</div>

							<p>{fields.password.errors}</p>
							<Button
								type="submit"
								className="flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
								Entrar
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
}
