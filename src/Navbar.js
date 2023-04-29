import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-around shadow">
      <Link className="text-gray-600 font-semibold hover:text-red-500" to="/">Home</Link>
      <Link className="text-gray-600 font-semibold hover:text-red-500" to="/about">About</Link>
      <Link className="text-gray-600 font-semibold hover:text-red-500" to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
