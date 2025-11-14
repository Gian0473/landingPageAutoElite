import { useState, useEffect } from 'react';

export default function LandingCarros() {
 const [scrolled, setScrolled] = useState(false);
 const [activeCard, setActiveCard] = useState(null);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
   element.scrollIntoView({ behavior: 'smooth' });
   setMobileMenuOpen(false); // Cerrar menú después de navegar
  }
 };

 const cars = [
  {
   id: 1,
   name: 'Toyota supra',
   year: '2022',
   price: '$250.000.000',
   transmission: 'Automático',
   km: '15,000 km',
   fuel: 'Gasolina',
   gradient: 'from-cyan-500 via-blue-500 to-purple-600',
   image: '/public/pexels-mark-enkey-2156438346-34643052.jpg'
  },
  {
   id: 2,
   name: 'Honda CR-V',
   year: '2021',
   price: '$35.00.000',
   transmission: 'Manual',
   km: '22,000 km',
   fuel: 'Híbrido',
   gradient: 'from-pink-500 via-red-500 to-orange-500',
   image: '/public/pexels-cmrcn-29681419.jpg'
  },
  {
   id: 3,
   name: 'Mazda 3',
   year: '2023',
   price: '$28.900.000',
   transmission: 'Automático',
   km: '8,000 km',
   fuel: 'Gasolina',
   gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
   image: '/public/pexels-saav-495849469-16028417.jpg'
  }
 ];

 const services = [
  {
   icon: '💰',
   title: 'Financiamiento',
   description: 'Planes flexibles con las mejores tasas',
   color: 'from-yellow-400 to-orange-500'
  },
  {
   icon: '🔄',
   title: 'Recibimos Tu Auto',
   description: 'Acepta tu usado como parte de pago',
   color: 'from-green-400 to-emerald-500'
  },
  {
   icon: '✅',
   title: 'Garantía Premium',
   description: 'Certificación completa incluida',
   color: 'from-blue-400 to-cyan-500'
  },
  {
   icon: '🔧',
   title: 'Mantenimiento',
   description: 'Servicio técnico especializado',
   color: 'from-purple-400 to-pink-500'
  }
 ];

 return (
  <div className="min-h-screen bg-black text-white overflow-x-hidden">
   {/* Navegación con Glassmorphism */}
   <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
    ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-purple-500/20'
    : 'bg-transparent'
    }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex justify-between items-center h-20">
      <button
       onClick={() => scrollToSection('inicio')}
       className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
      >
       AUTO<span className="text-white">ELITE</span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
       {['inicio', 'inventario', 'servicios', 'nosotros', 'contacto'].map((item) => (
        <li key={item}>
         <button
          onClick={() => scrollToSection(item)}
          className="relative text-white font-semibold capitalize group"
         >
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
         </button>
        </li>
       ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
       className="md:hidden text-white text-3xl hover:text-purple-500 transition-colors z-50"
      >
       {mobileMenuOpen ? '✕' : '☰'}
      </button>
     </div>

     {/* Mobile Menu */}
     <div className={`md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
      <ul className="flex flex-col space-y-1 py-4">
       {['inicio', 'inventario', 'servicios', 'nosotros', 'contacto'].map((item) => (
        <li key={item}>
         <button
          onClick={() => scrollToSection(item)}
          className="w-full text-left px-6 py-3 text-white font-semibold capitalize hover:bg-purple-500/20 transition-colors"
         >
          {item}
         </button>
        </li>
       ))}
      </ul>
     </div>
    </div>
   </nav>

   {/* Hero Section con Animaciones */}
   <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Fondo Animado */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
     <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
     <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
     <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    {/* Contenido Hero */}
    <div className="relative z-10 text-center px-4 pt-20">
     <div className="mb-8 animate-fade-in-up">
      <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-300 font-semibold mb-6">
       ✨ Vehículos Premium 2024-2025
      </span>
     </div>

     <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up animation-delay-200">
      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
       Tu Sueño
      </span>
      <br />
      <span className="text-white">Sobre Ruedas</span>
     </h1>

     <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
      Descubre vehículos excepcionales con financiamiento instantáneo y garantía extendida
     </p>

     <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
      <button
       onClick={() => scrollToSection('inventario')}
       className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/50"
      >
       <span className="relative z-10">Ver Inventario</span>
       <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      <button
       onClick={() => scrollToSection('contacto')}
       className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
       Agenda una Cita
      </button>
     </div>

    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
     <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
     </div>
    </div>
   </section>

   {/* Inventario con Cards Modernas */}
   <section id="inventario" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-black mb-4">
       <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Inventario
       </span>
       <span className="text-white"> Exclusivo</span>
      </h2>
      <p className="text-gray-400 text-lg">Vehículos certificados y listos para conducir</p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car, index) => (
       <div
        key={car.id}
        className="group relative"
        onMouseEnter={() => setActiveCard(car.id)}
        onMouseLeave={() => setActiveCard(null)}
        style={{ animationDelay: `${index * 100}ms` }}
       >
        {/* Glow Effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${car.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>

        {/* Card */}
        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 transform group-hover:scale-105">
         {/* Image Section */}
         <div className="relative h-56 overflow-hidden">
          <img
           src={car.image}
           alt={car.name}
           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
           {car.year}
          </div>
         </div>

         {/* Content */}
         <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
           {car.name}
          </h3>

          <div className="flex items-baseline gap-2 mb-6">
           <span className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {car.price}
           </span>
           <span className="text-sm text-gray-500">COP</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
           <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="text-xs text-gray-400 mb-1">Transmisión</div>
            <div className="text-sm font-semibold text-white">{car.transmission}</div>
           </div>
           <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="text-xs text-gray-400 mb-1">Kilometraje</div>
            <div className="text-sm font-semibold text-white">{car.km}</div>
           </div>
          </div>

          <button
           onClick={() => scrollToSection('contacto')}
           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
           Consultar Ahora
          </button>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Servicios con Cards Interactivas */}
   <section id="servicios" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-black mb-4">
       <span className="text-white">Servicios </span>
       <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Premium
       </span>
      </h2>
      <p className="text-gray-400 text-lg">Todo incluido para tu tranquilidad</p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
       <div
        key={index}
        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105"
       >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

        <div className="relative z-10">
         <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
         </div>
         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
          {service.title}
         </h3>
         <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {service.description}
         </p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Nosotros con Diseño Split */}
   <section id="nosotros" className="py-32 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Imagen */}
      <div className="relative">
       <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
       <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
        <img
         className='w-full h-full object-cover'
         src="/public/ChatGPT Image 13 nov 2025, 20_51_42.png"
         alt="AutoElite"
        />
       </div>

       {/* Floating Cards */}
       <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 shadow-2xl">
        <div className="text-3xl font-black text-purple-400">15+</div>
        <div className="text-sm text-gray-400">Años de Experiencia</div>
       </div>
      </div>

      {/* Contenido */}
      <div>
       <h2 className="text-5xl md:text-6xl font-black mb-6">
        <span className="text-white">Sobre </span>
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
         Nosotros
        </span>
       </h2>

       <p className="text-xl text-gray-300 mb-6 leading-relaxed">
        Líderes en venta de vehículos premium con certificación de calidad.
        Tu satisfacción es nuestra prioridad.
       </p>

       <p className="text-gray-400 mb-8 leading-relaxed">
        Cada vehículo pasa por una inspección de 150 puntos. Garantizamos
        transparencia total y el mejor servicio del mercado.
       </p>

       <div className="space-y-4 mb-8">
        {[
         'Inspección técnica certificada 150 puntos',
         'Financiamiento aprobado en 24 horas',
         'Garantía extendida sin costo adicional',
         'Soporte postventa personalizado'
        ].map((item, index) => (
         <div key={index} className="flex items-center gap-3 group">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
           <span className="text-white text-sm">✓</span>
          </div>
          <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
         </div>
        ))}
       </div>

       <button
        onClick={() => scrollToSection('contacto')}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50"
       >
        Conoce Más
       </button>
      </div>
     </div>
    </div>
   </section>

   {/* Contacto con Diseño Premium */}
   <section id="contacto" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
    <div className="absolute inset-0">
     <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
     <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-black mb-4">
       <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Contáctanos
       </span>
      </h2>
      <p className="text-gray-400 text-lg">Estamos aquí para ayudarte</p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
       { icon: '📍', title: 'Ubicación', info: ['Av. Principal #123', 'Dosquebradas, Risaralda'] },
       { icon: '📞', title: 'Teléfono', info: ['+57 300 123 4567', '+57 321 987 6543'] },
       { icon: '📧', title: 'Email', info: ['ventas@autoelite.com', 'info@autoelite.com'] },
       { icon: '🕐', title: 'Horario', info: ['Lun-Vie: 8AM-6PM', 'Sáb: 9AM-4PM'] }
      ].map((contact, index) => (
       <div
        key={index}
        className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
       >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

        <div className="relative z-10 text-center">
         <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {contact.icon}
         </div>
         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
          {contact.title}
         </h3>
         {contact.info.map((line, i) => (
          <p key={i} className="text-gray-400 group-hover:text-gray-300 transition-colors">
           {line}
          </p>
         ))}
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Footer */}
   <footer className="bg-black border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center">
      <div className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
       AUTOELITE
      </div>
      <p className="text-gray-500 mb-4">
       &copy; 2025 AutoElite. Todos los derechos reservados.
      </p>
      <div className="flex justify-center gap-6 text-gray-400">
       <a href="#" className="hover:text-purple-400 transition-colors">Facebook</a>
       <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a>
       <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
      </div>
     </div>
    </div>
   </footer>

   {/* Estilos de Animación */}
   <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .bg-grid-white\/\[0\.02\] {
          background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
      `}</style>
  </div>
 );
}