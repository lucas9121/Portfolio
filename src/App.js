import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import styles from "./App.css"

export default function App() {
  return (
    <main className="App">
      <Header />
      <Main />
      <Projects />
      <Footer />
    </main>
  )
}
