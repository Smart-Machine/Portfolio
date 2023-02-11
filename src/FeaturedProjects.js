import './FeaturedProjects.css';
import Card from './Card.js';
import reactPicture from './img/react-cover.png';
import animePicutre from './img/anime.jpg';
import cameraPicutre from './img/camera.jpg';
import notebookPicture from './img/notebook.jpeg';

function FeaturedProjects(props) {
    const cardsInfo = [
        {
            image: reactPicture, 
            title: "React Space",
            description: "Handy tool build to create amazing AR components in a React app with Redux integration via middleware..."
        }, 
        {
            image: animePicutre,
            title: "React Infinite Scroll",
            description: "A scrollable bottom sheet with virtualisation support, native animations at 60FPS and fully implemented in JS land..."
        }, 
        {
            image: cameraPicutre,
            title: "Photo Gallery",
            description: "A One-step shop for photographers to share and monetize their photos, allowing them to have a second source of income..."
        }, 
        {
            image: notebookPicture,
            title: "Event planner",
            description: "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps..."
        }
    ];
    return (
        <div className='featuredProjectsComponent' ref={props.refProject}>
            <h3>Featured Projects</h3>
            <div className='gridContainer'>
                {cardsInfo.map(info => 
                    <Card 
                        image={info.image}
                        title={info.title}
                        description={info.description}
                    />
                )}
            </div>
        </div>
    );
}

export default FeaturedProjects;