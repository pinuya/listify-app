import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { type ActionFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { createSupabaseServerClient } from "~/services/supabase.server"

const listSchema = z.object({
	title: z.string(),
	description: z.string(),
	items: z.array(z.string()),
})

export const action = async (args: ActionFunctionArgs) => {
	const formData = await args.request.formData()
	const submission = parseWithZod(formData, { schema: listSchema })

	if (submission.status !== "success") {
		return json(submission.reply())
	}

	const { title, description, items } = submission.value
	const { supabaseClient } = createSupabaseServerClient(args.request)
	const { data, error } = await supabaseClient
		.from("lists")
		.insert({
			title,
			description,
		})
		.select()
		.maybeSingle()

	if (error || !data) {
		throw new Error(error?.message)
	}

	const { error: itemError } = await supabaseClient
		.from("list_itens")
		.insert(items.map((item) => ({ title: item, list_id: data.id })))

	if (itemError) {
		throw new Error(itemError?.message)
	}

	return redirect("/home")
}
export default function NewList() {
	const lastResult = useActionData<typeof action>()

	const [form, fields] = useForm({
		// Sync the result of last submission
		lastResult,

		// Reuse the validation logic on the client
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: listSchema })
		},

		// Validate the form on blur event triggered
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})

	const [itemCounter, setItemCounter] = useState([1])

	const removeItem = (v: number) => {
		setItemCounter((prev) => prev.filter((value) => value !== v))
	}

	const addItem = () => {
		if (itemCounter.length === 0) {
			setItemCounter([1])
			return
		}
		setItemCounter((prev) => [...prev, prev[prev.length - 1] + 1])
	}

	return (
		// className="flex flex-1 items-center justify-center gap-y-10 gap-x-28 sm:flex-row"
		<div>
			<h1 className="text-3xl font-semibold">Criar nova Lista</h1>
			<Form
				method="POST"
				className="grid gap-2"
				id={form.id}
				onSubmit={form.onSubmit}>
				<input
					className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
					type="text"
					placeholder="Titulo"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={fields.title.initialValue}
				/>
				<input
					className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
					type="text"
					placeholder="Descricao"
					key={fields.description.key}
					name={fields.description.name}
					defaultValue={fields.description.initialValue}
				/>
				{itemCounter.map((v) => (
					<div key={v} className="flex">
						<input
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="item"
							key={fields.items.key}
							name={fields.items.name}
						/>
						<Trash2 onClick={() => removeItem(v)} />
					</div>
				))}

				<Button type="button" onClick={() => addItem()}>
					Adicionar
				</Button>

				<Button type="submit">Criar Lista</Button>
			</Form>
		</div>
	)
}
