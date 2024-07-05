import { Form, Link, redirect } from "@remix-run/react"
import { Button } from "~/components/ui/button"

export const action = () => {
	//TODO: pegar os itens do form, validar e login

	return redirect("/home")
}

export default function SignUp() {
	return (
		<div className="container relative flex-col items-center justify-center md:grid lg:max-none lg:grid-cols-2">
			<div>abc</div>

			<div className="mx-auto flex w-full flex-col justify-center space-y-6">
				<div className="flex flex-col space-y-2 text-center">
					<h2 className="text-2xl font-semibold tracking-tight">
						Crie sua conta
					</h2>
				</div>

				<div className="grid gap-6">
					<div>
						<Form method="POST" className="grid gap-2">
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								id="nome"
								placeholder="Nome"
								autoCapitalize="none"
								autoComplete="nome"
								autoCorrect="off"
								type="text"
							/>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								id="sobrenome"
								placeholder="Sobrenome"
								autoCapitalize="none"
								autoComplete="sobrenome"
								autoCorrect="off"
								type="text"
							/>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								id="email"
								placeholder="example@example.com"
								autoCapitalize="none"
								autoComplete="email"
								autoCorrect="off"
								type="email"
							/>
							<input
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								id="senha"
								placeholder="Senha"
								autoCapitalize="none"
								autoComplete="sobrenome"
								autoCorrect="off"
								type="password"
							/>
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
