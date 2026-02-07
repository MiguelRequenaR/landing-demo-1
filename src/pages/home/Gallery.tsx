
export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex flex-col items-center justify-center my-10" data-aos="fade-up">
        <span className="text-center text-[#f68b21] font-semibold uppercase">Resultados de envíos</span>
        <h2 className="text-3xl text-center font-bold text-[#003d4d] mt-2 uppercase">Orgullosos de ofrecer excelencia</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-0">
        <div className="relative overflow-hidden group cursor-pointer" data-aos="fade-up">
          <img 
            src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" 
            alt="gallery" 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 md:group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out md:opacity-0 md:group-hover:opacity-40"></div>
          <div className="
            bg-white m-3 w-4/5 rounded-tr-[45px] absolute bottom-0 left-0 right-0 p-4
            z-10
            transform
            translate-y-0
            md:translate-y-full md:group-hover:translate-y-0
            transition-transform duration-500 ease-in-out
          ">
            <p className="text-lg font-bold text-[#003d4d]">Transporte de mercancía</p>
            <span className="text-sm text-gray-500">Banco de la Nación - 2025</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <img 
              src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
              alt="gallery" 
              className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 md:group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out md:opacity-0 md:group-hover:opacity-40"></div>
            <div className="
              bg-white m-3 w-4/5 rounded-tr-[45px] absolute bottom-0 left-0 right-0 p-4
              z-10
              transform
              translate-y-0
              md:translate-y-full md:group-hover:translate-y-0
              transition-transform duration-500 ease-in-out
            ">
              <p className="text-lg font-bold text-[#003d4d]">Logística internacional</p>
              <span className="text-sm text-gray-500">Cliente Internacional - 2025</span>
            </div>
          </div>
          <div className="relative overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
              alt="gallery" 
              className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 md:group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out md:opacity-0 md:group-hover:opacity-40"></div>
            <div className="
              bg-white m-3 w-4/5 rounded-tr-[45px] absolute bottom-0 left-0 right-0 p-4
              z-10
              transform
              translate-y-0
              md:translate-y-full md:group-hover:translate-y-0
              transition-transform duration-500 ease-in-out
            ">
              <p className="text-lg font-bold text-[#003d4d]">Carga pesada</p>
              <span className="text-sm text-gray-500">Proyecto Industrial - 2025</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="300">
          <img 
            src="https://plus.unsplash.com/premium_photo-1675313120373-9d1a0b9ce461?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=768" 
            alt="gallery" 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 md:group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out md:opacity-0 md:group-hover:opacity-40"></div>
          <div className="
            bg-white m-3 w-4/5 rounded-tr-[45px] absolute bottom-0 left-0 right-0 p-4
            z-10
            transform
            translate-y-0
            md:translate-y-full md:group-hover:translate-y-0
            transition-transform duration-500 ease-in-out
          ">
            <p className="text-lg font-bold text-[#003d4d]">Envíos corporativos</p>
            <span className="text-sm text-gray-500">Empresa Nacional - 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

