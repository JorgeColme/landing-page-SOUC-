import Link from "next/link";
import {
  Download,
  Smartphone,
  BookOpen,
  Headphones,
  Flame,
  ShieldCheck,
  Compass,
  Calendar,
  Sparkles,
  ChevronRight,
  Quote,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function Home() {
  const screenshots = [
    { file: "inicio.jpg", title: "Pantalla de Inicio", desc: "Saludo pastoral y accesos del día" },
    { file: "souc.jpg", title: "SOUC 2027", desc: "Octavario y reflexiones ecuménicas" },
    { file: "liturgia-dia.jpg", title: "Lector Litúrgico", desc: "Textos sagrados con reproducción en audio" },
    { file: "intentions.jpg", title: "Velas e Intenciones", desc: "Comunidad unida en oración" },
    { file: "home.jpg", title: "Agenda y Encuentros", desc: "Actividades ecuménicas y formación" },
    { file: "noticias-cedic.jpg", title: "Voces y Magisterio", desc: "Actualidad de la CEM y el Vaticano" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navbar Institucional */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo Oficial CEM - CEDIC */}
            <Link
              href="https://cedic.cem.org.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity flex items-center"
              title="Conferencia del Episcopado Mexicano · CEDIC"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/CEM-CEDIC.png"
                alt="CEM · CEDIC"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#caracteristicas" className="hover:text-emerald-700 transition-colors">Pilares</a>
            <a href="#souc" className="hover:text-emerald-700 transition-colors">SOUC 2027</a>
            <a href="#dialogo" className="hover:text-emerald-700 transition-colors">México en Diálogo</a>
            <a href="#comunidad" className="hover:text-emerald-700 transition-colors">Comunidad</a>
          </div>

          <div>
            <a
              href="#descargar"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-colors border border-emerald-200/50"
            >
              Descargar App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-28 lg:pt-24 lg:pb-36 overflow-hidden bg-gradient-to-b from-slate-50 via-slate-50/80 to-white">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[450px] h-[450px] bg-teal-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Texto Principal */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-900 text-xs font-bold tracking-wide uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
              <span>Conferencia del Episcopado Mexicano · CEDIC</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.12] mb-6 font-serif">
              Diálogo, Comunión <br className="hidden sm:block" />
              <span className="text-emerald-700">y Oración en México</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              La plataforma pastoral oficial <strong>CEDIC SOUC 2027 | México</strong>. Acompaña el camino de la 
              Semana de Oración por la Unidad de los Cristianos (SOUC), explora la diversidad religiosa de nuestro país con datos del Censo 2020, 
              participa en la liturgia diaria con audio inmersivo y une tu intención al encendido de velas comunitarias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/us/app/cedic-souc-2026-m%C3%A9xico/id6762645471"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white transition-all bg-slate-900 rounded-xl hover:bg-slate-800 shadow-xl hover:-translate-y-0.5"
              >
                <Smartphone className="mr-2.5 h-5 w-5 text-emerald-400" /> App Store (iOS)
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.jcolmenero.cedicapp&hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-bold text-slate-900 transition-all bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:-translate-y-0.5"
              >
                <Download className="mr-2.5 h-5 w-5 text-emerald-700" /> Google Play (Android)
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-500 font-medium">
              Gratuita y sin publicidad comercial &bull; Desarrollada para diócesis, parroquias y comunidades de fe
            </p>
          </div>

          {/* Mockup Interactivo del Smartphone */}
          <div className="lg:col-span-5 relative mx-auto w-64 sm:w-72 md:w-80 perspective-1000">
            <div className="relative rounded-[2.5rem] overflow-hidden border-[7px] border-slate-900 bg-slate-900 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-xl z-20"></div>
              {/* Pantalla */}
              <div className="relative bg-slate-950 aspect-[9/19.5] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/inicio.jpg"
                  alt="Pantalla de inicio de CEDIC SOUC 2027 | México"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Efectos de fondo */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-28 h-28 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Franja de Métricas e Impacto Pastoral */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-800 mb-1">SOUC 2027</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Octavario y misas por la unidad</p>
            </div>
            <div className="p-4">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-800 mb-1">32 Estados</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Datos del Censo INEGI 2020</p>
            </div>
            <div className="p-4">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-800 mb-1">Audio &amp; TTS</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Lector litúrgico adaptativo</p>
            </div>
            <div className="p-4">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-emerald-800 mb-1">Velas Vivas</p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Red comunitaria de oración</p>
            </div>
          </div>
        </div>
      </section>

      {/* Características / Pilares de la Aplicación */}
      <section id="caracteristicas" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs block mb-3">
              Arquitectura Pastoral Integral
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 font-serif">
              Seis Pilares para la Comunión y el Encuentro
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Diseñada para responder tanto al Octavario anual como a la formación permanente, la fraternidad ecuménica y la comprensión de nuestra realidad religiosa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pilar 1: SOUC 2027 */}
            <div id="souc" className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/40 transition-all border border-slate-100 hover:border-emerald-200/80 shadow-xs hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Semana de Oración (SOUC 2027)</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Guiones litúrgicos completos para celebraciones ecuménicas y eucarísticas, reflexiones bíblicas diarias y el archivo vivo de las ediciones históricas.
              </p>
            </div>

            {/* Pilar 2: Lector Litúrgico Inmersivo */}
            <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/40 transition-all border border-slate-100 hover:border-emerald-200/80 shadow-xs hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Lector Litúrgico Inmersivo</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Lecturas del día, salmos responsoriales y reflexiones con modo de reproducción en audio y síntesis de voz litúrgica con desplazamiento automático.
              </p>
            </div>

            {/* Pilar 3: México en Diálogo */}
            <div id="dialogo" className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/40 transition-all border border-slate-100 hover:border-emerald-200/80 shadow-xs hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Compass className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">México en Diálogo (INEGI 2020)</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Explorador estadístico de la diversidad religiosa por estado. Conoce la composición de creencias y compara territorios con base en datos oficiales del Censo.
              </p>
            </div>

            {/* Pilar 4: Libertad Religiosa y Conciencia */}
            <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/40 transition-all border border-slate-100 hover:border-emerald-200/80 shadow-xs hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Libertad Religiosa y Conciencia</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Fichas pedagógicas sobre derechos fundamentales, casos prácticos de la vida diaria y orientación ante discriminación conectada con organismos institucionales.
              </p>
            </div>

            {/* Pilar 5: Velas e Intenciones */}
            <div id="comunidad" className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/40 transition-all border border-slate-100 hover:border-emerald-200/80 shadow-xs hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flame className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Red de Oración y Velas</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Enciende una vela virtual por la unidad, la paz en el país o las familias, y comparte tus intenciones en un espacio eclesial moderado y fraterno.
              </p>
            </div>

            {/* Pilar 6: Magisterio y Encuentros */}
            <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50/40 transition-all border border-slate-100 hover:border-emerald-200/80 shadow-xs hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-7 w-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Voces, Magisterio y Agenda</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Documentos del Santo Padre, subsidios del Dicasterio para la Promoción de la Unidad de los Cristianos, cantos y agenda de transmisiones diocesanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Destacada: México en Diálogo (Censo INEGI & Convivencia) */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-emerald-700/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold tracking-wide uppercase mb-4">
                Innovación Pastoral y Ciudadana
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                Conoce la Realidad Religiosa de Tu Estado
              </h2>
              <p className="text-emerald-100/90 text-lg mb-8 leading-relaxed">
                Por primera vez en una aplicación pastoral en México, accede a la radiografía demográfica de creencias elaborada a partir del Censo de Población y Vivienda 2020 del INEGI. Compara estados, examina denominadores y comprende el entorno para construir puentes de diálogo informado y respetuoso.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-100">Desglose porcentual y absoluto por credo</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-100">Comparador territorial entre entidades</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-100">Fuentes oficiales y metadatos comprobados</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="text-sm text-emerald-100">Guías prácticas sobre libertad religiosa</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-emerald-800/60 border border-emerald-700/60 rounded-3xl p-8 backdrop-blur-sm">
              <Users className="h-10 w-10 text-emerald-300 mb-4" />
              <h3 className="text-2xl font-bold mb-3 font-serif">Diálogo desde la Verdad</h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                «Para dialogar con franqueza y cercanía necesitamos conocer quién es nuestro prójimo, qué profesa y cómo vive su fe en cada rincón de nuestra patria».
              </p>
              <div className="border-t border-emerald-700/60 pt-4 flex items-center justify-between">
                <span className="text-xs text-emerald-300 uppercase font-semibold tracking-wider">Censo INEGI 2020</span>
                <span className="text-xs text-emerald-200">Módulo Integrado en la App</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Carrusel de Capturas) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">
                Experiencia en Dispositivo
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-3 font-serif">Recorrido por la Aplicación</h2>
              <p className="text-slate-400 max-w-lg">
                Una interfaz limpia, serena y accesible, diseñada tanto para el recogimiento personal como para el trabajo pastoral.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span>Desliza para ver más</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          {/* Carrusel */}
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((item, idx) => (
              <div key={idx} className="shrink-0 w-72 sm:w-80 snap-center group">
                <div className="rounded-[2.2rem] overflow-hidden border-4 border-slate-800 shadow-2xl aspect-[9/19.5] relative bg-slate-950 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/screenshots/${item.file}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-bold text-white text-base leading-tight">{item.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voces de la Comunidad / Testimonios Pastorales */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs block mb-2">
              Comunión y Servicio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">
              Voces en el Camino
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-slate-600 mb-6 flex-1 italic leading-relaxed text-sm">
                «Los guiones litúrgicos y los subsidios para las celebraciones ecuménicas facilitan enormemente vivir el Octavario en comunión con las orientaciones de la CEM».
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-sm">
                  P.J
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Pbro. Juan Martínez</p>
                  <p className="text-xs text-slate-500">Pastoral Ecuménica Diocesana</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-slate-600 mb-6 flex-1 italic leading-relaxed text-sm">
                «El modo audio es maravilloso para meditar las reflexiones de camino a la parroquia. Y la posibilidad de encender una vela por los enfermos nos une a todos».
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold text-sm">
                  MG
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">María González</p>
                  <p className="text-xs text-slate-500">Agente de Pastoral y Catequista</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <Quote className="h-8 w-8 text-emerald-200 mb-4" />
              <p className="text-slate-600 mb-6 flex-1 italic leading-relaxed text-sm">
                «El módulo de diversidad religiosa con el Censo 2020 aporta datos reales para dialogar con respeto, superando prejuicios y valorando a cada persona».
              </p>
              <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-sm">
                  RL
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Roberto López</p>
                  <p className="text-xs text-slate-500">Laico y Promotor de Diálogo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descarga / Final CTA */}
      <section id="descargar" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block p-4 rounded-2xl bg-emerald-50 text-emerald-700 mb-6 border border-emerald-200/60">
            <Smartphone className="h-8 w-8" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-5 font-serif">
            Descarga CEDIC SOUC 2027 | México
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ten al alcance de tu mano los subsidios litúrgicos, el lector con audio, el explorador de creencias y la red comunitaria de oración. Disponible en iOS y Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="https://apps.apple.com/us/app/cedic-souc-2026-m%C3%A9xico/id6762645471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-all bg-slate-900 rounded-xl hover:bg-slate-800 shadow-xl hover:-translate-y-0.5"
            >
              <Smartphone className="mr-3 h-5 w-5 text-emerald-400" /> Consíguelo en el App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.jcolmenero.cedicapp&hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-900 transition-all bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:-translate-y-0.5"
            >
              <Download className="mr-3 h-5 w-5 text-emerald-700" /> Disponible en Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer Institucional Oficial */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-5 inline-block bg-white/95 px-3 py-2 rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/CEM-CEDIC.png" className="h-10 w-auto object-contain" alt="CEM - CEDIC" />
            </div>
            <p className="leading-relaxed mb-4 max-w-md text-sm text-slate-400">
              <strong>Comisión Episcopal para el Diálogo Interreligioso y la Comunión</strong> de la Conferencia del Episcopado Mexicano (CEM). Promoviendo la unidad de los cristianos, el respeto recíproco y la fraternidad universal.
            </p>
            <div className="text-xs text-slate-500">
              &copy; 2027 CEDIC SOUC 2027 | México. Conferencia del Episcopado Mexicano. Todos los derechos reservados.
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Enlaces Institucionales</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://cem.org.mx" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  Sitio web CEM
                </a>
              </li>
              <li>
                <a href="https://cedic.cem.org.mx" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  Sitio web CEDIC
                </a>
              </li>
              <li>
                <a href="https://www.vaticannews.va/es.html" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  Vatican News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Avisos y Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <a href="mailto:soporte@cem.org.mx" className="hover:text-emerald-400 transition-colors">
                  Soporte Técnico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
