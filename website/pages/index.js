import Head from "@/application/layout/Head";
import Navbar from "@/application/layout/Navbar";

export default function Home() {
  return (
    <>
      <Head />
      <div className="px-4 m-auto max-w-screen-2xl">
        <Navbar />
        <main>Workouts Journal</main>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/translations/${locale}.json`)).default,
    },
  };
}
