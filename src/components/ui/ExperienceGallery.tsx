export default function ExperienceGallery() {
  return (
    <section className="relative flex justify-center w-full">

      <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 
      w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

        <div className="row-span-2 overflow-hidden rounded-2xl lg:rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-2xl lg:rounded-3xl">
          <img
            src="https://i.pinimg.com/1200x/b8/3c/23/b83c23e493d4b03d7287f038cc65e452.jpg"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>

    </section>
  );
}