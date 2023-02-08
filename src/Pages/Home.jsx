import React, { useState, useContext } from 'react';
import { GreetContext } from '../contexts/GreetContext';
import { Link } from 'react-router-dom';

function Home() {
  const { name, setName } = useContext(GreetContext);
  return (
    <div className="home-container w-full pt-20 gap-8  h-screen bg-blue-300 flex items-center flex-col">
      <h1 className="text-3xl">Welcome To Ocean Friends🌊</h1>
      <h1 className="text-xl">Enter Your Name to Get Started</h1>
      <div className="bottom-container flex ">
        <input
          className="border-2 p-1 outline-none border-black "
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Link to="/greet" className="bg-black text-white px-4 rounded-lg p-2">
        Submit
      </Link>
    </div>
  );
}
export default Home;
