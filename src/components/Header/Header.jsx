import Image from "next/image";
import Link from "next/link";
import terminal from "../../../public/terminal.png"
import { Menu } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip, TooltipArrow } from "@radix-ui/react-tooltip";

function Header() {

    const flex = ['Arch', 'Neovim', 'Hyprland', 'Tmux'];
    return <>
        <div className="z-50 fixed top-4 left-4 right-4 flex items-center justify-between bg-slate-600 p-4 rounded-lg text-white text-xl border-black bg-opacity-50">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={'#home'} className="transition-all duration-300 ease-linear">
                            <div id="logo" className="gap-4 flex justify-between cursor-pointer select-none">
                                <Image src={terminal} alt="terminal" width={25} height={25} />
                                <p className="font-bold">kaushaldotdev</p>
                            </div>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={10} >
                        <TooltipArrow width={15} height={10} className="fill-white" />
                        <p className="bg-white text-black text-sm rounded-sm p-2">I use {flex[Math.floor(Math.random() * flex.length)]} btw!</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div id="navigation">
                <ul className="lg:flex hidden gap-8 text-white">
                    <li><Link href={"#about"} className="transition-all duration-300 ease-linear">About</Link></li>
                    <li><Link href={"#experience"} className="transition-all duration-300 ease-linear">Experience</Link></li>
                    <li><Link href={"#technologies"} className="transition-all duration-300 ease-linear">Technologies</Link></li>
                    <li><Link href={"#projects"} className="transition-all duration-300 ease-linear">Projects</Link></li>
                    <li><Link href={"#contact"} className="transition-all duration-300 ease-linear">Contact</Link></li>
                </ul>
                <div className="lg:hidden block">

                    <Popover>
                        <PopoverTrigger>
                            <Menu />
                        </PopoverTrigger>
                        <PopoverContent className="w-60 bg-black text-xl text-white">
                            <ul className="gap-8 flex flex-col">
                                <li><Link href={"#about"} className="transition-all duration-300 ease-linear">About</Link></li>
                                <li><Link href={"#experience"} className="transition-all duration-300 ease-linear">Experience</Link></li>
                                <li><Link href={"#technologies"} className="transition-all duration-300 ease-linear">Technologies</Link></li>
                                <li><Link href={"#projects"} className="transition-all duration-300 ease-linear">Projects</Link></li>
                                <li><Link href={"#contact"} className="transition-all duration-300 ease-linear">Contact</Link></li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    </>
}

export default Header;
