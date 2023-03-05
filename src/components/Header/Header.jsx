import { BsSunFill, BsMoonFill, BsArrowDownCircle } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import "./Header.css"
import { useState } from 'react'

export default function Headers({toggle, setToggle, sticky, setSticky}) {
    const [show, setShow] = useState(false)

    return (
        <div className={sticky ? "Header sticky" : "Header"}>
            <button id="logo" onClick={() => {setSticky(!sticky); setShow(false)}}></button>
            <BsArrowDownCircle id='arrow' onClick={() => {setSticky(!sticky)}} />
            <nav>
                <BiMenu className='hamburger' onClick={() => {setShow(!show)}} />
                <ul className={show ? "menu" : ""}>
                    <li className='list'><a className={toggle ? 'night' : ""} href="#About" onClick={() => {setShow(false)}}>About</a></li>
                    <li className='list'><a className={toggle ? 'night' : ""} href="#Projects" onClick={() => {setShow(false)}}>Projects</a></li>
                    <li className='list'><a className={toggle ? 'night' : ""} href="mailto:lucas2carlos@gmail.com" target="_blank" onClick={() => {setShow(false)}}>Contact me</a></li>
                    <li className='list' style={{height: '100%'}}>
                        <div id="toggle">
                            <BsSunFill style={{color: 'yellow'}} />
                            <label className="switch" onClick={() => {setShow(false)}}>
                                <input type="checkbox" onClick={() => {setToggle(!toggle)}} />
                                <span className="slider round"></span>
                            </label>
                            <BsMoonFill style={{color: '#2196F3'}} />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}