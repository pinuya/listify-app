import { Outlet } from "@remix-run/react"

const lists = [{ id: 1, title: "list 1", desc: "desc" }]

export default function Home() {
	return (
		<div>
			Private Home
			{lists.map(({ id, title, desc }) => (
				<div key={id}>
					<div>{title}</div>
					<div>{desc}</div>
				</div>
			))}
		</div>
	)
}
