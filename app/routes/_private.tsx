import type { LoaderFunctionArgs } from "@remix-run/node"
import { Outlet, redirect } from "@remix-run/react"
import { Nav } from "~/components/Nav"
import { getUser, getUserOrRedirect } from "~/utils/user.server"

export const loader = async (args: LoaderFunctionArgs) => {
	const user = await getUserOrRedirect(args.request)
	console.log(user)
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
