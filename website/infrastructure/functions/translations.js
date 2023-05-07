import { useTranslations } from "next-intl";

export function getTranslations(key) {
  return useTranslations(key);
}
