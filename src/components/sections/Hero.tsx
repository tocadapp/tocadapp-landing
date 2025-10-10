"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="container relative mx-auto py-18 text-center text-white">
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
          Gestiona contratos, calcula reparticiones y controla ingresos para tu
          banda con total transparencia
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
  );
}
