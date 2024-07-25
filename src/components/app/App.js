import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/Header/Header';
import Footer from '../footer/Footer';
import Home from '../mainContents/homeContent/HomeContent';
import Rental from '../mainContents/rentalContent/RentalContent';
import About from '../mainContents/aboutContent/AboutContent';
import Error404 from '../mainContents/errorContent/Error404';
import './app.scss';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
			{/* Redirections */}
			<Route path="/Kasa" element={<Navigate to="/" />} />
			<Route path="/home" element={<Navigate to="/" />} />
			<Route path="/accueil" element={<Navigate to="/" />} />
			<Route path="/apropos" element={<Navigate to="/about" />} />

			{/* Routes normales */}
			<Route path="/" element={<Home />}/>
			<Route path="/rental/:id" element={<Rental />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;