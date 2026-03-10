export interface Course{
    id : number
    title: string
    description : string
    level : string
    duration : string
    students: number
    rating: number
    price: number
    category: "instrument" | "singing" | "theory"
    image: string
}

export const courses: Course[] = [
{
id: 1,
title: "Composición Vallenata",
description: "Aprende a crear tus propias canciones. Conoce la estructura, las letras y las melodías inspiradas en los grandes compositores del Caribe.",
level: "Intermedio",
duration: "3 meses",
students: 35,
rating: 4.8,
price: 280000,
category: "theory",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 2,
title: "Fundamentos del Acordeón",
description: "Aprende las bases del acordeón y comienza a interpretar los ritmos tradicionales del vallenato paso a paso.",
level: "Principiante",
duration: "4 meses",
students: 52,
rating: 4.7,
price: 250000,
category: "instrument",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 3,
title: "Técnicas de Caja Vallenata",
description: "Domina los ritmos esenciales de la caja vallenata y desarrolla coordinación y ritmo.",
level: "Principiante",
duration: "2 meses",
students: 40,
rating: 4.6,
price: 180000,
category: "instrument",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 4,
title: "Ritmos de Guacharaca",
description: "Aprende los patrones rítmicos que le dan al vallenato su energía y estilo característico.",
level: "Principiante",
duration: "2 meses",
students: 28,
rating: 4.5,
price: 160000,
category: "instrument",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 5,
title: "Canto Vallenato",
description: "Desarrolla técnicas vocales y habilidades de interpretación para cantar canciones tradicionales del vallenato.",
level: "Intermedio",
duration: "3 meses",
students: 30,
rating: 4.9,
price: 220000,
category: "singing",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 6,
title: "Teoría Musical para Vallenato",
description: "Comprende la armonía, el ritmo y la melodía para mejorar tu creatividad musical y composición.",
level: "Intermedio",
duration: "3 meses",
students: 22,
rating: 4.7,
price: 200000,
category: "theory",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 7,
title: "Acordeón Avanzado",
description: "Perfecciona tu técnica en el acordeón y aprende variaciones complejas usadas por grandes maestros del vallenato.",
level: "Avanzado",
duration: "4 meses",
students: 18,
rating: 4.9,
price: 320000,
category: "instrument",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 8,
title: "Improvisación en Vallenato",
description: "Aprende a improvisar melodías y solos dentro de los estilos clásicos del vallenato.",
level: "Intermedio",
duration: "3 meses",
students: 21,
rating: 4.6,
price: 240000,
category: "instrument",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 9,
title: "Historia del Vallenato",
description: "Descubre la evolución del vallenato, sus grandes exponentes y su impacto cultural en Colombia.",
level: "Principiante",
duration: "2 meses",
students: 45,
rating: 4.7,
price: 150000,
category: "theory",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 10,
title: "Interpretación Vocal Vallenata",
description: "Aprende a transmitir emociones al cantar vallenato y a mejorar tu presencia escénica.",
level: "Intermedio",
duration: "3 meses",
students: 27,
rating: 4.8,
price: 210000,
category: "singing",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 11,
title: "Ritmos Avanzados de Caja",
description: "Domina patrones rítmicos complejos de caja vallenata utilizados en interpretaciones profesionales.",
level: "Avanzado",
duration: "3 meses",
students: 16,
rating: 4.6,
price: 230000,
category: "instrument",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
},
{
id: 12,
title: "Armonía y Arreglos Vallenatos",
description: "Aprende a crear arreglos musicales y a combinar instrumentos para enriquecer tus composiciones.",
level: "Avanzado",
duration: "4 meses",
students: 14,
rating: 4.8,
price: 300000,
category: "theory",
image: "https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
}
]