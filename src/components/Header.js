import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export default function Headers(props) {
    return (
        <div className="Header">
            <div id="logo"></div>
            <ul>
                <li><a href='https://github.com/lucas9121' target='_blank' className='Link Github'><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                <li><a href='https://www.linkedin.com/in/lucas-carlos-915b23127/' target='_blank' className='Link' id='Linkedin'> <BsLinkedin style={{height: '2rem', width: '3rem'}}/></a></li>
            </ul>
        </div>
    )
}