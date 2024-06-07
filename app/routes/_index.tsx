import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { Plus } from "lucide-react"
import { LandingPage } from "~/assets/images"
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
		<div className="container mx-auto">
			<nav className="border-b bg-card">
				<div className="flex items-center justify-between p-4">
					<div className="flex flex-1 items-start justify-start">
						<ul className="inline-flex space-x-6 font-bold">
							<li className="cursor-pointer">Sobre</li>
							<li className="cursor-pointer">Como usar</li>
							<li className="cursor-pointer">Contato</li>
						</ul>
					</div>

					<div className="space-x-4">
						<ModeToggle />
						<Link to={"/entrar"} prefetch="intent">
							<Button variant="ghost">Entrar</Button>
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
				<div className="flex pt-28">
					<div className="sm:pt-48">
						<h1 className="font-semibold text-3xl sm:text-8xl">
							Melhor forma <br /> de organizar suas tarefas!
						</h1>
						<p className="">
							Seu companheiro digital para organização pessoal e produtividade.{" "}
							<br />
							Com Listify, você pode criar e gerenciar listas para uma variedade
							de necessidades, <br />
							desde tarefas diárias até listas de compras, metas de fitness,
							roteiros de viagem e muito mais.
						</p>
						<Link to={"/cadastrar"} prefetch="intent" className="">
							<Button>Comece agora!</Button>
						</Link>
					</div>

					<div>
						<LandingPage />
					</div>
				</div>
			</section>
		</div>
	)
}
