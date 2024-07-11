import { redirect } from "@remix-run/node"
import { createSupabaseServerClient } from "~/services/supabase.server"

export async function getUser(request: Request) {
	const { supabaseClient } = createSupabaseServerClient(request)

	const { data, error: userError } = await supabaseClient.auth.getUser()

	if (!data || userError) {
		return new Error("userError")
	}

	return {
		...data.user,
		name: data.user.user_metadata.name as string,
		lastName: data.user.user_metadata.lastName as string,
	}
}

export async function getUserOrRedirect(request: Request) {
	const user = await getUser(request)
	if (user instanceof Error) {
		console.warn("Error getting user", user)
		throw redirect("/entrar")
	}

	return user
}
