import "./Footer.css"
import {BsLinkedin, BsGithub} from "react-icons/bs"
import {AiOutlineFileText} from "react-icons/ai"

export default function Footer(props) {
    return (
        <div className={props.toggle ? "Footer FooterNight" : "Footer"}>
            <p>Copyright &copy; 2022 | Lucas Carlos</p>
            <nav>
                <ul>
                    <li><a href="https://drive.google.com/file/d/1V9aUk79pMPNuxODgle9JL5Gwcd55XXKT/view?usp=share_link" target="_blank" download="resume" className="Link footerLink"><AiOutlineFileText style={{height: '2rem', width: '3rem'}}/></a></li>
                    <li><a href='https://github.com/lucas9121' target='_blank' className='Link Github footerLink'><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                    <li><a href='https://www.linkedin.com/in/lucas-carlos-915b23127/' target='_blank' className='Link' id='Linkedin'> <BsLinkedin style={{height: '2rem', width: '3rem'}}/></a></li>
                </ul>
            </nav>
        </div>
    )
}