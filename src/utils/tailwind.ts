import { twMerge as tw } from "tailwind-merge"
import { clsx, ClassValue } from "clsx"

export default function cn(...inputs: ClassValue[]) {
  return tw(clsx(inputs))
}
