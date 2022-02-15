import Head from "next/head";

import Layout from "../../src/components/layout/layout";
import Courses from "../../src/components/Courses/Courses";
import Contact from "../../src/components/contact/contact";
import Mentors from "../../src/components/Mentors/Mentors";

const About = () => {
  return (
    <>
      <Head>
        <title>Bushro o`quv markazi haqida, Arab tillari</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Layout>
        <Courses />
        <Contact />
        <Mentors />
      </Layout>
    </>
  );
};

export default About;
