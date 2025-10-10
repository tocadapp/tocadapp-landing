export interface WaitlistResponse {
  success: boolean;
  message?: string;
}

export interface WaitlistEntry {
  email: string;
  timestamp: string;
  fallback: boolean;
}

export interface NotificationState {
  show: boolean;
  message: string;
  type: "success" | "error";
}
