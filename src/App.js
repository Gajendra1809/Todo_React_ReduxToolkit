import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length,setlength]=useState(8);
  const [num,setnum]=useState(false);
  const [char,setchar]=useState(false);
  const [pas,setpas]=useState('');

  //useRef hook
  const pasref=useRef(null)

  const pasgen=()=>{
     let str="ABCDEFGabccdefg";
     if(num)
     str+="0123456789";
    if(char)
    str+="!@#$%^&*()";
    let pass="";
    for(let i=1;i<=length;i++)
    {
      let c=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(c);
    }
    setpas(pass);
  };
 
   const copyfun=()=>{
    pasref.current?.select();
      window.navigator.clipboard.writeText(pas);
   }

  const calpas=()=>{
    pasgen();
  }
  useEffect(()=>{
    pasgen();
  },[length,num,char,setpas])
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Password Generator</h1>
     <div style={{textAlign:'center', borderRadius:'10px', marginTop:'100px', backgroundColor:'olive', padding:'30px', width:'40%', justifyContent:'center', marginLeft:'28%'}}>&nbsp;&nbsp;
         <input  type="text" value={pas} placeholder='Password' ref={pasref} onChange={(e)=>{setpas(e.target.value)}}/>
         <button style={{backgroundColor:'blue',borderRadius:'10px'}} onClick={copyfun} >COPY</button><br/><br/>
         <h3>Enter the Length : </h3>
         <input  style={{width:'40px', textAlign:'center'}} type="text" value={length} onChange={(e)=>{setlength(e.target.value)}}/><br/><br/>
         <input type="checkbox" defaultChecked={num} onChange={()=>{setnum(!num)}}/><label htmlFor="">Numbers</label>&nbsp;
         <input type="checkbox" defaultChecked={char} onChange={()=>{setchar(!char)}}/><label htmlFor="">Characters</label>&nbsp;
         <button onClick={calpas}>Click to generate</button>
         
     </div>
     
    </div>
  );
}

export default App;
