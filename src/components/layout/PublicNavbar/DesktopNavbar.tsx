import { useEffect, useState } from "react"
import { CgMail } from "react-icons/cg"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlinePhone } from "react-icons/md"
import { ButtonPrimary } from "../../ui/ButtonPrimary"

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
        <div className="sticky z-50 w-full top-0 border border-primaryBorder hidden lg:flex flex-col ">
            <div className={`bg-[#1a1208] text-bgSecondary px-26 flex justify-between items-center transition-all duration-300 ease-out ${isAtTop ? "opacity-100 h-10 translate-y-0 border border-primaryBorder " : "opacity-0 h-0 -translate-y-full pointer-events-none"}`}>
                <div className="flex gap-8">
                    <a href="#" className="flex items-center gap-1"><CgMail /> Gamil@gmail.com</a>
                    <a href="#" className="flex items-center gap-1"><MdOutlinePhone /> 322 332 2352</a>
                    <a href="#" className="flex items-center gap-1"><IoLocationOutline /> Monteria / Cordoba</a>
                </div>

                <div>
                    <p> Inscripciones Abiertas 2026</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-bgPrimary px-26 py-5 ">
                <div className="max-w-6xl flex flex-row gap-4">
                    <img src="/img/logo.jpg" className="h-14 w-auto rounded-2xl"/>
                    <div>
                        <h1 className="text-textPrimary font-bold text-lg">Hector Ibañez </h1>
                        <p className="text-textSecondary">Escuela vallenata</p>
                    </div>
                </div>

                <nav >
                    <ul className="w-full flex flex-row gap-8">
                        {
                            navLinks.map((item) =>(
                                <li key={item.href}
                                className="relative group font-semibold cursor-pointer"
                                >
                                <span className="text-textPrimary transition-colors duration-300 group-hover:text-bgSecondary">
                                    {item.label}
                                </span>

                                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-bgSecondary scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
                                </li>
                                
                            ))
                        }
                    </ul>
                </nav>
                <ButtonPrimary text="Inscribete ahora"/>
            </div>

        </div>
    )
}