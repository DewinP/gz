import { type ClassValue, clsx } from "clsx";
import { createHash, randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateShortDisplayId(): string {
  const uuidV4 = randomUUID();
  const hash = createHash("sha256").update(uuidV4).digest("hex");
  return hash.substring(hash.length - 8);
}

//format date to be time since
export function formatTimeSince(date: string | number | Date) {
  // it should formate the date with time since
  const time = new Date(date).getTime();
  const now = Date.now();
  const diff = now - time;
  const seconds = diff / 1000;
  const minutes = seconds / 60;
  if (seconds < 60) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${Math.floor(minutes)}m ago`;
  }

  return new Date(date).toLocaleString();
}
