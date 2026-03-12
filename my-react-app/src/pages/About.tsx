import './style.css';
import {Link } from 'react-router';

function About() {
    return(
        <><div className="nav-container">
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </div><section className="about">
                <h2>About Me</h2>
                <div className="image-container">
                    <img src="Image/Profile.jpg" alt="Profile Picture" />
                </div>
                <p>
                    This is a brief introduction about myself. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate hendrerit tortor, vel pharetra orci finibus et. Suspendisse potenti. Sed dignissim enim
                    ac ipsum tempor tempus. Nunc nisl dolor, lobortis ac pretium in, interdum a sapien. Aliquam erat
                    volutpat. Maecenas vestibulum maximus quam eu sollicitudin. Donec rhoncus euismod nulla id placerat.
                    Aliquam cursus, ex eu tincidunt viverra, ligula dolor sollicitudin nisl, nec gravida tellus dolor id
                    augue. Duis ornare molestie orci, eu fermentum neque mollis vel.
                </p>
            </section></>
        );
}
export default About;