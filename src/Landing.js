import './Landing.css';
import profilePicture from './img/profile.webp';

function Landing() {
    return (
        <div className='landingComponent'>
            <img src={profilePicture}/>
            <span>Hello, I am Calin!</span>
            <h2>A frontend developer specialised in React</h2>
        </div>
    );
}

export default Landing;