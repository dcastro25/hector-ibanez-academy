import { useEffect, useState } from "react"

const navLinks =[
    {label: "Inicio", href:"/"},
    {label: "Nosotros", href: "/"},
    {label:"Cursos", href:"/"},
    {label: "Dasboard", href:"/"}
]

export function DesktopNavbar(){
    
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <div className="sticky z-50 w-full top-0 border border-[#2a1f15] hidden lg:flex flex-col ">
            <div className={`bg-[#1a1208] text-[#e9ba6a] px-20 flex justify-between items-center transition-all duration-300 ease-out ${isAtTop ? "opacity-100 h-10 translate-y-0 border border-[#2a1f15] " : "opacity-0 h-0 -translate-y-full pointer-events-none"}`}>
                <div className="flex gap-8">
                    <a href="#">Gamil@gmail.com</a>
                    <a href="#">322 332 2352</a>
                    <a href="#">Monteria Cordoba</a>
                </div>

                <div>
                    <p> Inscripciones Abiertas 2026</p>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center bg-[#120b07] py-5 ">
                <div className="max-w-6xl flex flex-row gap-4">
                    <img src="/img/logo.jpg" className="h-14 w-auto rounded-2xl"/>
                    <div>
                        <h1 className="text-[#ece3d6] font-bold text-lg">Hector Ibañez </h1>
                        <p className="text-[#ece3d67c]">Escuela vallenata</p>
                    </div>
                </div>

                <nav >
                    <ul className="w-full flex flex-row gap-8">
                        {
                            navLinks.map((item) =>(
                                <li key={item.href}
                                className="relative group font-semibold cursor-pointer"
                                >
                                <span className="text-white transition-colors duration-300 group-hover:text-[#cf8e1e]">
                                    {item.label}
                                </span>

                                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#cf8e1e] scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                                </li>
                                
                            ))
                        }
                    </ul>
                </nav>
                <button className="bg-[#cf8e1e] px-4 py-1.5 font font-semibold rounded-lg hover:shadow-[0_6px_12px_rgba(207,142,30,0.25)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                    Inscribete ahora
                </button>
            </div>

        </div>
    )
}