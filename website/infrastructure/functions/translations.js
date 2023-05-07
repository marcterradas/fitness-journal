import { useTranslations } from "next-intl";

/**
 * get translations from specific translationKey
 * @param {string} translationKey
 * @returns {function}
 */
export function getTranslations(translationKey) {
  return useTranslations(translationKey);
}
