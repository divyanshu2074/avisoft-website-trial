import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath(): string {
  // Returns base path if deployed under subpath (e.g. GitHub Pages)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return basePath;
}

export function assetUrl(path: string): string {
  const base = getBasePath();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
