import { id } from "./id";
import { en } from "./en";

export type Locale = "id" | "en";
export const locales = { id, en } as const;

export type Translation = (typeof locales)[Locale];
