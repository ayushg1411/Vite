import React, { useEffect, useState } from 'react'

export default function About() {

  const [name, setname]=useState('ss');
 useEffect(()=>{
    fetch( 'asd-er7g.onrender.com/about')
    .then((response) => {
        console.log(response);
        setname(response.status);
        }).catch((error) => console.error("Error fetching data:", error));
 })


  return (
      <div className="py-16 bg-white">
         <h1>{name}</h1>
      </div>
  );
}