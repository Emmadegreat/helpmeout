import './components/static/style/app.css'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from './components/pages/footer';
import Header from './components/pages/header';
import Home from './components/pages/home';
import Signup from './components/pages/signup';
import Uservideo from './components/pages/uservideo';
import Video from './components/pages/video';

function App() {
  return (
    <>
      <Router>

         <div className="App">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/uservideo" element={<Uservideo />} />
            <Route path="/video" element={<Video />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
