import { IoIosMusicalNotes } from "react-icons/io"
import Pill from "../../../components/ui/Pill"
import { ButtonPrimary } from "../../../components/ui/ButtonPrimary"
import ButtonSecondary from "../../../components/ui/ButtonSecondary"
import { CiPlay1 } from "react-icons/ci"
import StatCard from "../../../components/ui/StatCard"
import { FaUserGraduate } from "react-icons/fa"
import { PiMedalBold } from "react-icons/pi"
import { LuMusic } from "react-icons/lu"
import { Text } from "../../../components/ui/Text"

export function Hero() {
    return (
        <header className="hidden lg:grid grid-cols-2 items-center max-w-7xl 2xl:max-w-none mx-auto px-6 lg:px-10 xl:px-16 2xl:px-10 pt-16 mb-30 gap-10 xl:gap-14 2xl:gap-16">

            <div className="flex flex-col">

                <div className="border-b border-b-primaryBorder pb-10 xl:pl-10 2xl:pl-20">

                    <Pill
                        text="Tradicion y Pasion Vallenata"
                        icon={<IoIosMusicalNotes />}
                    />

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-semibold tracking-tight pt-6 text-textPrimary leading-tight">
                        Aprende el Arte del{" "}
                        <span className="relative text-bgSecondary after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-bgSecondary">
                            Vallenato
                        </span>{" "}
                        con los Mejores Maestros
                    </h1>

                    <Text
                        className="text-lg lg:text-xl xl:text-2xl mb-8 mt-6 max-w-2xl leading-relaxed"
                        children="Descubre la magia de la musica caribeña colombiana. Cursos de acordeon, caja, guacharaca y las canciones que han marcado generaciones. Desde principiantes hasta avanzados."
                    />

                    <div className="flex gap-4">
                        <ButtonPrimary text="Comenzar Mi Viaje Musical" />
                        <ButtonSecondary text="Ver Presentacion" icon={<CiPlay1 />} />
                    </div>

                </div>

                <div className="mt-10 xl:mt-12 flex justify-evenly w-full">
                    <StatCard
                        icon={<FaUserGraduate />}
                        text={"500"}
                        text2="Estudiantes Graduados"
                    />

                    <StatCard
                        icon={<PiMedalBold />}
                        text={"15"}
                        text2="Anos de Experiencia"
                    />

                    <StatCard
                        icon={<LuMusic />}
                        text={"50"}
                        text2="Cursos Disponibles"
                    />
                </div>

            </div>

            <div className="relative flex justify-center items-center xl:pl-10 2xl:pl-20">

                <div className="absolute w-72 h-96 lg:w-80 lg:h-112 xl:w-96 xl:h-128 2xl:w-143 2xl:h-187 bg-amber-950 rounded-3xl rotate-6"></div>

                <div className="absolute w-72 h-96 lg:w-80 lg:h-112 xl:w-96 xl:h-128 2xl:w-143 2xl:h-187 bg-amber-950 rounded-3xl -rotate-3"></div>

                <img
                    src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
                    alt="Acordeonero vallenato"
                    className="relative w-72 h-96 lg:w-80 lg:h-112 xl:w-96 xl:h-128 2xl:w-140 2xl:h-180 object-cover object-top rounded-3xl z-10 shadow-2xl"
                />

            </div>

        </header>
    )
}