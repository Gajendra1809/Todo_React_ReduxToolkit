
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';




function App() {
  
 
 
  return (
    <UserContextProvider>
    <h1>React Context API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
    // <Router>
    //   <div>
    //     <Routes>
          
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
