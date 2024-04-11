import "./Footer.css"
import { FaGithub, FaXTwitter, FaLinkedinIn, FaRegFileLines } from "react-icons/fa6";
import { AiOutlineFileText } from "react-icons/ai"

export default function Footer(props) {
    return (
        <footer>
            <nav className="footer-container">
                <h2>Lucas Carlos</h2>
                <h4>Full-Stack Software Engineer</h4>
                <ul>
                    <li><a href='https://github.com/lucas9121' target='_blank' rel="noreferrer" className='Link Github footer-icon'><FaGithub  /></a></li>
                    <li><a href='https://www.linkedin.com/in/lucas-carlos-915b23127/' target='_blank' rel="noreferrer" className='Link footer-icon' id='Linkedin'> <FaLinkedinIn /></a></li>
                    <li><a href='https://twitter.com/CodingLucas9121' target='_blank' rel="noreferrer" className='Link footer-icon' id='Twitter'> <FaXTwitter /></a></li>
                    <li><a href="https://drive.google.com/file/d/1dSCBGKIISxkCr91MVLnHLdmI63e6GTIo/view?usp=sharing" target="_blank" rel="noreferrer" download="resume" className="Link footer-icon"><FaRegFileLines /></a></li>
                </ul>
                <small className="footer-lower">&copy;Copyright 2024. Crafted by <u>Lucas Carlos</u></small>
            </nav>
        </footer>
    )
}