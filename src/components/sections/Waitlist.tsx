"use client";
import { useWaitlist } from "@/hooks/useWaitlist";
import WaitlistForm from "@/components/ui/WaitlistForm";
import Notification from "@/components/ui/Notification";

export default function WaitlistSection() {
  const { isSubmitting, notification, handleSubmit } = useWaitlist();

  return (
    <>
      <Notification notification={notification} onClose={() => {}} />

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
              <WaitlistForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />

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
    </>
  );
}
