import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from "./App.css"
import { useEffect, useState } from "react";

export default function App() {
  const [headerBckgd, setHeaderBckgd] = useState('')
  const [mainBckgd, setMainBckgd] = useState('')
  const [appBckgd, setAppBckgd] = useState('')
  const [footerBckgd, setFooterBckgd] = useState('')
  const [appCl, setAppCl] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if(toggle){
      setHeaderBckgd('rgb(12 68 132)')
      setAppBckgd('#080808')
      setMainBckgd('linear-gradient(0deg, rgb(0 3 5 / 60%), rgb(0 30 57 / 80%), rgb(1 18 42 / 70%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 60%), rgb(1 18 42 / 70%), rgb(0 62 129))')
      setAppCl('white')
      setFooterBckgd('#030c14c7')
    } else {
      setHeaderBckgd('rgb(238 186 58)')
      setAppBckgd('linear-gradient(357deg, #00000091, #1c586ad4)')
      setMainBckgd('linear-gradient(0deg, rgba(240, 254, 255, 0.6), rgba(240, 254, 255, 0.8), rgb(240 254 255 / 70%), rgb(240 254 255 / 60%), rgb(240 254 255 / 60%), rgb(240 254 255 / 60%), rgb(240 254 255 / 60%), rgb(223 203 157 / 70%), rgb(234 178 39))')
      setAppCl('black')
      setFooterBckgd('linear-gradient(0deg, rgba(240, 254, 255, 0.8), rgba(240, 254, 255, 0.7), rgba(240, 254, 255, 0.6), rgba(240, 254, 255, 0.6), rgba(240, 254, 255, 0.6), rgba(240, 254, 255, 0.6))')
    }
  }, [toggle])

  return (
    <main className="App" style={{background: `${appBckgd}`, color: `${appCl}`}}>
      <Header toggle={toggle} setToggle={setToggle} bckgd={headerBckgd} />
      <Main bckgd={mainBckgd} />
      <Footer bckgd={footerBckgd} />
    </main>
  )
}
