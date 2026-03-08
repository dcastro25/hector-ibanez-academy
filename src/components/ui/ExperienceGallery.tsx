export default function ExperienceGallery() {
  return (
    <section className="relative flex justify-center py-20 bg-[#0b0504]">

      <div className="grid grid-cols-2 grid-rows-3 gap-6 max-w-3xl">

        {/* Imagen grande izquierda */}
        <div className="row-span-2 overflow-hidden rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
        

        {/* Derecha arriba */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Derecha abajo */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Abajo izquierda */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>

      {/* Badge flotante */}
      <div className="absolute bottom-0 translate-y-1/2">
        <div className="flex items-center gap-3 px-8 py-4 rounded-2xl
        bg-linear-to-r from-[#2a140b] to-[#0f0704]
        border border-amber-500/30 shadow-xl">

          <span className="text-3xl font-bold text-amber-400">
            15+
          </span>

          <span className="text-sm text-gray-200 leading-tight">
            Años de <br /> Experiencia
          </span>

        </div>
      </div>

    </section>
  )
}