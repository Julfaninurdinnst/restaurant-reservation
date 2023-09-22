import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
      
      <About/>
    </div>
  );
}

export default App;
