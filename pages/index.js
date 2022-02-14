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

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Bushro academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
