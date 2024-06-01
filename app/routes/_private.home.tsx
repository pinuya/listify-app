import { Outlet } from "@remix-run/react"

export default function Home() {
	return (
		<div>
			Private Home
			<Outlet />
		</div>
	)
}
