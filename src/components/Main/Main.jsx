import Projects from "../Projects/Projects";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./Main.css";

export default function Main({ toggle, cl, isClicked }) {
  return (
    <section className="content-section">
      <main className={!toggle ? "main-light-mode": "main-dark-mode"}>
        <About toggle={toggle} isClicked={isClicked} />
        <Projects toggle={toggle} cl={cl} />
      </main>
      <Footer toggle={toggle} />
    </section>
  );
}
