import './style.css';
import Nav from './Nav';
import Hero from './Hero';
import Programs from './Programs';
import Review from './Review';
import Plans from './Plans';
import JoinUsForm from './JoinForm';
import Footer from './Footer';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger,TextPlugin);

function App() {
  return (
    <div className="App">
     <Nav />
     <Hero />
     <Programs />
     <Plans />
     <Review />
     <JoinUsForm />
     <Footer />
    </div>
  );
}

export default App;
