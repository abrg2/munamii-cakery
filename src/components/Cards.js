import "./Cards.css";

export default function Cards(props) {
    return (
        <div className="Cards">
            {props.children}
        </div>
    )
}