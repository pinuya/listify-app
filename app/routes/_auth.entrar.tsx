import { Button } from "~/components/ui/button"

export default function SignIn() {
	return (
		<div className="container relative flex-col items-center justify-center md:grid lg:max-none lg:grid-cols-2">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6">
				Faca o seu login.
				<div className="grid gap-6">
					<div className="grid gap-2">
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
						<Button className="bg-foreground">Entrar</Button>
					</div>
				</div>
			</div>

			<div>abc</div>
		</div>
	)
}
