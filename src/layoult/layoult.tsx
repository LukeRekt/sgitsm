import Sidebar from "../components/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layoult({children}: LayoutProps){
    return(
        <div className="flex h-[100vh] w-[100%] bg-[#EFEFEF]">
            <Sidebar/>
            {children}
        </div>
    )
}