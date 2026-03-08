import { IoIosMusicalNotes } from "react-icons/io";
import Pill from "../../../components/ui/Pill";
import { ButtonPrimary } from "../../../components/ui/ButtonPrimary";
import ButtonSecondary from "../../../components/ui/ButtonSecondary";
import { CiPlay1 } from "react-icons/ci";
import StatCard from "../../../components/ui/StatCard";
import { FaUserGraduate } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { LuMusic } from "react-icons/lu";
import { Text } from "../../../components/ui/Text";

export function Hero() {
  return (
    <header className=" hidden lg:grid grid-cols-2 mt-6 px-26">
        <div>
                <div className="border-b border-b-primaryBorder">
                    <Pill text="Tradicion y Pasion Vallenata" icon={<IoIosMusicalNotes/>}/>

                    <h1 className="text-6xl font-semibold pt-7 text-textPrimary ">
                        Aprende el Arte del{' '}
                        <span className="relative text-bgSecondary after:absolute after:bottom-1.5 after:left-0 after:h-0.75 after:w-full after:bg-bgSecondary">
                            Vallenato
                        </span>{' '}
                        con los Mejores Maestros
                    </h1>

                    <Text className="text-xs lg:text-lg lg:my-7"
                        children="Descubre la magia de la musica caribeña colombiana. Cursos de acordeon, caja, guacharaca y las canciones que han marcado generaciones. Desde principiantes hasta avanzados."
                    />

                    <div className="flex gap-6 mb-14">
                        <ButtonPrimary text="Comenzar Mi Viaje Musical"/>
                        <ButtonSecondary text="Ver Presentacion" icon={<CiPlay1 />}/>
                    </div>

                </div>

                <div className="mt-12 flex gap-7">
                    <StatCard icon={<FaUserGraduate />} text={"500"} text2="Estudiantes Graduados"/>
                    <StatCard icon={<PiMedalBold />} text={"15"} text2="Anos de Experiencia"/>
                    <StatCard icon={<LuMusic />} text={"50"} text2="Cursos Disponibles"/>
                </div>
        </div>
        <div className="relative flex justify-center">

            <div className="absolute w-110 h-140 bg-[#2b1a0a] rounded-3xl rotate-6"></div>

            <div className="absolute w-110 h-140 bg-[#3b240c] rounded-3xl -rotate-3"></div>
            <img
                src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
                alt="Acordeonero vallenato"
                className="relative w-105 h-130 object-cover rounded-3xl z-10"
            />

        </div>
    </header>
  )
}



