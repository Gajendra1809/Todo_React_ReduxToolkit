
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Landing from './component/Landing';
import About from './component/About';
import Contact from './component/Contact';
import Github from './component/Github';



function App() {
  
 
 
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Landing/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/github' element={<Github/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
