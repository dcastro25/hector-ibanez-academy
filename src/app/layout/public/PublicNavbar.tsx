const navLinks =[
    {label: "Inicio", href:"/"},
    {label: "Nosotros", href: "/"},
    {label:"Cursos", href:"/"}
]

export function PublicNavbar(){
    return(
        <div>
            <nav className="text-white">
                <ul>
                    {
                        navLinks.map((item) =>(
                            <li key={item.href}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}