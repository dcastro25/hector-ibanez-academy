import { FaSearch, FaUserGraduate } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import StatCard from "../../../components/ui/StatCard";
import { LuMusic } from "react-icons/lu";
import { PiMedalBold } from "react-icons/pi";

export function HeroMobile() {
  return (
    <section className="lg:hidden flex flex-col">
        <div className="sticky top-0 z-50 bg-bgPrimary py-5 border-b border-primaryBorder px-5">

            <div className="flex items-center gap-4 mb-4">
                <img 
                    src="/img/logo.jpg" 
                    className="h-12 w-auto rounded-xl"
                />

                <div>
                    <h1 className="text-textPrimary font-bold text-base">
                        Hector Ibañez
                    </h1>
                    <p className="text-textSecondary text-base">
                        Escuela vallenata
                    </p>
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
        <div className="px-5 pb-7 mt-5 border-b border-primaryBorder">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#1a1107] via-[#2b1a0a] to-[#3b240c]">
                <div className="flex">
                    <div className="flex flex-1 flex-col justify-center p-5">
                        <span className="bg-bgSecondary/90 text-black text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-2">
                            INSCRIPCIONES 2026
                        </span>
                        <h1 className="text-2xl font-bold text-textPrimary leading-tight">
                            Aprende el Arte del{" "}
                            <span className="text-bgSecondary">
                            Vallenato
                            </span>
                        </h1>
                        <p className="text-sm text-textSecondary mt-2">
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
            <div className="mt-7 flex gap-5 w-full h-auto justify-center">
                <StatCard icon={<FaUserGraduate />} text={"500"} text2="Estudiantes Graduados"/>
                <StatCard icon={<PiMedalBold  />} text={"15"} text2="Anos de Experiencia"/>
                <StatCard icon={<LuMusic />} text={"50"} text2="Cursos Disponibles"/>
            </div>
    </section>
  )
}

    