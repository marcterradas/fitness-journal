import { NextIntlProvider } from "next-intl";

export default function LanguageProvider({ children, messages }) {
  return <NextIntlProvider messages={messages}>{children}</NextIntlProvider>;
}
