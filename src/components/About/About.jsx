import React, { useEffect, useState } from 'react'

export default function About() {

  const [name, setname]=useState('ayu');
 useEffect(()=>{
    fetch(`asd-er7g.onrender.com/ayush`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    setname(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
 })


  return (
      <div className="py-16 bg-white">
         <h1>{name}</h1>
      </div>
  );
}