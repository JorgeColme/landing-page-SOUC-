import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium mb-10 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Política de Privacidad</h1>
          <p className="text-slate-500 mb-10">Última actualización: Noviembre, 2026</p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introducción e Identidad Institucional</h2>
              <p>
                La aplicación móvil <strong>CEDIC SOUC 2027 | México</strong> es desarrollada y administrada bajo el cuidado pastoral de la <strong>Comisión Episcopal para el Diálogo Interreligioso y la Comunión (CEDIC)</strong> de la <strong>Conferencia del Episcopado Mexicano (CEM)</strong>. Respetamos tu privacidad y nos comprometemos firmemente a proteger cualquier dato asociado con tu experiencia en la aplicación.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Datos que recopilamos</h2>
              <p>
                Nuestra aplicación está diseñada para la difusión de materiales litúrgicos, reflexiones ecuménicas, consulta estadística comunitaria y acompañamiento en la oración:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Uso general y lecturas:</strong> No se requiere registro obligatorio para consultar los subsidios litúrgicos, escuchar reflexiones en audio o explorar los datos de diversidad religiosa del Censo INEGI 2020.</li>
                <li><strong>Red de Oración y Velas Comunitarias:</strong> Si decides compartir una intención comunitaria o encender una vela virtual, los datos compartidos (como peticiones u oraciones públicas) son moderados con respeto y no se asocian con datos personales sensibles ni de rastreo publicitario.</li>
                <li><strong>Diagnóstico técnico:</strong> Obtenemos métricas estrictamente anónimas de estabilidad y rendimiento para solventar anomalías técnicas en los distintos dispositivos móviles.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Cómo usamos tu información</h2>
              <p>
                La información procesada se emplea exclusivamente con fines pastorales, de optimización y de servicio comunitario:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Garantizar la entrega y sincronización fluida de los subsidios litúrgicos y de audio.</li>
                <li>Permitir la participación fraterna en el muro de oración e intenciones colectivas.</li>
                <li>Detectar y corregir fallos técnicos o inconsistencias en los sistemas operativos iOS y Android.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Permisos de la aplicación</h2>
              <p>
                La aplicación solicita conectividad a internet para sincronizar la liturgia diaria, las transmisiones de audio y las actualizaciones de la agenda de encuentros. No accedemos a contactos, almacenamiento de fotos privadas, cámara ni geolocalización precisa sin tu consentimiento expreso y justificado en la funcionalidad correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Contacto</h2>
              <p>
                Para cualquier consulta sobre esta política de privacidad o sobre el tratamiento de datos en el entorno de la aplicación, puedes ponerte en contacto con la comisión:
                <br />
                <a href="mailto:soporte@cem.org.mx" className="text-emerald-700 hover:underline font-medium">soporte@cem.org.mx</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
