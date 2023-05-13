import Head from "@/application/layout/Head";

export default function Home() {
  return (
    <>
      <Head />
      <main>Workouts Journal</main>;
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
