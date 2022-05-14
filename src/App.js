import { BrowserRouter, Routes, Route   } from 'react-router-dom';
import Header from './header';
import Hero from './hero';
import Why from './why';
import Feature from './feature';
import News from './news';
import SecondFeature from './secondfeature';
import Testimonial from './testimonial';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Why />
      <Feature />
      <News />
      <SecondFeature />
      <Testimonial />
    </div>
  );
}

export default App;
