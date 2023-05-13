import Head from "@/infrastructure/components/Head";
import { getTranslations } from "@/infrastructure/functions/translations";
import { getKeyWords } from "@/infrastructure/functions/information";

export default function CustomHead() {
  /** @type {Array[string]} */
  const KeyWordsList = getKeyWords();

  /**@type {string} */
  const KeyWords = KeyWordsList.join(",");

  return (
    <Head>
      <meta name="keywords" content={KeyWords} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
    </Head>
  );
}
