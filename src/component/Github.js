import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Github() {
    const [fol,setfol]=useState({});
    const [name,setname]=useState('');
    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(resp=>resp.json())
        .then(resp=>{setfol(resp)})
    },[name])
  return (
    <div>
        <Header/>
        <label >Enter Your UserName : </label>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <h2>GitHub Followers : {fol.followers}</h2>
        <img src={fol.avatar_url} alt="" />
        <Footer/>
    </div>
  )
}
