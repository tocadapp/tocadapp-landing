export default function Features() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-emerald-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-800 to-purple-900 bg-clip-text text-transparent">
            Enfócate en la música, nosotros en los números
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            La herramienta todo en uno para bandas profesionales y emergentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-purple-200">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

            <div className="relative">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                💰
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Gestión de Contratos
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Registra cada tocada, pago total, gastos de gasolina y música
                extra. Cálculos automáticos de repartición.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-blue-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

            <div className="relative">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Para Toda la Banda
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Managers pagan $99/mes, músicos $49/mes. Cada integrante ve sus
                ganancias y el manager controla todo.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-emerald-200">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

            <div className="relative">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Reportes Claros
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Sabe cuánto genera la banda mensualmente y cuánto gana cada
                músico. Finanzas transparentes para todos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
