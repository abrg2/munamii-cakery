import './Header.css';

import Hero from "./Hero";
import Menu from "./Menu";

export default function Header() {
    return (
        <div className="Header">
            <Hero />
            <Menu />
        </div>
    )
}