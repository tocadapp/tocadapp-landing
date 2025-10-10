import { apiClient } from "./client";
import { WaitlistResponse } from "@/types";

export const waitlistService = {
  async addToWaitlist(email: string): Promise<WaitlistResponse> {
    try {
      const response = await apiClient.post<WaitlistResponse>("/waitlist", {
        email,
      });
      return response.data;
    } catch (error) {
      console.error("Waitlist service error:", error);
      throw error;
    }
  },
};
