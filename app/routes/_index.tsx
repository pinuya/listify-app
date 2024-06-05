import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { Plus } from "lucide-react"
import { bg } from "~/assets/images"
import { ModeToggle } from "~/components/mode-toggle"
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
	return [
		{ title: "Listify" },
		{
			name: "Listify é o seu companheiro digital para organização pessoal e produtividade. Com Listify, você pode criar e gerenciar listas para uma variedade de necessidades, desde tarefas diárias até listas de compras, metas de fitness, roteiros de viagem e muito mais.",
			content: "Listify",
		},
	]
}

export default function Index() {
	return (
		<div>
			<nav className="border-b bg-card">
				<div className="flex items-center justify-between p-4">
					<div className="flex flex-1 items-center justify-center">
						<ul className="inline-flex space-x-6 font-bold">
							<li>Sobre</li>
							<li>Como usar</li>
							<li>Contato</li>
						</ul>
					</div>

					<div className="space-x-4">
						<ModeToggle />
						<Link to={"/entrar"} prefetch="intent">
							<Button variant="outline">Entrar</Button>
						</Link>

						<Link to={"/cadastrar"} prefetch="intent">
							<Button>
								<Plus className="mr-2 h-4 w-4" /> Criar Conta
							</Button>
						</Link>
					</div>
				</div>
			</nav>

			<section>
				<div>
					<div>
						<h1>Melhor forma de organizar seus afazeres!</h1>
						<p>
							seu companheiro digital para organização pessoal e produtividade.
							Com Listify, você pode criar e gerenciar listas para uma variedade
							de necessidades, desde tarefas diárias até listas de compras,
							metas de fitness, roteiros de viagem e muito mais.
						</p>
						<Link to={"/criar"}>
							<Button>Comece agora!</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
