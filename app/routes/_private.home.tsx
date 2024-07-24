import type { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { createSupabaseServerClient } from "~/services/supabase.server"
import { getUserOrRedirect } from "~/utils/user.server"

export const loader = async (args: LoaderFunctionArgs) => {
	await getUserOrRedirect(args.request)
	const { supabaseClient } = createSupabaseServerClient(args.request)
	const { data, error } = await supabaseClient.from("lists").select()

	if (error) {
		throw new Error(error?.message)
	}

	return {
		lists: data,
	}
}

export default function Home() {
	const { lists } = useLoaderData<typeof loader>()
	return (
		<div className="container relative flex-col items-center justify-center">
			<h1 className="text-5xl font-semibold">Pagina Pessoal</h1>
			{lists.map(({ id, title, description }) => (
				<div key={id}>
					<div>{title}</div>
					<div>{description}</div>
				</div>
			))}
		</div>
	)
}
