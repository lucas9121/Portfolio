import Projects from "../Projects/Projects";
import About from "../About/About";
import "./Main.css";

export default function Main({ toggle }) {
  return (
    <main className={toggle ? "Main MainNight" : "Main"}>
      <About toggle={toggle} />
      <Projects toggle={toggle} />
    </main>
  );
}
