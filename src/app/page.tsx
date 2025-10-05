"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }

    if (!email) {
      alert("Por favor ingresa tu email");
      return;
    }

    alert(`¡Gracias! Te contactaremos en: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>

        <div className="container relative mx-auto py-18 text-center text-white">
          {/* <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm font-medium text-purple-200">
            ✨ Lanzamiento próximamente
          </div> */}

          <div className="flex justify-center items-center mb-5">
            <Image
              src="/assets/logo10.png"
              alt="Logo"
              width={200}
              height={200}
              className="rounded-lg "
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            TocadApp
          </h1>

          {/* <div className="flex justify-center items-center mb-5">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-lg "
            />
          </div> */}

          <p className="text-2xl md:text-2xl mb-4 max-w-3xl mx-auto font-light">
            La plataforma que{" "}
            <span className="font-semibold text-emerald-300">
              organiza tus tocadas
            </span>{" "}
            y{" "}
            <span className="font-semibold text-purple-300">
              finanzas musicales
            </span>
          </p>

          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Gestiona contratos, calcula reparticiones y controla ingresos para
            tu banda con total transparencia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Unirse a Lista de Espera</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <button className="group border-2 border-emerald-400/50 bg-emerald-400/10 backdrop-blur-sm text-emerald-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400/20 hover:border-emerald-400 transition-all duration-300 hover:scale-105">
              Ver Demo 🎬
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                  Managers pagan $99/mes, músicos $49/mes. Cada integrante ve
                  sus ganancias y el manager controla todo.
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

      {/* Pricing Section */}
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

              <p className="text-slate-500 mb-8">
                Para el encargado de la banda
              </p>

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

      {/* Waitlist Section */}
      <section
        id="waitlist"
        className="relative bg-gradient-to-br from-slate-900 to-slate-800 py-10 text-white"
      >
        <div className="container mx-auto px-4 text-center pt-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-extrabold mb-2">
              Sé de los primeros en probar TocadApp
            </h2>

            <p className="text-emerald-300 text-md mb-6 leading-relaxed">
              Estamos desarrollando la plataforma. Déjanos tu email y te
              avisamos cuando esté lista.
            </p>

            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <button
                  onClick={() => handleSubmit()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  Unirme 🚀
                </button>
              </div>

              <p className="text-slate-400 text-sm mt-6">
                Únete a más de{" "}
                <span className="text-purple-300 font-semibold">
                  500 músicos
                </span>{" "}
                esperando el lanzamiento
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
