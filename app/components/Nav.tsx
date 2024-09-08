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
import { Link } from "@remix-run/react"
import { CiCircleList } from "react-icons/ci"

export function Nav() {
	return (
		<nav className="border-b bg-card">
			<div className="flex items-center justify-between p-4">
				<div>
					<CiCircleList />
				</div>
				<div className="flex gap-4">
					<Link to={"/nova-lista"} prefetch="intent">
						<Button>
							<PlusIcon className="mr-2 h-4 w-4" /> Nova Lista
						</Button>
					</Link>

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
							<Link to={"/logout"} prefetch="intent">
								<DropdownMenuItem>Sair</DropdownMenuItem>
							</Link>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	)
}
