import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { Plus } from "lucide-react"
import { LandingPage } from "~/assets/images"
import { ModeToggle } from "~/components/mode-toggle"
import { Button } from "~/components/ui/button"
import { motion } from "framer-motion"

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
				<div className="flex items-end justify-end p-4">
					<div className="sm:space-x-4">
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

			<section id="intro">
				<div className="flex flex-col pt-10 sm:flex-row">
					<motion.div className="sm:mt-44">
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="font-semibold text-3xl sm:text-8xl">
							Melhor forma <br /> de organizar suas tarefas!
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							className="mt-4">
							Seu companheiro digital para organização pessoal e produtividade.{" "}
							<br />
							Com Listify, você pode criar e gerenciar listas para uma variedade
							de necessidades, <br />
							desde tarefas diárias até listas de compras, metas de fitness,
							roteiros de viagem e muito mais.
						</motion.p>
						<h2 className="font-semibold pt-5">
							Experimente o Listify hoje mesmo e transforme a maneira como você
							organiza sua vida.
						</h2>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2 }}>
							<Link to={"/cadastrar"} prefetch="intent">
								<Button className="mt-4">Comece agora!</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="hidden sm:block">
						<LandingPage />
					</motion.div>
				</div>
			</section>

			<section
				id="sobre"
				className="flex flex-col md:flex-row space-x-40 pt-40">
				<div>
					<h1 className="font-semibold text-xl sm:text-3xl">
						Melhore seu estilo de vida!
					</h1>
					<span className="text-sm">
						Com a vida cotidiana se movendo rapidamente, a organização se torna
						essencial para manter o controle. Introduzindo o Listify, uma
						aplicação intuitiva projetada para ajudar você a criar e gerenciar
						listas de maneira eficiente e sem complicações.
					</span>

					<div className="grid grid-cols-3 sm:pt-10">
						<div>
							<h1 className="font-semibold text-lg">
								Criar Listas Personalizadas
							</h1>
							<span className="text-sm">
								Desde listas de compras até tarefas importantes, o ListUp
								permite que você crie listas personalizadas para todas as suas
								necessidades. Organize suas ideias e compromissos com
								facilidade.
							</span>
						</div>
						<div>
							<h1 className="font-semibold text-lg">Interface Intuitiva</h1>
							<span className="text-sm">
								Projetada com foco na facilidade de uso, a interface do ListUp
								permite que você navegue rapidamente entre suas listas e
								adicione novos itens com apenas alguns toques.
							</span>
						</div>
						<div>
							<h1 className="font-semibold text-lg">
								Por que escolher o Listify
							</h1>
							<span className="text-sm">
								Com uma combinação poderosa de funcionalidades robustas e
								simplicidade elegante, o ListUp se destaca como a escolha ideal
								para aqueles que valorizam a organização sem esforço.
							</span>
						</div>
					</div>
				</div>
			</section>

			<section id="contato" className="pt-20">
				contato area
			</section>

			<footer className="m-4">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
					<ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
						<li>
							<Link to={"#sobre"} className="hover:underline me-4 md:me-6">
								Sobre
							</Link>
						</li>

						<li>
							<Link to={"#contato"} className="hover:underline me-4 md:me-6">
								Contato
							</Link>
						</li>

						<li>
							<Link to={"#"} className="hover:underline me-4 md:me-6">
								Politicas de Privacidade
							</Link>
						</li>
					</ul>

					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024 Listify. Todos os direitos reservados
					</span>
				</div>
			</footer>
		</div>
	)
}
