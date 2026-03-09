
import ExperienceGallery from "../../../components/ui/ExperienceGallery";
import InfoCard from "../../../components/ui/InfoCard";
import SubTitle from "../../../components/ui/SubTitle";
import { Text } from "../../../components/ui/Text";

export default function About() {
    return (
        <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 px-5 mb-10 mt-15 lg:px-25 gap-10">

            <div>
                <ExperienceGallery/>
            </div>
            

            <div className="h-auto flex flex-col justify-center">
                <p className="text-bgSecondary font-semibold text-sm lg:text-xl py-1 lg:py-3">
                    Sobre Nosotros
                </p>
                
                <SubTitle 
                    title="Mas de 15 Anos Formando"
                    span="Artistas del Vallenato"
                />
                
                <Text className="text-md lg:text-xl">
                    La Escuela Vallenata Hector Ibanez nacio del sueno de preservar y difundir nuestra musica tradicional. Fundada por el maestro Hector Ibanez, reconocido acordeonero y compositor, nuestra escuela se ha convertido en un referente de la ensenanza musical en el Caribe colombiano.
                </Text>
                
                <Text className="text-base lg:text-xl mb-7">
                    Creemos que la musica vallenata es mas que melodias: es historia, es cultura, es el alma de nuestra tierra. Por eso, cada clase es una experiencia que conecta a nuestros estudiantes con sus raices.
                </Text >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                    <InfoCard title={"Pasion por la Tradicion" } text={"Preservamos y transmitimos el legado del vallenato con amor y respeto por nuestras raices."} />
                    <InfoCard title={"Metodologia Probada"} text={"Tecnicas de ensenanza desarrolladas durante mas de 15 anos para un aprendizaje efectivo."}/>
                    <InfoCard title={"Ambiente Familiar"} text={"Una comunidad calida donde cada estudiante es parte de nuestra familia vallenata."}/>
                    <InfoCard title={"Certificacion Oficial"} text={"Diploma avalado por instituciones culturales del Caribe colombiano."}/>
                </div>
            </div>

        </section>
    )
}