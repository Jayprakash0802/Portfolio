import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Skills,
} from './components';
// import { useMediaQuery } from 'react-responsive';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ;">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-space bg-cover h-auto">
          <Skills />
        </div>
        <div className="bg-experienceLight  bg-cover bg-center bg-no-repeat ">
          <Experience />
          
        </div>
        <div className='bg-project bg-cover bg-no-repeat h-auto bg-center'>
          <Projects />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
