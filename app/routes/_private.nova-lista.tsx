import { Form } from "@remix-run/react"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "~/components/ui/button"

export default function NewList() {
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
		<div className="grid gap-6">
			<Form method="POST" className="grid gap-2">
				<input
					className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
					type="text"
					placeholder="Titulo"
				/>
				<input
					className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
					type="text"
					placeholder="Descricao"
				/>
				{itemCounter.map((v) => (
					<div key={v} className="flex">
						<input
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
							type="text"
							placeholder="item"
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
