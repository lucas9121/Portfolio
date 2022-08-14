import "./Footer.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {AiOutlineFileText} from "react-icons/ai"

export default function Footer(props) {
    return (
        <div className={props.toggle ? "Footer FooterNight" : "Footer"}>
            <p>&copy;LC 2022</p>
            <nav>
                <ul>
                    <li><a href="https://drive.google.com/file/d/172zPMwOiTCV3DZ2AV0JxJCYf8RSxD5hs/view?usp=sharing" target="_blank" download="resume" className="Link footerLink"><AiOutlineFileText style={{height: '2rem', width: '3rem'}}/></a></li>
                    <li><a href='https://github.com/lucas9121' target='_blank' className='Link Github footerLink'><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                    <li><a href='https://www.linkedin.com/in/lucas-carlos-915b23127/' target='_blank' className='Link' id='Linkedin'> <BsLinkedin style={{height: '2rem', width: '3rem'}}/></a></li>
                </ul>
            </nav>
        </div>
    )
}