import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { useState } from "react";

export default function SidebarTrigger(){
    const [tempIsOpen, setTempIsOpen] = useState(false);
    return (
         tempIsOpen ? <PanelLeftClose onClick={() =>setTempIsOpen(!tempIsOpen)} className="w-5 h-5 text-[#4C4949] hover:text-[#252525] transition-all duration-200 cursor-pointer"/> :
         <PanelRightClose onClick={() => setTempIsOpen(!tempIsOpen)} className="w-5 h-5 text-[#4C4949] hover:text-[#252525] transition-all duration-200 cursor-pointer"/>
    )
}