import Projects from "../Projects/Projects"
import "./Main.css"

export default function Main({toggle}) {
    return (
        <div className={toggle ? "Main MainNight" : "Main"}>
            <h2>My Projects</h2>
            <Projects />
            </div>
    )
}