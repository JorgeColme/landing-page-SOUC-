import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-10 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Política de Privacidad</h1>
          <p className="text-slate-500 mb-10">Última actualización: 28 de Abril, 2026</p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introducción</h2>
              <p>
                CEDIC SOUC 2026 | México respeta tu privacidad y se compromete a proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos cuando descargas e interactúas con nuestra aplicación.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Datos que recopilamos</h2>
              <p>
                Nuestra aplicación está diseñada principalmente para proporcionar material litúrgico y de reflexión. Por defecto, no recopilamos información personal identificable. Los únicos datos que podríamos obtener son estadísticas de uso anónimas para mejorar el funcionamiento de la app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Cómo usamos tu información</h2>
              <p>
                Cualquier dato anónimo recopilado se utiliza exclusivamente para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Garantizar el correcto funcionamiento de la aplicación en distintos dispositivos.</li>
                <li>Identificar y solucionar problemas técnicos o errores (crashes).</li>
                <li>Comprender de manera general qué secciones de la app son más útiles para nuestros usuarios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Permisos de la aplicación</h2>
              <p>
                La aplicación puede solicitar acceso a la conexión de internet para descargar contenido actualizado (como reflexiones en audio o nuevas lecturas). No accedemos a tus contactos, ubicación, cámara, ni archivos personales sin tu consentimiento explícito.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Contacto</h2>
              <p>
                Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de manejo de datos, por favor contáctanos en:
                <br />
                <a href="mailto:soporte@cem.org.mx" className="text-emerald-600 hover:underline font-medium">soporte@cem.org.mx</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
