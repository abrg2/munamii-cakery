import "./Hero.css";

export default function Hero() {
    return (
        <div className="Hero">
            <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="logo" />
        </div>
    )
}