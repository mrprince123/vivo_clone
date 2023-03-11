import './App.css';
import Navbar from './partials/Navbar/navbar';
import Footer from './partials/Footer/footer';
import Home from './components/HomePage/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
