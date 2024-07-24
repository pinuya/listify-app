import type { LoaderFunctionArgs } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { Nav } from "~/components/Nav"
import { getUserOrRedirect } from "~/utils/user.server"

export const loader = async (args: LoaderFunctionArgs) => {
	await getUserOrRedirect(args.request)
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
