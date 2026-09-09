import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LocalizedString, Locale } from "@/types/portfolio";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalized(
  content: LocalizedString,
  locale: Locale = "ar"
): string {
  return content[locale] || content.ar || content.en || "";
}

export function getWhatsAppUrl(phone: string, message: string): string {
  // Strip non-digit characters except leading +
  const cleanNumber = phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
