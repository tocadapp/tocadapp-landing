import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">🎵 TocadApp</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          La plataforma que{" "}
          <span className="text-accent-300">organiza tus tocadas</span> y
          <span className="text-primary-400"> finanzas musicales</span>
        </p>
        <p className="text-lg mb-12 opacity-90">
          Gestiona contratos, calcula reparticiones y controla ingresos para tu
          banda
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#waitlist"
            className="bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors shadow-lg"
          >
            Unirse a Lista de Espera
          </Link>
          <button className="border-2 border-accent-300 text-accent-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-300 hover:text-dark-900 transition-colors">
            Ver Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark-900">
            Enfócate en la música, nosotros en los números
          </h2>
          <p className="text-xl text-center text-dark-500 mb-12 max-w-3xl mx-auto">
            La herramienta todo-en-uno para bandas profesionales y emergentes
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-white border border-accent-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-dark-900">
                Gestión de Contratos
              </h3>
              <p className="text-dark-500">
                Registra cada tocada, pago total, gastos de gasolina y música
                extra. Cálculos automáticos de repartición.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-white border border-accent-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3 text-dark-900">
                Para Toda la Banda
              </h3>
              <p className="text-dark-500">
                Managers pagan $99/mes, músicos $49/mes. Cada integrante ve sus
                ganancias y el manager controla todo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-white border border-accent-300 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-dark-900">
                Reportes Claros
              </h3>
              <p className="text-dark-500">
                Sabe cuánto genera la banda mensualmente y cuánto gana cada
                músico. Finanzas transparentes para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-subtle py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precios Simples para Resultados Claros
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* Plan Manager */}
            <div className="bg-white rounded-2xl p-8 text-dark-900 shadow-xl">
              <div className="bg-primary-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl">
                🎻
              </div>
              <h3 className="text-2xl font-bold mb-4">Manager</h3>
              <div className="text-4xl font-bold mb-2">
                $99<span className="text-lg text-dark-500">/mes</span>
              </div>
              <p className="text-dark-500 mb-6">
                Para el encargado de la banda
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Gestión completa de contratos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Cálculos automáticos de repartición
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Dashboard financiero completo
                </li>
              </ul>
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-bold hover:bg-primary-600 transition-colors">
                Comenzar
              </button>
            </div>

            {/* Plan Músico */}
            <div className="bg-white rounded-2xl p-8 text-dark-900 shadow-xl">
              <div className="bg-dark-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl">
                🎸
              </div>
              <h3 className="text-2xl font-bold mb-4">Músico</h3>
              <div className="text-4xl font-bold mb-2">
                $49<span className="text-lg text-dark-500">/mes</span>
              </div>
              <p className="text-dark-500 mb-6">Para cada integrante</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-dark-500 rounded-full mr-3"></div>
                  Ver mis contratos asignados
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-dark-500 rounded-full mr-3"></div>
                  Seguimiento de mis ganancias
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-dark-500 rounded-full mr-3"></div>
                  Notificaciones de nuevas tocadas
                </li>
              </ul>
              <button className="w-full bg-dark-500 text-white py-3 rounded-lg font-bold hover:bg-dark-600 transition-colors">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="bg-dark-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sé de los primeros en probar TocadApp
          </h2>
          <p className="text-accent-300 mb-8 max-w-2xl mx-auto">
            Estamos desarrollando la plataforma. Déjanos tu email y te avisamos
            cuando esté lista.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tucorreo@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-dark-500 bg-dark-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-600 transition-colors"
              >
                Unirme
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
