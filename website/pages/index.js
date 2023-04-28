export default function Home() {
  return <main>Workouts Journal</main>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default,
    },
  };
}
