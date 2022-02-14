import Layout from "../../src/components/layout/layout";
import Courses from "../../src/components/Courses/Courses";
import Contact from "../../src/components/contact/contact";
import Mentors from "../../src/components/Mentors/Mentors";

const About = () => {
  return (
    <>
      <Layout>
        <Courses />
        <Contact />
        <Mentors />
      </Layout>
    </>
  );
};

export default About;
