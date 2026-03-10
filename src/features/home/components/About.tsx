import { FaRegHeart } from "react-icons/fa"
import ExperienceGallery from "../../../components/ui/ExperienceGallery"
import InfoCard from "../../../components/ui/InfoCard"
import SubTitle from "../../../components/ui/SubTitle"
import { Text } from "../../../components/ui/Text"
import { MdApproval } from "react-icons/md"
import { RiUserCommunityLine } from "react-icons/ri"
import { PiCertificate } from "react-icons/pi"

const features = [
    {
        title: "Pasion por la Tradicion",
        text: "Preservamos y transmitimos el legado del vallenato con amor y respeto por nuestras raices.",
        icon: <FaRegHeart />
    },
    {
        title: "Metodologia Probada",
        text: "Tecnicas de ensenanza desarrolladas durante mas de 15 anos para un aprendizaje efectivo.",
        icon: <MdApproval />
    },
    {
        title: "Ambiente Familiar",
        text: "Una comunidad calida donde cada estudiante es parte de nuestra familia vallenata.",
        icon: <RiUserCommunityLine />
    },
    {
        title: "Certificacion Oficial",
        text: "Diploma avalado por instituciones culturales del Caribe colombiano.",
        icon: <PiCertificate />
    }
]

export default function About() {
    return (
        <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 px-6 sm:px-10 lg:px-16 xl:px-24 mt-16 lg:mt-24 mb-10 lg:mb-24">

            <div className="flex justify-center">
                <ExperienceGallery />
            </div>

            <div className="flex flex-col justify-center">

                <p className="text-bgSecondary font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 lg:mb-4">
                    Sobre Nosotros
                </p>

                <SubTitle
                    title="Mas de 15 Anos Formando"
                    span="Artistas del Vallenato"
                />

                <Text className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-6 lg:mt-8 leading-relaxed">
                    La Escuela Vallenata Hector Ibanez nacio del sueno de preservar y difundir nuestra musica tradicional. Fundada por el maestro Hector Ibanez, reconocido acordeonero y compositor, nuestra escuela se ha convertido en un referente de la ensenanza musical en el Caribe colombiano.
                </Text>

                <Text className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 leading-relaxed">
                    Creemos que la musica vallenata es mas que melodias: es historia, es cultura, es el alma de nuestra tierra. Por eso, cada clase es una experiencia que conecta a nuestros estudiantes con sus raices.
                </Text>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <InfoCard
                            key={index}
                            title={feature.title}
                            text={feature.text}
                            icon={feature.icon}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}