
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';





function App() {
    
  return (
    <Provider store={store}>
             <AddTodo/>
             <Todos/>
    </Provider>
    // <Router>
    //   <div>
    //     <Routes>

    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
