import { BiMenu } from 'react-icons/bi'
import "./Header.css"
import { useState } from 'react'

export default function Headers({toggle, setToggle, sticky, setSticky}) {
    const [show, setShow] = useState(false)

    const handleScrollToTop = () => {
        document.querySelector(".content-section").scrollTo(0, 0)
    }

    const scrollDown = () => {
        document.querySelector('.App').scrollTo({
            top: window.scrollY + 50, 
            behavior: 'smooth' 
        })
    }

    return (
        <header className={sticky ? "Header sticky" : "Header"}>
            <div id={!sticky ? "logo" : "portrait"} onClick={() => handleScrollToTop()}></div>
            <div id="mouse-icon"><div id="mouse" onClick={() => {setSticky(!sticky); scrollDown()}}></div> </div>
            <nav>
                <BiMenu className='hamburger' onClick={() => {setShow(!show)}} />
                <ul className={show ? "menu" : ""}>
                    <li className='list'><a className={toggle ? 'night' : ""} href="#About" onClick={() => {setShow(false)}}>About</a></li>
                    <li className='list'><a className={toggle ? 'night' : ""} href="#Projects" onClick={() => {setShow(false)}}>Projects</a></li>
                    <li className='list'><a className={toggle ? 'night' : ""} href="mailto:lucas2carlos@gmail.com" target="_blank" rel="noreferrer" onClick={() => {setShow(false)}}>Contact me</a></li>
                    <li className='list' style={{height: '100%'}}>
                        <div id="toggle">
                            <label className="switch" onClick={() => {setShow(false)}}>
                                <input type="checkbox" onClick={() => {setToggle(!toggle)}} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}