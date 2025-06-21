export default function HeaderItems({children}: {children: React.ReactNode}){
    return (
        <div className="flex items-center gap-2 mr-2">
            {children}
        </div>
        
    )
    
}