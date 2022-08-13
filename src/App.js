import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import styles from "./App.css"
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [headerBckgd, setHeaderBckgd] = useState('')
  const [mainBckgd, setMainBckgd] = useState('')
  const [appBckgd, setAppBckgd] = useState('')
  const [footerBckgd, setFooterBckgd] = useState('')
  const [appCl, setAppCl] = useState('')
  const [toggle, setToggle] = useState(false)
  const [sticky, setSticky] = useState(false)
  const scroll = useRef(null)

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

  const handleScroll = (evt) => {
    const scrollTop = evt.currentTarget.scrollTop
    console.log('scrollTop')
    console.log(evt.currentTarget.scrollTop)
    if(scrollTop > 0){
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  return (
    <main className="App" style={{background: `${appBckgd}`, color: `${appCl}`}} onScroll={(evt) => {handleScroll(evt)}} >
      <Header toggle={toggle} setToggle={setToggle} bckgd={headerBckgd} sticky={sticky} />
      <Main bckgd={mainBckgd} />
      <Footer bckgd={footerBckgd} />
      <h2>Random title</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quod sapiente porro et, tempore cum inventore? Nesciunt at eius, ad nisi deleniti cum nobis repudiandae ullam. Fugiat aut dolor eius?
        Fugit quis, et quisquam eius natus est minus hic sed veniam magnam illum accusamus harum at! Consectetur minus quidem consequatur reprehenderit, mollitia ipsa inventore est illum provident laboriosam rerum incidunt!
        Corrupti ipsam, vel accusamus fuga nobis sed illo rem distinctio a facilis commodi est enim, mollitia velit laboriosam veritatis reiciendis quasi odit impedit ipsum facere aperiam cupiditate? Earum, veritatis est!
        Beatae quos, quod, incidunt facere blanditiis quidem adipisci totam non sed iusto praesentium pariatur sequi eaque omnis sunt aspernatur inventore dignissimos illum officia, perferendis numquam temporibus. Veritatis obcaecati omnis enim?
        Doloremque praesentium tenetur, vitae repellendus fugit quae commodi culpa distinctio beatae. Esse fugiat unde qui perspiciatis? Nostrum, animi. Possimus illo voluptatum at autem architecto, ea quaerat iste neque omnis consectetur!
      </p>
    </main>
  )
}
