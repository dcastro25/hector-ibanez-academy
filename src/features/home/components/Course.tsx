import { useState } from "react"
import CourseCard from "../../../components/ui/CourseCard"
import SubTitle from "../../../components/ui/SubTitle"
import { Text } from "../../../components/ui/Text"
import { courses } from "../../../Course-Mocks/Course-Mocks"

const categories = [
  { name: "Todos", value: "all" },
  { name: "Instrumentos", value: "instrument" },
  { name: "Canto", value: "singing" },
  { name: "Teoría", value: "theory" }
]

export default function CourseSection() {

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredCourses =
        activeCategory === "all"
            ? courses
            : courses.filter(course => course.category === activeCategory)

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-10">

            <div className="max-w-screen-3xl 2xl:max-w-450 mx-auto">

                <div className="text-center text-balance mb-10 flex flex-col items-center gap-6">

                    <div className="max-w-3xl">
                        <SubTitle
                            title="Descubre Tu Camino en la "
                            span="Musica Vallenata"
                        />
                    </div>

                    <Text className="text-xl sm:text-2xl max-w-7xl leading-relaxed">
                        Aprende acordeon, caja, guacharaca, canto y composicion
                        con maestros expertos. Nuestros cursos estan diseñados
                        para todos los niveles, desde principiantes hasta
                        musicos avanzados que desean perfeccionar su tecnica.
                    </Text>

                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-14">

                    {categories.map((cat) => (

                        <button
                            key={cat.value}
                            onClick={() => setActiveCategory(cat.value)}
                            className={`
                                px-6 py-3 text-base rounded-full border transition-all duration-300
                                ${activeCategory === cat.value
                                    ? "bg-bgSecondary text-black border-bgSecondary"
                                    : "border-primaryBorder text-gray-300 hover:border-bgSecondary hover:text-white"}
                            `}
                        >
                            {cat.name}
                        </button>

                    ))}

                </div>

                <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

                    {filteredCourses.map((course) => (

                        <CourseCard
                            key={course.id}
                            {...course}
                        />

                    ))}

                </div>

            </div>

        </section>
    )
}