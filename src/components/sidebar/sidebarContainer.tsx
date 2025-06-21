
export default function SidebarContainer({children} : {children: React.ReactNode}){
 
    return (
        <div className="flex flex-col gap-3 mt-2">
            {children}
        </div>
    )
}