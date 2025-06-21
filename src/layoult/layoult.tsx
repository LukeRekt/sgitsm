interface LayoutProps {
  children: React.ReactNode;
}

export default function Layoult({children}: LayoutProps){
    return(
        <div>{children}</div>
    )
}