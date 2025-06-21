import { Bell, ChevronsDown, Newspaper, Proportions } from "lucide-react";
import SidebarTrigger from "../sidebar/sidebarTrigger";

export default function Header(){
    return(
        <div className="flex items-center justify-between h-[4rem] border-b-2 border-slate-300">
            <div className="flex items-center gap-2">
                <SidebarTrigger/>
                <h1 className="text-2xl">Logo</h1>
            </div>

            <div className="flex items-center gap-2 mr-2">
                <div className="flex text-blue-500 hover:text-blue-600 transition-all duration-200 cursor-pointer">
                    <p className=" font-medium">Criar</p> <ChevronsDown />
                </div>
                <Proportions className="text-[#4C4949] hover:text-[#252525] transition-all duration-200 cursor-pointer"/>
                <Newspaper className="text-[#4C4949] hover:text-[#252525] transition-all duration-200  cursor-pointer"/>
                <Bell className="text-[#4C4949] hover:text-[#252525] transition-all duration-200  cursor-pointer"/>
                <img src="https://avatars.githubusercontent.com/u/47284018?v=4" className="w-10 h-10 rounded-full" />
            </div>
        </div>
    )
}