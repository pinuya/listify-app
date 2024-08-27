import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { CalendarIcon, ListIcon, Plus, UsersIcon } from "lucide-react"
import { ModeToggle } from "~/components/mode-toggle"
import { Button } from "~/components/ui/button"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Input } from "~/components/ui/input"

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
				<div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
					<div className="max-w-6xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
							Mantenha-se organizado com nosso poderoso aplicativo de tarefas
						</h1>
						<p className="mt-4 text-lg text-muted-foreground">
							Gerencie facilmente suas tarefas, defina lembretes e colabore com
							sua equipe. Baixe nosso aplicativo hoje e assuma o controle de sua
							produtividade.
						</p>
						<div className="mt-6">
							<Link
								to={""}
								className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
								Comece agora!
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 md:grid-cols-3">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<CalendarIcon className="h-10 w-10 text-primary" />
							<div className="space-y-1">
								<h3 className="text-xl font-bold">
									Visualização de calendário
								</h3>
								<p className="text-muted-foreground">
									Visualize suas tarefas em um calendário para ficar em dia com
									prazos e datas de vencimento.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<ListIcon className="h-10 w-10 text-primary" />
							<div className="space-y-1">
								<h3 className="text-xl font-bold">Gerenciamento de tarefas</h3>
								<p className="text-muted-foreground">
									Crie, organize e priorize facilmente suas tarefas para
									impulsionar sua produtividade.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<UsersIcon className="h-10 w-10 text-primary" />
							<div className="space-y-1">
								<h3 className="text-xl font-bold">Colaboração</h3>
								<p className="text-muted-foreground">
									Convide sua equipe para colaborar em tarefas e projetos,
									mantendo todos em sincronia.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
								Depoimentos
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								O que nossos usuários dizem
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Ouça nossos clientes satisfeitos sobre como nosso aplicativo de
								tarefas tem funcionado transformaram sua produtividade.
							</p>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="bg-muted rounded-lg p-6">
									<blockquote className="text-muted-foreground">
										"Este aplicativo de tarefas foi uma virada de jogo para
										minha equipe. Seus recursos de colaboração facilitam o
										controle de nossos projetos."
									</blockquote>
									<div className="mt-4 flex items-center space-x-4">
										<div>
											<p className="text-sm font-medium">John Doe</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="bg-muted rounded-lg p-6">
									<blockquote className="text-muted-foreground">
										"Eu costumava ter dificuldades para me manter organizado,
										mas esse aplicativo de\n tarefas transformou completamente
										minha produtividade. Altamente\n recomendado!"
									</blockquote>
									<div className="mt-4 flex items-center space-x-4">
										<div>
											<p className="text-sm font-medium">Sarah Anderson</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
								Cadastre-se
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Junte-se ao Listify.
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Assuma o controle de suas tarefas e aumente sua produtividade
								com nosso poderoso aplicativo de tarefas. Cadastre-se hoje e
								comece a conquistar suas tarefas.
							</p>
						</div>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<form className="flex gap-2">
								<Input
									type="email"
									placeholder="Enter your email"
									className="max-w-lg flex-1"
								/>
								<Button type="submit">Cadastre-se</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground">
					&copy; 2024 Listify. Todos os direitos reservados.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link to={""} className="text-xs hover:underline underline-offset-4">
						Terms of Service
					</Link>
					<Link to={""} className="text-xs hover:underline underline-offset-4">
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}
