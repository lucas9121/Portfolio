import Projects from "../Projects/Projects"
import About from "../About/About"
import "./Main.css"

export default function Main({toggle}) {
    return (
        <div className={toggle ? "Main MainNight" : "Main"}>
            <h2 id="About">About Me</h2>
            <About />
            <h2 id="Projects">My Projects</h2>
            <Projects toggle={toggle} />
            </div>
    )
}