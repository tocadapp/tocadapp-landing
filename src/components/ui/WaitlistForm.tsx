"use client";
import { useState } from "react";

interface WaitlistFormProps {
  onSubmit: (email: string) => Promise<void>;
  isSubmitting: boolean;
}

export default function WaitlistForm({
  onSubmit,
  isSubmitting,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    await onSubmit(email.trim());
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
        className="flex-1 px-6 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Enviando...
          </div>
        ) : (
          "Unirme 🚀"
        )}
      </button>
    </form>
  );
}
