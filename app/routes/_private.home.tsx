import { Outlet } from "@remix-run/react"

const lists = [{ id: 1, title: "list 1", desc: "desc" }]

export default function Home() {
	return (
		<div className="container relative flex-col items-center justify-center">
			<h1 className="text-5xl font-semibold">Pagina Pessoal</h1>
			{lists.map(({ id, title, desc }) => (
				<div key={id}>
					<div>{title}</div>
					<div>{desc}</div>
				</div>
			))}
		</div>
	)
}
