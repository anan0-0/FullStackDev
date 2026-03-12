import "./style.css";
import {Link } from 'react-router';

function Contact() {
    return (
        <><div>
            <div className="nav-container">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </nav>
            </div>
        </div><section className="contact">
                <h2>Contact Me</h2>
                <p>
                    If you would like to get in touch, please reach out via email at
                    <a href="mailto:abc@gmail.com"></a>
                    <p>You can reach from these social links
                        <a href="https://www.facebook.com">Facebook</a>,
                        <a href="https://www.twitter.com">Twitter</a>,
                        <a href="https://www.instagram.com">Instagram</a>
                    </p>
                </p>
            </section></>
    );
}
export default Contact;