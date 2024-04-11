import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { useState, useEffect } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);


  useEffect(() => {
    if (!sticky){
      document.querySelector(".App").scrollTo(0, 0);
    } 
  }, [sticky]);

  const handleScroll = (evt) => {
    const scrollTop = evt.currentTarget.scrollTop;
    // console.log(scrollTop)
    if (scrollTop > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };



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
      />
      <Home sticky={sticky} />
      <section className={toggle ? "content-section content-section-dark" : "content-section"}>
          <Main toggle={toggle} />
          <Footer toggle={toggle} />

      </section>
    </div>
  );
}
