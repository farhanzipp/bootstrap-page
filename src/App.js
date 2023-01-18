import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
