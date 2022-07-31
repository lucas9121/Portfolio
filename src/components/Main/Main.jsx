import Projects from "../Projects/Projects"
import "./Main.css"

export default function Main(props) {
    return (
        <div className="Main" style={{background: `${props.bckgd}`}}>
            <h2>My Projects</h2>
            <Projects />
            </div>
    )
}