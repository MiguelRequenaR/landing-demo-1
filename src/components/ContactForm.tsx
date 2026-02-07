import Form from "./Form";

export default function ContactForm() {
  return (
    <div className="bg-[#f68b21] h-min-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div className="relative z-10 ml-0 md:ml-30 mr-0 md:mr-[-100px] bg-[#003d4d] m-4 md:m-10 p-6 md:p-15" data-aos="zoom-in">
          <span className="text-[#f68b21] text-base font-bold uppercase">Reserva una cita</span>
          <h2 className="text-white text-4xl font-bold py-5 uppercase">Contactanos</h2>
          <Form />  
        </div>
        <div className="relative w-full h-full overflow-hidden hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            alt="contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  )
}
