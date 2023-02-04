import './App.css';
import FifthPart from './Components/FifthPart';
import Footer from './Components/Footer';
import FourthPart from './Components/FourthPart';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import SecondBanner from './Components/SecondBanner';
import Testimonial from './Components/Testimonial';
import ThirdPart from './Components/ThirdPart';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SecondBanner />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
