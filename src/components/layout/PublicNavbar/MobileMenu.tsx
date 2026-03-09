
import { useState } from "react"
import { IoHomeOutline } from "react-icons/io5"
import { LiaShoppingBasketSolid } from "react-icons/lia"
import { PiMusicNotesPlusDuotone } from "react-icons/pi"

const navLinksMobile =[
    {id: 1, label: "Inicio", href: "#", icon: IoHomeOutline},
    {id: 2, label: "cursos", href: "#", icon: PiMusicNotesPlusDuotone},
    {id: 3, label: "Inicio", href: "#", icon: IoHomeOutline},
    {id: 4, label: "cursos", href: "#", icon: LiaShoppingBasketSolid},
    {id: 5, label: "cursos", href: "#", icon: LiaShoppingBasketSolid}
]

export function MobileMenu (){

    const [active, setActive] = useState<number | null>(null)

    return(
        <div className="bg-bgPrimary w-full lg:hidden fixed bottom-0 border border-primaryBorder rounded-t-xl z-50">
            <nav>
                <ul className =" text-textSecondary h-16 flex text-2xl justify-evenly items-center">
                    {
                        navLinksMobile.map((items) =>{
                            const Icon = items.icon
                            return(
                                <li key = {items.id} className={`hover:text-textPrimary p-3 hover:bg-bgSecondary rounded-xl hover:-translate-y-3 scale-100 transition-all duration-300 ease-out ${active === items.id ? "bg-bgSecondary text-textPrimary -translate-y-3" : ""}`}>
                                    <a href={items.href}
                                    onClick={() => setActive(items.id)}
                                    >
                                        <Icon/>
                                    </a>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}