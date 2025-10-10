"use client";
import { useState, useCallback } from "react";
import { waitlistService } from "@/services/api/waitlistService";
import { localStorageService } from "@/services/storage/localStorageService";
import { NotificationState } from "@/types";

export function useWaitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );

  const showNotification = useCallback(
    (message: string, type: "success" | "error") => {
      setNotification({ show: true, message, type });
      const timeout = type === "success" ? 5000 : 4000;
      setTimeout(() => setNotification(null), timeout);
    },
    []
  );

  const handleSubmit = useCallback(
    async (email: string) => {
      if (!email) {
        showNotification("Por favor ingresa tu email", "error");
        return;
      }

      setIsSubmitting(true);

      try {
        const result = await waitlistService.addToWaitlist(email);

        if (result.success) {
          showNotification(
            "¡Perfecto! Te avisaremos cuando esté listo.",
            "success"
          );
        } else {
          showNotification(
            result.message || "Error al guardar tu email",
            "error"
          );
        }
      } catch (error) {
        console.error("Error:", error);
        // Fallback: guardar en localStorage
        localStorageService.saveToWaitlistFallback(email);
        showNotification(
          "¡Perfecto! Te avisaremos cuando esté listo.",
          "success"
        );
      }

      setIsSubmitting(false);
    },
    [showNotification]
  );

  return {
    isSubmitting,
    notification,
    handleSubmit,
  };
}
