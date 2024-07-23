import { createServerClient, parse, serialize } from "@supabase/ssr"
import type { Database } from "database.types"

export const createSupabaseServerClient = (request: Request, admin = false) => {
	const cookies = parse(request.headers.get("Cookie") ?? "")
	const headers = new Headers()
	const supabaseClient = createServerClient<Database>(
		process.env.SUPABASE_URL,
		admin ? process.env.SERVICE_ROLE_KEY : process.env.ANON_KEY,
		{
			cookies: {
				get(key) {
					return cookies[key]
				},
				set(key, value, options) {
					headers.append("Set-Cookie", serialize(key, value, options))
				},
				remove(key, options) {
					headers.append("Set-Cookie", serialize(key, "", options))
				},
			},
		},
	)

	return { supabaseClient, headers }
}
