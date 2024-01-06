
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/Theme';
import { useEffect, useState } from 'react';
import Themebtn from './components/Themebtn';
import Card from './components/Card';




function App() {
    const [thememode,sethememode]=useState('light')
    const lightTheme=()=>{
      sethememode('light')
    }
    const darkTheme=()=>{
      sethememode('dark')
    }

    useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark");
      document.querySelector('html').classList.add(thememode)
    },[thememode])

  return (
    <ThemeProvider value={{thememode,lightTheme,darkTheme}}>
      <h1 >React Context API</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
    // <Router>
    //   <div>
    //     <Routes>

    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
