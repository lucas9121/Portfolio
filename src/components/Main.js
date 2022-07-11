import Projects from "./Projects"

export default function Main(props) {
    return (
        <div className="Main" style={{background: `${props.bckgd}`}}>
            <h2>My Projects</h2>
            <Projects />
            </div>
    )
}