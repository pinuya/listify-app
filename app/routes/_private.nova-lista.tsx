import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import { type ActionFunctionArgs, json, redirect } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react"
import { useState } from "react"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Label } from "~/components/ui/label"
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
		<div className="w-full max-w-md mx-auto">
			<div className="space-y-4">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold">Ciar nova Lista</h1>
					<p className="text-muted-foreground">
						Digite um nome para sua nova lista e clique em “Criar” para começar.
					</p>
				</div>
				<Form
					method="POST"
					className="grid gap-2"
					id={form.id}
					onSubmit={form.onSubmit}>
					<Label htmlFor="title">Titulo da Lista</Label>
					<input
						className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						placeholder="Entre com um titulo para sua Lista"
						key={fields.title.key}
						name={fields.title.name}
						defaultValue={fields.title.initialValue}
					/>
					<Label htmlFor="description">Descrição (opcional)</Label>
					<input
						className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						placeholder="Descrição da sua Lista"
						key={fields.description.key}
						name={fields.description.name}
						defaultValue={fields.description.initialValue}
					/>
					{/* {itemCounter.map((v) => (
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
					))} */}
					{/* 
					<Button type="button" onClick={() => addItem()}>
						Adicionar
					</Button> */}

					<Button type="submit">Criar Lista</Button>
				</Form>

				<div className="mt-8 space-y-4">
					<h2 className="text-2xl font-bold">Suas Listas</h2>
					<div className="grid gap-4">
						<Card className="p-4 flex items-center justify-between">
							<div className="space-y-1">
								<h3 className="font-semibold">Lista de Desejos</h3>
								<p className="text-muted-foreground text-sm">
									Last updated 1 week ago
								</p>
							</div>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="sm">
									Editar
								</Button>
								<Button variant="destructive" size="sm">
									Deletar
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
