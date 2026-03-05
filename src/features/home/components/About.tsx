import SubTitle from "../../../components/ui/SubTitle";
import { Text } from "../../../components/ui/Text";


export default function About() {
    return (
        <section className="lg:grid lg:grid-cols-2 px-15 sm:flex sm:flex-col">
            <div>
            </div>
            <div className="pt-14 lg:pt-30 ">
                <p className="text-bgSecondary font-semibold text-sm lg:text-xl py-1 lg:py-3 ">Sobre Nosotros</p>
                <SubTitle title="Mas de 15 Anos Formando" span="Artistas del Vallenato"/>
                <Text 
                    children="La Escuela Vallenata Hector Ibanez nacio del sueno de preservar y difundir nuestra musica tradicional. Fundada por el maestro Hector Ibanez, reconocido acordeonero y compositor, nuestra escuela se ha convertido en un referente de la ensenanza musical en el Caribe colombiano"
                />
                <Text
                    children="Creemos que la musica vallenata es mas que melodias: es historia, es cultura, es el alma de nuestra tierra. Por eso, cada clase es una experiencia que conecta a nuestros estudiantes con sus raices."
                />
            </div>
        </section>
    )
}
