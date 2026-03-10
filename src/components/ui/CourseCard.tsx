import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { Text } from "./Text";

interface Props {
    image: string
    level: string
    title: string
    description: string
    duration: string
    students: number
    rating: number
    price: number
}

export default function CourseCard({
    image,
    level,
    title,
    description,
    duration,
    students,
    rating,
    price
}: Props) {

  return (
    <div className="bg-bgTertiary border border-primaryBorder rounded-3xl overflow-hidden shadow-lg w-full lg:max-w-120 transition-all duration-300 hover:shadow-2xl group">

        <div className="relative overflow-hidden">
            <img
                src={image}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <span className="absolute top-4 left-4 bg-black/60 text-white text-sm sm:text-base px-3 py-1 rounded-full">
                {level}
            </span>
        </div>

        <div className="p-6">

            <h3 className="text-textPrimary text-2xl sm:text-3xl font-semibold mb-3">
                {title}
            </h3>

            <div className="flex items-center gap-6 text-base text-gray-300 mb-4">

                <div className="flex items-center gap-2">
                    <IoTimeOutline className="text-bgSecondary text-lg" />
                    <span>{duration}</span>
                </div>

                <div className="flex items-center gap-2">
                    <HiOutlineUsers className="text-bgSecondary text-lg" />
                    <span>{students} estudiantes</span>
                </div>

                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400 text-lg" />
                    <span>{rating}</span>
                </div>

            </div>

            <div className="max-h-none lg:max-h-0 overflow-hidden transition-all duration-500 lg:group-hover:max-h-40">
                <Text
                    className="text-base sm:text-lg"
                >
                    {description}
                </Text>
            </div>

            <div className="border-t border-primaryBorder my-4"></div>

            <div className="flex items-center justify-between">
                <p className="text-bgSecondary text-2xl sm:text-3xl font-bold">
                    ${price.toLocaleString("es-CO")}
                    <span className="text-base text-gray-400 font-normal ml-1 whitespace-nowrap">
                        COP/mes
                    </span>
                </p>

                <button className="border border-bgSecondary text-bgSecondary text-base px-6 py-2 rounded-lg hover:bg-bgSecondary hover:text-black transition">
                    Inscribirse
                </button>

            </div>

        </div>

    </div>
  )
}