import { Outlet } from "@remix-run/react"

export default function Auth() {
	return (
		<div>
			Layout Auth
			<Outlet />
		</div>
	)
}
