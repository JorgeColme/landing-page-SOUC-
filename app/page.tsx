import Image from "next/image";
import Link from "next/link";
import { Download, Smartphone, BookOpen, Headphones, Scroll, Share2, Globe, Heart, Star, ChevronRight, Quote, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navbar Institutional */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logos Wrapper */}
            <div className="flex items-center gap-4">
              <Link href="https://cem.org.mx" target="_blank" className="hover:opacity-90 transition-opacity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-cem.jpg" alt="CEM" className="h-10 w-auto" />
              </Link>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <Link href="https://cedic.cem.org.mx" target="_blank" className="hover:opacity-90 transition-opacity flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-cedic.jpg" alt="CEDIC" className="h-10 w-auto" />
                <span className="font-bold text-emerald-900 tracking-wider text-base hidden sm:block">CEDIC</span>
              </Link>
            </div>
          </div>
          <div>
            <a href="#download" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors">
              Descargar App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Product Style */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-6">
              Octavario 18-25 Enero
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-serif">
              Unidos en <br />
              <span className="text-emerald-700">Oración</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              La aplicación oficial <strong>SOUC 2026</strong>. Una herramienta pastoral diseñada por la Conferencia del Episcopado Mexicano para acompañar a los fieles en el camino hacia la unidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#download" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-slate-900 rounded-xl hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Download className="mr-2 h-5 w-5" /> Descargar APK
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300">
                Conocer más
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Disponible para dispositivos Android &bull; Versión 1.0.0
            </p>
          </div>

          {/* Visual - Phone Mockup */}
          <div className="relative mx-auto lg:ml-auto w-72 md:w-80 lg:w-96 perspective-1000">
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-slate-900 bg-slate-900 shadow-2xl skew-y-0 lg:-skew-y-0 transform transition-transform hover:scale-[1.02] duration-500">
              {/* Notch / Camera */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-xl z-20"></div>
              {/* Screen Content */}
              <div className="relative bg-white h-[600px] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/screenshots/home.jpg" alt="App Home Screen" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Decorative Elements around phone */}
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Todo lo necesario para el Octavario</h2>
            <p className="text-slate-500 text-lg">Subsidios litúrgicos, reflexiones y materiales multimedia integrados en una sola experiencia digital.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-slate-100 hover:border-emerald-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reflexiones Diarias</h3>
              <p className="text-slate-600 leading-relaxed">
                Meditaciones profundas para cada día de la semana, inspiradas en los textos bíblicos seleccionados ecuménicamente.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-slate-100 hover:border-emerald-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modo Audio</h3>
              <p className="text-slate-600 leading-relaxed">
                Escucha las reflexiones y oraciones mientras te desplazas. Ideal para integrar la oración en tu vida cotidiana.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-slate-100 hover:border-emerald-100">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comunión Global</h3>
              <p className="text-slate-600 leading-relaxed">
                Únete a la intención universal de la Iglesia. Materiales compartidos internacionalmente para orar en sintonía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Descubre la Experiencia</h2>
              <p className="text-slate-400 max-w-md">Una interfaz diseñada para la lectura serena y la oración profunda.</p>
            </div>
            <div className="flex gap-2">
              <span className="h-12 w-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400">
                <ChevronRight className="h-6 w-6" />
              </span>
            </div>
          </div>

          {/* Carousel */}
          <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide">
            {['home', 'liturgy', 'resources', 'intentions'].map((img, idx) => (
              <div key={idx} className="shrink-0 w-72 snap-center group">
                <div className="rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl aspect-[9/19.5] relative bg-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/screenshots/${img}.jpg`} alt={`Screenshot ${img}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 font-serif">Voces de la Comunidad</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-slate-600 mb-6 flex-1 italic leading-relaxed">
                "Una herramienta indispensable para vivir el octavario con profundidad. Los textos están maravillosamente adaptados para nuestras comunidades."
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">JP</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">P. Juan Pérez</p>
                  <p className="text-xs text-slate-500">Sacerdote Diocesano</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-slate-600 mb-6 flex-1 italic leading-relaxed">
                "Me encanta el modo audio. Puedo ir escuchando las reflexiones camino al trabajo y preparar mi corazón para el día. Muy recomendada."
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">MG</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">María González</p>
                  <p className="text-xs text-slate-500">Catequista</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-slate-600 mb-6 flex-1 italic leading-relaxed">
                "El diseño es muy limpio y ayuda a no distraerse. Es justo lo que necesitábamos para compartir la oración en la parroquia."
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-sm">RL</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Roberto López</p>
                  <p className="text-xs text-slate-500">Laico Comprometido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide Step-by-Step */}
      <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold tracking-wide uppercase mb-4">
              Guía Rápida
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Instalación en 3 Pasos</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Sigue estas instrucciones para instalar la aplicación de forma segura en tu dispositivo Android.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative group">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center font-bold text-xl border-4 border-slate-900">1</div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Download className="h-5 w-5 text-emerald-400" /> Descargar
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Haz clic en el botón "Descargar APK" para guardar el archivo oficial en tu dispositivo.
                </p>
              </div>
            </div>

            {/* Step 2 - Critical */}
            <div className="bg-gradient-to-br from-amber-900/20 to-slate-800/50 p-8 rounded-3xl border border-amber-500/30 relative group shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)]">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center font-bold text-xl border-4 border-slate-900 shadow-lg text-white">2</div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-amber-400">
                  <AlertTriangle className="h-5 w-5" /> Permitir
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Tu teléfono podría bloquear la instalación. Es necesario ir a <strong>Configuración</strong> y activar <strong>"Confiar en esta fuente"</strong>.
                </p>
                <div className="bg-black/40 p-3 rounded-lg border border-amber-500/20">
                  <p className="text-xs text-amber-200/80 italic text-center">
                    "Esto es normal para apps institucionales fuera de la Play Store."
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative group">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center font-bold text-xl border-4 border-slate-900">3</div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-emerald-400" /> Abrir
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Una vez completada la instalación, abre la app SOUC 2026 y disfruta de todo el contenido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download / Final CTA */}
      <section id="download" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block p-4 rounded-2xl bg-emerald-50 text-emerald-600 mb-6">
            <Smartphone className="h-8 w-8" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">Descarga SOUC 2026</h2>
          <p className="text-lg text-slate-600 mb-10">
            Lleva contigo todas las herramientas para vivir la unidad de los cristianos. <br className="hidden md:block" />Disponible para Android.
          </p>

          <div className="bg-amber-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-10 border border-amber-100 text-left flex gap-4 md:items-center">
            <div className="shrink-0 bg-white p-2 rounded-full shadow-sm text-amber-500">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-1">Nota de Instalación Importante</h4>
              <p className="text-sm text-amber-800 leading-snug">
                Al ser una app institucional interna, deberás autorizar la instalación desde fuentes externas en tu configuración de Android ("Confiar en esta fuente").
              </p>
            </div>
          </div>

          <div className="inline-flex flex-col gap-4 w-full sm:w-auto">
            <a href="https://drive.google.com/drive/folders/1hQjdJdUKZvpM5ehIL5MwrgEShEfK-Ejl?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-emerald-700 rounded-xl hover:bg-emerald-800 shadow-xl shadow-emerald-200">
              <Download className="mr-2 h-6 w-6" /> Descargar APK Ahora
            </a>
            <span className="text-slate-400 text-sm">Tamaño: 25 MB &bull; Actualizado: Ene 2026</span>
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <span className="bg-white p-1 rounded-sm"><img src="/logo-cedic.jpg" className="h-6 w-6" alt="Icon" /></span> CEDIC
            </h3>
            <p className="leading-relaxed mb-6 max-w-sm">
              Comisión Episcopal para la Pastoral de la Comunicación. Trabajando por la evangelización en el mundo digital.
            </p>
            <div className="text-sm text-slate-500">
              &copy; 2026 Conferencia del Episcopado Mexicano.
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sitio web CEM</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sitio web CEDIC</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Vatican News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legales</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
