import React, { useEffect, useState } from 'react'

export default function About() {

  const [name, setname]=useState('ss');
  useEffect(() => {
    fetch('https://pop-guid.onrender.com/about')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is JSON
      })
      .then((data) => {
        // Now 'data' contains the JSON response from your backend
        console.log(data);
        // Do something with 'data', such as updating state
        setname(data.name);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
      <div className="py-16 bg-white">
         <h1>{name}</h1>
      </div>
  );
}