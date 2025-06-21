import { ChevronsDown } from "lucide-react";
import { useState } from "react";

export default function DropdownMenu(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex text-blue-500 hover:text-blue-600 transition-all duration-200 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <p className="font-medium select-none">Criar</p> {<ChevronsDown className={`${isOpen ? `-rotate-180` : `rotate-0`} transition-all duration-200`}/>} 
        </div>
    )
}