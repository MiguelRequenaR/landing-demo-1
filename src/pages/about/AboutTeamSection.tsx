import { Instagram, Twitter, Linkedin } from "lucide-react"

const team = [
  {
    id: 1,
    name: "John Doe",
    job: "Gerente General",
    avatar: "https://html.sthemeit.com/logistcwr-demo/assets/images/team/team4.png",
    instagram: "https://www.instagram.com/jheisonhuaynate",
    twitter: "https://www.twitter.com/jheisonhuaynate",
    linkedin: "https://www.linkedin.com/in/jheisonhuaynate",
  },
  {
    id: 2,
    name: "Juan Perez",
    job: "SubGerente General",
    avatar: "https://html.sthemeit.com/logistcwr-demo/assets/images/team/team4.png",
    instagram: "https://www.instagram.com/angelhuaynate",
    twitter: "https://www.twitter.com/angelhuaynate",
    linkedin: "https://www.linkedin.com/in/angelhuaynate",
  }
]

export default function AboutTeamSection() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center" data-aos="fade-up">
        <span className="text-center text-[#f68b21] font-semibold uppercase">Nuestro Equipo</span>
        <h2 className="text-3xl text-center font-bold text-[#003d4d] mt-2 uppercase">Las mentes brillantes detrás</h2>
        <p className="text-center text-sm text-gray-500">Conoce a las mentes brillantes detrás de nuestro éxito.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-15">
          {
            team.map((item) => (
              <div key={item.id} className="bg-[#003d4d] rounded-t-full relative overflow-hidden group cursor-pointer" data-aos="fade-up">
                <div className="absolute inset-0 bg-[#f68b21] -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></div>
                <div className="relative z-10">
                  <img src={item.avatar} alt="team" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-3 relative z-20">
                  <h2 className="text-white text-center text-2xl font-bold">{item.name}</h2>
                  <p className="text-white text-center text-sm font-semibold">{item.job}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Instagram className="w-10 h-10 text-[#003d4d] bg-white p-2 hover:bg-[#003d4d] hover:text-white transition-all duration-500 ease-in-out" />
                    <Twitter className="w-10 h-10 text-[#003d4d] bg-white p-2 hover:bg-[#003d4d] hover:text-white transition-all duration-500 ease-in-out" />
                    <Linkedin className="w-10 h-10 text-[#003d4d] bg-white p-2 hover:bg-[#003d4d] hover:text-white transition-all duration-500 ease-in-out" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
