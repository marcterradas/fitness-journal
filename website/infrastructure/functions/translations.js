import { useTranslations } from "next-intl";

/**
 * get translations from specific key
 * @param {string} key
 * @returns {function}
 */
export function getTranslations(key) {
  return useTranslations(key);
}
