import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    if (!sticky) document.querySelector(".content-section").scrollTo(0, 0);
    document.querySelector(".ProjectsGrid").scrollTo(0, 0);
  }, [sticky]);

  const handleScroll = (evt) => {
    const scrollTop = evt.currentTarget.scrollTop;
    if (scrollTop > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleScrollToTop = () => {
    document.querySelector(".content-section").scrollTo(0, 0)
  }

  return (
    <div
      className={toggle ? "App AppNight" : "App"}
      onScroll={(evt) => {
        handleScroll(evt);
      }}
    >
      <Header
        toggle={toggle}
        setToggle={setToggle}
        sticky={sticky}
        setSticky={setSticky}
        handleScrollToTop={handleScrollToTop}
      />
      <section className={toggle ? "content-section content-section-dark" : "content-section"}>
        <div className="background-layer"></div>
          <Main toggle={toggle} />
          <Footer toggle={toggle} />

      </section>
    </div>
  );
}
