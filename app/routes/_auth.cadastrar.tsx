import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import type { ActionFunctionArgs } from "@remix-run/node"
import { Form, Link, json, redirect, useActionData } from "@remix-run/react"
import { z } from "zod"
import { Button } from "~/components/ui/button"
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
		<div className="flex-col items-center justify-center md:grid lg:max-none lg:grid-cols-2">
			<div>abc</div>

			<div className="mx-auto flex w-full flex-col justify-center space-y-6">
				<div className="flex flex-col space-y-2 text-center">
					<h2 className="text-2xl font-semibold tracking-tight">
						Crie sua conta
					</h2>
				</div>

				<div className="grid gap-6">
					<div>
						<Form
							method="POST"
							className="grid gap-2"
							id={form.id}
							onSubmit={form.onSubmit}>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								placeholder="Nome"
								type="text"
								key={fields.name.key}
								name={fields.name.name}
								defaultValue={fields.name.initialValue}
							/>
							<p>{fields.name.errors}</p>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								type="text"
								placeholder="Sobrenome"
								key={fields.lastName.key}
								name={fields.lastName.name}
								defaultValue={fields.lastName.initialValue}
							/>
							<p>{fields.lastName.errors}</p>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								type="email"
								placeholder="example@example.com"
								key={fields.email.key}
								name={fields.email.name}
								defaultValue={fields.email.initialValue}
							/>
							<p>{fields.email.errors}</p>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								type="password"
								placeholder="Senha"
								key={fields.password.key}
								name={fields.password.name}
								defaultValue={fields.password.initialValue}
							/>
							<p>{fields.password.errors}</p>
							<Button type="submit" className="bg-foreground">
								Criar conta
							</Button>
							<Link
								className="text-sm text-muted-foreground hover:underline"
								to={"/entrar"}>
								Já possui um cadastro? Entre aqui
							</Link>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
}
