import type { LucideIcon } from "lucide-react";

export default function SidebarItem({Icon, nome} : {Icon: LucideIcon, nome: React.ReactNode}){


    return (
        <div>
            <div className={`${nome == "dashboard" ? "bg-white text-black" : "text-white"} p-2 rounded-lg hover:bg-white cursor-pointer transition-all duration-200  hover:text-black`}>
                {<Icon className="w-6 h-6"/>}
            </div>
            {/* {nome} */}
        </div>
    )
}