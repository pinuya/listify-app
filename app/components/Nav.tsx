import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { ModeToggle } from "./mode-toggle"

export function Nav() {
	return (
		<nav className="border-b bg-card">
			<div className="flex items-center justify-between p-4">
				<div>app</div>
				<div className="flex gap-4">
					<Button>
						<PlusIcon className="mr-2 h-4 w-4" /> Nova Lista
					</Button>

					<ModeToggle />

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar>
								<AvatarImage src="https://github.com/pinuya.png" />
								<AvatarFallback>TA</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Minha conta</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Sair</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	)
}
