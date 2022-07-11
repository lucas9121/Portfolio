import {BsLinkedin, BsGithub, BsSunFill, BsMoonFill} from 'react-icons/bs'

export default function Headers({toggle, setToggle, bckgd}) {
    return (
        <div className="Header" style={{background: `${bckgd}`}}>
            <div id="logo"></div>
            <ul>
                <li><a href='https://github.com/lucas9121' target='_blank' className='Link Github'><BsGithub  style={{height: '2rem', width: '3rem'}}/></a></li>
                <li><a href='https://www.linkedin.com/in/lucas-carlos-915b23127/' target='_blank' className='Link' id='Linkedin'> <BsLinkedin style={{height: '2rem', width: '3rem'}}/></a></li>
                <li style={{height: '100%'}}>
                    <div id="toggle">
                        <BsSunFill style={{color: 'yellow'}} />
                        <label class="switch">
                            <input type="checkbox" onClick={() => {setToggle(!toggle)}} />
                            <span class="slider round"></span>
                        </label>
                        <BsMoonFill style={{color: '#2196F3'}} />
                    </div>
                </li>
            </ul>
        </div>
    )
}