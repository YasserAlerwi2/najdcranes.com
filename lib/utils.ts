import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Format Saudi phone numbers
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('966')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  }
  return phone;
}

export function generateStructuredData(data: { type: string; [key: string]: unknown }) {
  const { type, ...rest } = data;
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...rest
  };
  
  return baseData;
}
