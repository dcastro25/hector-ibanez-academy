
import { IoHomeOutline } from "react-icons/io5"
import { LiaShoppingBasketSolid } from "react-icons/lia"
import { PiMusicNotesPlusDuotone } from "react-icons/pi"

const navLinksMobile =[
    {id: 1, label: "Inicio", href: "/", icon: IoHomeOutline},
    {id: 2, label: "cursos", href: "/", icon: PiMusicNotesPlusDuotone},
    {id: 3, label: "Inicio", href: "/", icon: IoHomeOutline},
    {id: 4, label: "cursos", href: "/", icon: LiaShoppingBasketSolid},
    {id: 5, label: "cursos", href: "/", icon: LiaShoppingBasketSolid}
]

export function MobileMenu (){
    return(
        <div className="bg-bgPrimary w-full lg:hidden fixed bottom-0 border border-primaryBorder rounded-t-xl">
            <nav>
                <ul className =" text-textSecondary h-16 flex text-2xl justify-evenly items-center">
                    {
                        navLinksMobile.map((items) =>{
                            const Icon = items.icon
                            return(
                                <li key = {items.id} className="hover:text-textPrimary p-3 hover:bg-bgSecondary rounded-xl hover:-translate-y-2 scale-100 transition-all duration-300 ease-out">
                                    <a href={items.href}>
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