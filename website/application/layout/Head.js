import Head from "@/infrastructure/components/Head";
import { getTranslations } from "@/infrastructure/functions/translations";
import { getKeyWords } from "@/infrastructure/functions/information";

export default function CustomHead() {
  const KeyWordsList = getKeyWords();
  const KeyWords = KeyWordsList.join(",");
  const translations = getTranslations("head");

  return (
    <Head>
      <title>{translations("title")}</title>
      <meta name="keywords" content={KeyWords} />
      <meta name="description" content={translations("description")} />
      <meta name="author" content={translations("author")} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
    </Head>
  );
}
