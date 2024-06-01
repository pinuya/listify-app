import { Outlet, redirect } from "@remix-run/react"

export const loader = () => {
	const user = false
	if (!user) {
		throw redirect("/entrar")
	}
}

export default function Private() {
	return (
		<div>
			Layout Private
			<Outlet />
		</div>
	)
}
