import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './common/navbar/Navbar';
import './index.css'
import Home from './components/pages/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Destinations from './components/destinations/Destinations';
import SinglePage from './singlePage/SinglePage';
import Blog from './components/blog/Blog';
import BlogSingle from './components/blog/blogSinglePage/BlogSingle';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Footer from './common/footer/Footer';

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
            <Route path='/singlepage/:id' exact element={<SinglePage />} />
            <Route path='/blog' exact element={<Blog />} />
            <Route path='/blogsingle/:id' exact element={<BlogSingle />} />
            <Route path='/testimonial' exact element={<Testimonial />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/sign-in' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
          </Routes>
         <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
