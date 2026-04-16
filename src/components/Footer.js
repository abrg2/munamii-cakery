import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterColumn">
                <div className="FooterHeader">Socials</div>
                <div className="FooterItem"><a href="https://www.instagram.com/munamii.cakery/">Instagram</a></div>
                <div className="FooterItem"><a href="https://www.facebook.com/munamiicupcakes/">Facebook</a></div>
            </div>
            <div className="FooterColumn">
                <div className="FooterHeader">Contact</div>
                <div className="FooterItem"><a href="mailto:redacted@munamiicakery.tld">Email</a></div>
                <div className="FooterItem"><a href="https://www.instagram.com/munamii.cakery/">Instagram</a></div>
                <div className="FooterItem"><a href="https://www.facebook.com/munamiicupcakes/">Facebook</a></div>
            </div>
            <div className="FooterColumn">
                <div className="FooterHeader">About us</div>
                <div className="FooterItem"><a href="https://www.instagram.com/munamii.cakery/">Instagram</a></div>
                <div className="FooterItem"><a href="https://www.facebook.com/munamiicupcakes/">Facebook</a></div>
            </div>
        </div>
    )
}