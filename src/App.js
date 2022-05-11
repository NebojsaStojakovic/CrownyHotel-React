import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './common/navbar/Navbar';
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
