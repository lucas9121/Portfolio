import { BsSunFill, BsMoonFill, BsArrowDownCircle } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import "./Header.css"
import { useState } from 'react'

export default function Headers({toggle, setToggle, sticky, setSticky}) {
    const [show, setShow] = useState(false)

    return (
        <div className={sticky ? "Header sticky" : "Header"}>
            <button id="logo" onClick={() => {setSticky(!sticky)}}></button>
            <BsArrowDownCircle id='arrow' onClick={() => {setSticky(!sticky)}} />
            <BiMenu className='Hamburger' onClick={() => {setShow(!show)}} />
            <nav className={show ? "navigation" : ""}>
                <ul>
                    <li className='list'><a className={toggle ? 'night' : ""} href="#About">About</a></li>
                    <li className='list'><a className={toggle ? 'night' : ""} href="#Projects">Projects</a></li>
                    <li className='list'><a className={toggle ? 'night' : ""} href="mailto:lucas2carlos@gmail.com" target="_blank">Contact me</a></li>
                    <li className='list' style={{height: '100%'}}>
                        <div id="toggle">
                            <BsSunFill style={{color: 'yellow'}} />
                            <label className="switch">
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