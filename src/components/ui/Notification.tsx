"use client";
import { NotificationState } from "@/types";

interface NotificationProps {
  notification: NotificationState | null;
  onClose: () => void;
}

export default function Notification({
  notification,
  onClose,
}: NotificationProps) {
  if (!notification) return null;

  const styles = {
    success: "bg-emerald-500 border-emerald-400/30",
    error: "bg-red-500 border-red-400/30",
  };

  const icons = {
    success: "✓",
    error: "!",
  };

  const iconColors = {
    success: "text-emerald-500",
    error: "text-red-500",
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div
        className={`${
          styles[notification.type]
        } text-white px-6 py-4 rounded-xl shadow-2xl border backdrop-blur-sm`}
      >
        <div className="flex items-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
            <span
              className={`${iconColors[notification.type]} text-sm font-bold`}
            >
              {icons[notification.type]}
            </span>
          </div>
          <span className="font-semibold">{notification.message}</span>
        </div>
      </div>
    </div>
  );
}
