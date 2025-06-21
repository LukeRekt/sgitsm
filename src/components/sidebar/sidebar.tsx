import SidebarItem from "./sidebarItem";
import SidebarContainer from "./sidebarContainer";
import { BookOpen, ChartPie, Computer, ReplaceAll, Settings, Ticket } from "lucide-react";

export default function Sidebar(){

    // const [isOpen, setIsOpen] = useState(false);
 
    return (
        <div className="flex flex-col items-center bg-blue-500 w-[5rem] border-r-2 border-slate-300">
            <SidebarContainer>
                <SidebarItem Icon={ChartPie} nome="nome"/>
                <SidebarItem Icon={Ticket} nome="nome"/>
                <SidebarItem Icon={ReplaceAll} nome="nome"/>
                <SidebarItem Icon={Computer} nome="nome"/>
                <SidebarItem Icon={BookOpen} nome="nome"/>
                <SidebarItem Icon={Settings} nome="nome"/>
            </SidebarContainer>
            
        </div>
    )
}