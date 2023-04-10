import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Homescreen from './pages/homepage/Homescreen';
import Roomscreen from './pages/roompage/Roomscreen';
import Adminscreen from './pages/adminpage/Adminscreen';


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Homescreen />} exact />
          <Route path="/room" element={<Roomscreen />} exact />
          <Route path="/admin" element={<Adminscreen />} exact />

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}


    </div>
  );
}

export default App;
