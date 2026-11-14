import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openMailClient(subject: string, body: string) {
  const email = "muntasirhosain@gmail.com";
  const encodedSubject = encodeURIComponent(subject.trim());
  const encodedBody = encodeURIComponent(body.trim());
  const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  window.location.href = mailtoUrl;
}

