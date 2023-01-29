export default function Home() {
  return (
    <>
      <div className="px-4 m-auto max-w-screen-2xl">test</div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default,
    },
  };
}
