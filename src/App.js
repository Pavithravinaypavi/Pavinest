import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Carousel from './Components/Carousel/Carousel';
import ContactUs from './Components/ContactUS/ContactUs';
import Navbar from './Components/Navbar/Navbar';
import Process from './Components/Process/Process';
import Quotes from './Components/Quotes/Quotes';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <Process></Process>
      <Service></Service>
      <ContactUs></ContactUs>
      <Quotes></Quotes>
    </div>
  );
}

export default App;
