import LanguageProvider from "@/components/infrastructure/providers/Languages";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
