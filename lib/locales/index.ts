import { id } from "./id";
import { en } from "./en";

export type Locale = "id" | "en";
export type Translation = typeof id;

export const locales = { id, en } as const;
