import { Input } from "~/components/ui/input"

export default function SignUp() {
	return (
		<div className="grid grid-cols-2">
			<div>imagem bem bacana</div>

			<div className="mx-auto flex w-full flex-col justify-center space-y-6">
				<h2 className="text-2xl font-semibold tracking-tight">
					Crie sua conta
				</h2>
				<p className="text-sm text-muted-foreground">
					Registre-se, facil e rapido
				</p>

				<div className="grid gap-6">
					<form>
						<div className="grid gap-2">
							<Input />
							<Input />
							<Input />
							<Input />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
