import Image from "next/image";
import { Button } from "../ui/button";
import terminal from "../../../public/terminal.png"
import { Menu } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function Header() {
    return <>
        <div className="fixed top-4 left-4 right-4 flex items-center justify-between bg-slate-800 p-4 rounded-lg text-white text-xl">
            <div id="logo" className="gap-4 flex justify-between cursor-pointer select-none">
                <Image src={terminal} alt="terminal" width={25} height={25} />
                <p className="font-bold">kaushaldotdev</p>
            </div>
            <div id="navigation">
                <ul className="md:flex hidden gap-8 text-white">
                    <li>About</li>
                    <li>Experience</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="md:hidden block">

                    <Popover>
                        <PopoverTrigger>
                            <Menu />
                        </PopoverTrigger>
                        <PopoverContent className="w-60 bg-black text-xl text-white">
                            <ul className="gap-8 flex flex-col">
                                <li>About</li>
                                <li>Experience</li>
                                <li>Technologies</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    </>
}

export default Header;
