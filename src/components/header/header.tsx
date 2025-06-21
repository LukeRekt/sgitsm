import { Bell, Newspaper, Proportions } from "lucide-react";
import SidebarTrigger from "../sidebar/sidebarTrigger";
import HeaderItems from "./headerItems";
import DropdownMenu from "../dropdownMenu/dropdownMenu";

export default function Header(){
    return(
        <div className="flex items-center justify-between h-[4rem] border-b-2 border-slate-300">
            <div className="flex items-center gap-2">
                <SidebarTrigger/>
                <h1 className="text-2xl">Logo</h1>
            </div>
            <HeaderItems>
                <DropdownMenu/>
                <Proportions className="text-[#4C4949] hover:text-[#252525] transition-all duration-200 cursor-pointer"/>
                <Newspaper className="text-[#4C4949] hover:text-[#252525] transition-all duration-200  cursor-pointer"/>
                <Bell className="text-[#4C4949] hover:text-[#252525] transition-all duration-200  cursor-pointer"/>
                <img src="https://avatars.githubusercontent.com/u/47284018?v=4" className="w-10 h-10 rounded-full" />
            </HeaderItems>
        </div>
    )
}