import type { ActionFunctionArgs } from "@remix-run/node"
import { Form, Link, redirect, useActionData } from "@remix-run/react"
import { Button } from "~/components/ui/button"

export const action = async (args: ActionFunctionArgs) => {
	const FORMDATA = await args.request.formData()
	//TODO: pegar os itens do form, validar e login
	const email = FORMDATA.get("email")
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	console.log(email)
	if (!emailRegex.test(email?.toString() || "")) {
		return {
			errors: {
				email: "email invalidu",
			},
		}
	}
	return {}
	//return redirect("/home")
}

export default function SignIn() {
	const actionData = useActionData<typeof action>()
	return (
		<div className="container relative flex-col items-center justify-center md:grid lg:max-none lg:grid-cols-2">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6">
				<div className="text-2xl font-semibold tracking-tight">
					Faça o seu login.
				</div>

				<div className="grid gap-6">
					<Form method="POST" className="grid gap-2">
						<input
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							id="email"
							name="email"
							placeholder="example@example.com"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							// type="email"
						/>
						{actionData &&
							"errors" in actionData &&
							actionData.errors.email && <p>{actionData.errors.email}</p>}

						<input
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							id="senha"
							name="password"
							placeholder="Senha"
							autoCapitalize="none"
							autoComplete="sobrenome"
							autoCorrect="off"
							type="password"
						/>
						<Button type="submit" className="bg-foreground">
							Entrar
						</Button>
						<Link
							className="text-sm text-muted-foreground hover:underline"
							to={"/cadastrar"}>
							Ainda não possui uma conta? Cadastre-se!
						</Link>
					</Form>
				</div>
			</div>

			<div>abc</div>
		</div>
	)
}
