import "./Card.css";

export default function Card(props) {
    return (
        <div className="Card">
            <div className="CardImage">
                <img alt="" src={`${process.env.PUBLIC_URL}${props.src}`} style={{objectPosition: props.objectPosition}} />
            </div>
            <p>{props.price}</p>
            <h3>{props.title}</h3>
        </div>
    )
}