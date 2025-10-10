import { WaitlistEntry } from "@/types";

const STORAGE_KEYS = {
  WAITLIST: "tocadapp_waitlist",
} as const;

export const localStorageService = {
  // Waitlist
  saveToWaitlistFallback(email: string): void {
    try {
      const existing: WaitlistEntry[] = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.WAITLIST) || "[]"
      );

      const newEntry: WaitlistEntry = {
        email,
        timestamp: new Date().toISOString(),
        fallback: true,
      };

      localStorage.setItem(
        STORAGE_KEYS.WAITLIST,
        JSON.stringify([...existing, newEntry])
      );
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },

  getWaitlistEntries(): WaitlistEntry[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.WAITLIST) || "[]");
    } catch {
      return [];
    }
  },
};
