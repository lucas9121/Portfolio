import { BiMenu } from 'react-icons/bi'
import "./Header.css"
import { useState } from 'react'

export default function Headers({toggle, setToggle, sticky, setSticky}) {
    const [show, setShow] = useState(false)

    const handleScrollToTop = () => {
        document.querySelector(".content-section").scrollTo(0, 0)
        setSticky(!sticky)
    }

    const scrollDown = () => {
        document.querySelector('.App').scrollTo({
            top: window.scrollY + 500, 
            behavior: 'smooth' 
        })
    }

    return (
        <header className={sticky ? "sticky" : ""}>
            <div id="portrait" className={!sticky ? 'hide' : 'show'} onClick={() => handleScrollToTop()}></div>
            {!sticky && <div className="background-overlay"></div> }
            <div id="mouse-icon" className={sticky ? 'hide' : 'show'}><div id="mouse" onClick={() => {setSticky(!sticky); scrollDown()}}></div> </div>
            <nav>
                <BiMenu className='hamburger' onClick={() => {setShow(!show)}} />
                <ul id={show ? "header-menu" : ""}>
                    <li className='list'><a href="#About" onClick={() => {setShow(false)}}>About</a></li>
                    <li className='list'><a href="#Projects" onClick={() => {setShow(false)}}>Projects</a></li>
                    <li className='list'><a href="mailto:lucas2carlos@gmail.com" target="_blank" rel="noreferrer" onClick={() => {setShow(false)}}>Contact me</a></li>
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