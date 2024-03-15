
import '../CSS/App.css';
import Home from '../components/Home';
import About from '../components/about';
//import Connect from './Components/connect';
import Testimonial from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar.jsx";
import Work from "../components/Work.jsx";

function home() {
  return (
    <div className="home">
    <Navbar />
    <Home/>
    //
    <About/>
    <Work/>
    <Testimonial/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default home;