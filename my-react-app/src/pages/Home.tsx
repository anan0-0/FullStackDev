// Home.tsx
import './style.css';
import { BrowserRouter } from 'react-router';
import Button from '../Button.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx'
import Navbar from '../components/Navbar.tsx';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div >
      <div className="nav-container">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>

      <div className="home-content">
        <h1>Welcome to My React App</h1>
        <p>This is the home page of the application.</p>
        <p>Explore the features and enjoy your stay!</p>
      </div>

      <div className="image-container">
        <Button />
      </div>
      </div>
    
  );
}

export default Home;
