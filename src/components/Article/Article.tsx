import React, { PropsWithChildren } from "react";
import { getArticles } from "../../hooks/getArticles";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import Circle from "../Circle/Circle";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Nav from "../Nav/Nav";

import Resume from "../../files/Resume.pdf";
import "./Article.scss";

deckDeckGoHighlightElement();
const Article = ({ children }: PropsWithChildren) => {
  const links = [
    {
      href: "/blog",
      title: "BLOG",
      className: "blog-btn-desktop",
      id: "article-blog",
    },
    {
      href: "/",
      title: "HOME",
      className: "home-btn-desktop",
      id: "article-home",
    },
    {
      href: Resume,
      title: "RESUME",
      className: "resume-btn-desktop",
      download: "Ortiz-Luis-Resume.pdf",
      id: "article-resume",
    },
  ];
  const pathname = (
    typeof window !== "undefined" ? window.location.pathname : ""
  ).slice(1, -1);
  const { title, image, date } = getArticles(pathname)[0];
  return (
    <div>
      <Head title={title} />
      <Nav links={links} />
      <section className="article-content">
        <div className="back-btn">
          <a className="back-btn__link" href="/blog">
            ← BACK
          </a>
        </div>
        <div
          className="article-image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="article-body">
          <h1 className="article-body__title">{title}</h1>
          <div className="article-body__date">{date}</div>
          <div className="article-body__text">{children}</div>
        </div>
      </section>
      <Circle />
      <Footer />
    </div>
  );
};

export default Article;
