import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Landing from './pages/Landing';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route exact path='/about' element={<AboutPage />}/>
          <Route exact path='/product' element={<ProductPage />}/>
        </Routes>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
