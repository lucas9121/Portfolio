import "./App.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [mode, setMode] = useState('')

  useEffect(() => {
    if(toggle){
      setMode('night mode')
    } else if(mode !== '') {
      setMode('day mode')
    }
    if(mode === 'day mode'){
      document.querySelector(".subDiv").classList.add('dayMode')
    } else {
      document.querySelector(".subDiv").classList.remove('dayMode')
    }
  }, [toggle, mode])

  const handleScroll = (evt) => {
    const scrollTop = evt.currentTarget.scrollTop
    if(scrollTop > 0){
      setSticky(true)
      document.querySelector(".App").style.paddingTop = "10px"
    } else {
      document.querySelector(".App").style.paddingTop = ""
      setSticky(false)
    }
  }

  return (
    <main className={toggle ? "App AppNight" : "App"} onScroll={(evt) => {handleScroll(evt)}}>
        <Header toggle={toggle} setToggle={setToggle} sticky={sticky} setMode={setMode} mode={mode} />
        <div className={toggle ? "subDiv subDivNight" : "subDiv"}>
          <div className="Sun"></div>
          <div className="Moon"></div>
          <Main toggle={toggle} />
          <Footer toggle={toggle} />
        </div>
    </main>
  )
}
