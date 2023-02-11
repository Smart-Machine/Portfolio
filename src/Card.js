import './Card.css';

function Card(props) {
    return (
        <div className='cardComponent'>
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
            <button>See more →</button>
        </div>
    );
}

export default Card;
