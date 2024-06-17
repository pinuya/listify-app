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

			<section className="mt-20 flex flex-col space-y-4 sm:flex-row sm:space-x-4">
				<div className="rounded-x1 border bg-card text-card-foreground shadow w-[350px]">
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="font-semibold leading-none tracking-tight">
							Titulo
						</h3>
						<p className="text-sm text-muted-foreground">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
							sequi sint illo autem possimus tempore deserunt blanditiis
							molestiae maxime temporibus quos reprehenderit enim voluptate
							corrupti animi officia quaerat laboriosam asperiores?
						</p>
					</div>
				</div>

				<div className="rounded-x1 border bg-card text-card-foreground shadow w-[350px]">
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="font-semibold leading-none tracking-tight">
							Titulo 2
						</h3>
						<p className="text-sm text-muted-foreground">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
							sequi sint illo autem possimus tempore deserunt blanditiis
							molestiae maxime temporibus quos reprehenderit enim voluptate
							corrupti animi officia quaerat laboriosam asperiores?
						</p>
					</div>
				</div>

				<div className="rounded-x1 border bg-card text-card-foreground shadow w-[350px]">
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="font-semibold leading-none tracking-tight">
							Titulo 3
						</h3>
						<p className="text-sm text-muted-foreground">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
							sequi sint illo autem possimus tempore deserunt blanditiis
							molestiae maxime temporibus quos reprehenderit enim voluptate
							corrupti animi officia quaerat laboriosam asperiores?
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
