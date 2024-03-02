
import '../CSS/App.css';
import Home from '../components/Home';
import About from '../components/about';
//import Connect from './Components/connect';
import Testimonial from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function home() {
  return (
    <div className="home">
    <Home/>
    <About/>
   
    <Testimonial/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default home;