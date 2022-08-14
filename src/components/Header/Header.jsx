import {BsLinkedin, BsGithub, BsSunFill, BsMoonFill} from 'react-icons/bs'
import "./Header.css"

export default function Headers({toggle, setToggle, bckgd, sticky}) {
    return (
        <div className={sticky ? "Header sticky" : "Header"}>
            <a href='#' id="logo"></a>
            <nav>
                <ul>
                    <li className='list'><a href="#About">About</a></li>
                    <li className='list'><a href="#Projects">Projects</a></li>
                    <li className='list'><a href="mailto:lucas2carlos@gmail.com" target="_blank">Contact me</a></li>
                    {/* <li><a href='https://github.com/lucas9121' target='_blank' className='Link Github'><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                    <li><a href='https://www.linkedin.com/in/lucas-carlos-915b23127/' target='_blank' className='Link' id='Linkedin'> <BsLinkedin style={{height: '2rem', width: '3rem'}}/></a></li> */}
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