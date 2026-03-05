import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

export function HeroMobile() {
  return (
    <section className="lg:hidden flex flex-col">
        <div className="sticky top-0 z-50 flex flex-row justify-between px-5 items-center bg-bgPrimary py-5 border-b border-primaryBorder">
            <div className="flex flex-row gap-6">
                <img src="/img/logo.jpg" className="h-14 w-auto rounded-2xl"/>
                <div>
                    <h1 className="text-textPrimary font-bold text-lg">Hector Ibañez </h1>
                    <p className="text-textSecondary">Escuela vallenata</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex items-center flex-1 bg-[#2b1a0a] border border-primaryBorder rounded-xl px-4 py-2">
                    <FaSearch className="text-textSecondary mr-2" />
                    <input
                    type="text"
                    placeholder="Buscar cursos..."
                    className="flex-1 bg-transparent outline-none text-textSecondary placeholder:text-textSecondary"
                    />
                </div>
                <button className="w-11 h-11 rounded-xl bg-bgSecondary flex items-center justify-center">
                    <IoFilter />
                </button>

            </div>
        </div>
        <div className="px-5 mt-5">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#1a1107] via-[#2b1a0a] to-[#3b240c]">
                <div className="flex">
                    <div className="flex flex-1 flex-col justify-center p-5">
                        <span className="bg-bgSecondary/90 text-black text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-2">
                            INSCRIPCIONES 2026
                        </span>
                        <h1 className="text-[22px] font-bold text-textPrimary leading-tight">
                            Aprende el Arte del{" "}
                            <span className="text-bgSecondary">
                            Vallenato
                            </span>
                        </h1>
                        <p className="text-xs text-textSecondary mt-2">
                            Cursos de acordeón, caja y guacharaca con los mejores maestros.
                        </p>
                        <button className="mt-4 bg-bgSecondary text-black text-xs font-bold px-4 py-2 rounded-lg w-fit">
                            Comenzar Ahora
                        </button>
                    </div>
                            <div className="relative w-35">
                                <img
                                    src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
                                    alt="Acordeonero vallenato"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-r from-[#2b1a0a] via-transparent"/>
                            </div>
                </div>
            </div>
        </div>
    </section>
  )
}

    