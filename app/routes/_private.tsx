import { Outlet, redirect } from "@remix-run/react"
import { Nav } from "~/components/Nav"

export const loader = () => {
	const user = false
	// if (!user) {
	// 	throw redirect("/entrar")
	// }
	return {}
}

export default function Private() {
	return (
		<div>
			<Nav />

			<div className="">
				<Outlet />
			</div>
		</div>
	)
}
