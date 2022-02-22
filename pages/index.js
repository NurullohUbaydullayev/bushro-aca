import Head from "next/head";

import Layout from "../src/components/layout/layout";

// Components
import Intro from "../src/components/Intro/Intro";
import Counter from "../src/components/Counter/Counter";
import Information from "../src/components/Information/information";
import PassTests from "../src/components/PassTests/PassTests";
import Branches from "../src/components/Branches/branches";
import News from "../src/components/news/news";
import Comments from "../src/components/comments/comments";

// Images

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Bushro o`quv markazi</title>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <meta
          name="keywords"
          content="Bushro, Bushro o`quv markazi, akademiya, arab tili, ingliz tili, turk tili, arzon"
        />
        <meta name="Address" content="Yunusobod tumani, Chinobod ko`chasi 1" />
        <meta
          name="description"
          content="Arab, Ingliz, Rus, Turk tillariga ixtisoslashtirilgan Bushro oquv markazi."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="uz_UZ" />
        <meta property="og:title" content="Bushro akademiyasi" />
        <meta
          property="og:description"
          content="Markaz arab, rus, ingliz tillariga va maktabgacha bolgan talimga ixtisoslashgan"
        />
        <meta property="og:url" content="bushroacademy.uz" />
        <meta property="og:site_name" content="Bushro akademiyasi" />

        <meta
          property="og:image"
          content="https://telegra.ph/file/080e897b8a23e8af4d4c4.jpg"
        />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Bushro" />
        <meta property="twitter:title" content="Bushro academy" />
        <meta
          property="twitter:description"
          content="Bushro oquv markazining sifatli til kurslarida talim oling"
        />
        <meta
          property="twitter:image"
          content="https://telegra.ph/file/080e897b8a23e8af4d4c4.jpg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Layout>
        <main>
          <Intro />
          <Counter />
          <Information />
          <PassTests />
          <News />
          <Comments />
          <Branches />
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  /*
    All Fetchs
  */

  return {
    props: {
      post: {},
    },
  };
}
