import KeyWords from "@/infrastructure/constants/keywords.json";
import Languages from "@/infrastructure/constants/languages.json";

/**
 * @returns {string}
 */
export function getKeyWords() {
  return KeyWords.keywords;
}

/**
 * @param {string} language
 * @returns {string | undefined}
 */
export function getLanguage(language) {
  return Languages[language];
}
