import React from "react";
import "./reset.scss";
import "./index.scss";

import Circle from "../components/Circle/Circle";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";

import Resume from "../files/Resume.pdf";

const IndexPage = () => {
  const links = [
    {
      href: "/blog",
      title: "BLOG",
      className: "blog-btn-desktop",
      id: "index-blog",
    },
    {
      href: "#projects",
      title: "WORK",
      className: "projects-btn-desktop",
      id: "index-work",
    },
    {
      href: Resume,
      title: "RESUME",
      className: "resume-btn-desktop",
      download: "Ortiz-Luis-Resume.pdf",
      id: "index-resume",
    },
  ];

  return (
    <main>
      <Head title="Welcome!" />
      <Header links={links} />
      <Projects />
      <Circle />
      <Footer />
    </main>
  );
};

export default IndexPage;
