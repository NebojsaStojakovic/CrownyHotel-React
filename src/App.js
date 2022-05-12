import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './common/navbar/Navbar';
import './index.css'
import Home from './components/pages/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Destinations from './components/destinations/Destinations';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/about' exact element={<About />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/destinations' exact element={<Destinations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
