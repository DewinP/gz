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
  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", optionsDate);
  const formattedTime = dateObj.toLocaleTimeString("en-US", optionsTime);

  return `${formattedDate} at ${formattedTime}`;
}
