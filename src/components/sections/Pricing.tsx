export default function Pricing() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-24 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Precios Simples para Resultados Claros
        </h2>
        <p className="text-purple-200 text-lg mb-16 max-w-2xl mx-auto">
          Elige el plan perfecto para tu rol en la banda
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan Manager */}
          <div className="group relative bg-gradient-to-br from-white to-purple-50 rounded-3xl p-10 text-slate-900 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
              RECOMENDADO
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-8 text-4xl shadow-lg transform group-hover:scale-110 transition-transform">
              🎻
            </div>

            <h3 className="text-3xl font-bold mb-4">Manager</h3>

            <div className="mb-2">
              <span className="text-5xl font-extrabold">$99</span>
              <span className="text-lg text-slate-500">/mes</span>
            </div>

            <p className="text-slate-500 mb-8">Para el encargado de la banda</p>

            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <span className="text-slate-700">
                  Gestión completa de contratos
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <span className="text-slate-700">
                  Cálculos automáticos de repartición
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <span className="text-slate-700">
                  Dashboard financiero completo
                </span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Comenzar Ahora
            </button>
          </div>

          {/* Plan Músico */}
          <div className="group relative bg-white rounded-3xl p-10 text-slate-900 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-8 text-4xl shadow-lg transform group-hover:scale-110 transition-transform">
              🎸
            </div>

            <h3 className="text-3xl font-bold mb-4">Músico</h3>

            <div className="mb-2">
              <span className="text-5xl font-extrabold">$49</span>
              <span className="text-lg text-slate-500">/mes</span>
            </div>

            <p className="text-slate-500 mb-8">Para cada integrante</p>

            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-slate-700 text-sm">✓</span>
                </div>
                <span className="text-slate-700">
                  Seguimiento de mis ganancias
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-slate-700 text-sm">✓</span>
                </div>
                <span className="text-slate-700">
                  Notificaciones de nuevas tocadas
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-slate-700 text-sm">✓</span>
                </div>
                <span className="text-slate-700">
                  Visualización de contratos asignados
                </span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-slate-700 to-slate-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
