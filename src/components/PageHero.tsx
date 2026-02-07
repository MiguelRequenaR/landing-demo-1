
interface PageHeroProps {
  title: string
  description: string
  imageUrl: string
}

export default function PageHero({ title, description, imageUrl }: PageHeroProps) {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="heroAbout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-8 max-w-7xl pt-0 md:pt-52">
          <div className="max-w-5xl" data-aos="fade-up">
            <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 uppercase">{title}</h1>
            <p className="text-white/90 text-sm md:text-lg  mb-8 max-w-2xl uppercase">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
