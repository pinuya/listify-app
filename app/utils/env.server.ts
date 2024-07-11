import { z } from "zod"

const schema = z.object({
	NODE_ENV: z.enum(["production", "development", "test"] as const),
	SUPABASE_URL: z.string(),
	JWT_SECRET: z.string(),
	ANON_KEY: z.string(),
	SERVICE_ROLE_KEY: z.string(),
})

type ValidatedEnvs = z.infer<typeof schema>

declare global {
	namespace NodeJS {
		interface ProcessEnv extends ValidatedEnvs {}
	}
}

export function init() {
	const parsed = schema.safeParse(process.env)

	if (parsed.success === false) {
		throw new Error("Invalid environment variables")
	}
}

export function getEnv() {
	return {
		MODE: process.env.NODE_ENV,
	}
}

type Env = ReturnType<typeof getEnv>

declare global {
	var ENV: Env
	interface Window {
		ENV: Env
	}
}
