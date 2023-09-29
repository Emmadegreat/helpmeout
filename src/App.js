import './components/static/style/app.css'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from './components/pages/footer';
import Header from './components/pages/header';
import Landingpage from './components/pages/landingpage';
import Signup from './components/pages/signup';
import logo from './logo.svg';

function App() {
  return (
    <>
      <Router>

         <div className="App">

          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/signup" element={<Signup />} />


          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
