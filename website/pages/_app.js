import { NextIntlProvider } from "next-intl";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
