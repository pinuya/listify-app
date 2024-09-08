import { redirect, type LoaderFunctionArgs } from "@remix-run/node"
import { createSupabaseServerClient } from "~/services/supabase.server"
import { getUserOrRedirect } from "~/utils/user.server"

export const loader = async (args: LoaderFunctionArgs) => {
	const { supabaseClient } = createSupabaseServerClient(args.request)

	const { error: userError } = await supabaseClient.auth.signOut()

	return redirect("/")
}
