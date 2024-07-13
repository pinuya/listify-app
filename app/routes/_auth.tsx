import { type LoaderFunctionArgs, redirect } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { getUser } from "~/utils/user.server"

export const loader = async (args: LoaderFunctionArgs) => {
	const user = await getUser(args.request)

	if (user instanceof Error !== true) {
		throw redirect("/home")
	}
	return {}
}

export default function Auth() {
	return (
		<div>
			<Outlet />
		</div>
	)
}
