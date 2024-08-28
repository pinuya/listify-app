import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import type { ActionFunctionArgs } from "@remix-run/node"
import { Form, Link, json, redirect, useActionData } from "@remix-run/react"
import { z } from "zod"
import { CreateAcc } from "~/assets/images"
import { Button } from "~/components/ui/button"
import { Label } from "~/components/ui/label"
import { createSupabaseServerClient } from "~/services/supabase.server"

const loginSchema = z.object({
	name: z.string({ message: "Campo obrigatorio." }),
	lastName: z.string({ message: "Campo obrigatorio." }),
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
	const { email, password, name, lastName } = submission.value
	const { error, data } = await supabaseClient.auth.signUp({
		email,
		password,
		options: { data: { name, lastName } },
	})

	if (error) {
		return json(
			submission.reply({ fieldErrors: { email: ["email ja cadastrado"] } }),
		)
	}

	return redirect("/home", {
		headers,
	})
}

export default function SignUp() {
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
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
						Crie sua conta
					</h2>

					<p className="mt-2 text-center text-sm text-muted-foreground">
						Ou{" "}
						<Link
							to={"/entrar"}
							className="font-medium text-primary hover:underline">
							entre na sua conta.
						</Link>
					</p>
				</div>

				<div className="grid gap-6">
					<div>
						<Form
							method="POST"
							className="space-y-4"
							id={form.id}
							onSubmit={form.onSubmit}>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="name">Nome</Label>
									<input
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="John"
										key={fields.name.key}
										name={fields.name.name}
										defaultValue={fields.name.initialValue}
									/>
								</div>

								<div className="space-y-2">
									<p>{fields.name.errors}</p>
									<Label htmlFor="lastName">Sobrenome</Label>
									<input
										className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
										type="text"
										placeholder="Doe"
										key={fields.lastName.key}
										name={fields.lastName.name}
										defaultValue={fields.lastName.initialValue}
									/>
								</div>
							</div>

							<p>{fields.lastName.errors}</p>
							<Label htmlFor="email">E-mail</Label>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								type="email"
								placeholder="example@example.com"
								key={fields.email.key}
								name={fields.email.name}
								defaultValue={fields.email.initialValue}
							/>
							<p>{fields.email.errors}</p>
							<Label htmlFor="password">Senha</Label>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								type="password"
								key={fields.password.key}
								name={fields.password.name}
								defaultValue={fields.password.initialValue}
							/>
							<p>{fields.password.errors}</p>
							<Button type="submit" className="w-full bg-foreground">
								Criar conta
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
}
