import './Header.css';
import { forwardRef } from 'react';
import githubLogo from './img/github-mark.png';
import linkedinLogo from './img/linkedin.png';

const Button = forwardRef((props, ref) => (
    <button ref={ref} {...props}>{props.innerText}</button>
));

function Header(props) {

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className='headerComponent'>
            <ul className='externalLinksList'>
                <li>
                    <a href='https://github.com/Smart-Machine'>
                        <img src={githubLogo} />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/calin-radu-ba19251a0/'>
                        <img src={linkedinLogo}></img>
                    </a>
                </li>
            </ul>
            <ul className='internalLinksList'>
                <li>
                    <Button 
                        onClick={() => handleClick(props.refProjectButton)}
                        innerText="Projects"
                        ref={props.refProjectButton}
                    />
                </li>
                <li>
                    <Button 
                        onClick={() => handleClick(props.refContactButton)}
                        innerText="Contact Me"
                        ref={props.refContactButton}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Header;