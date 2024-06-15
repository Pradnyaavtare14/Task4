import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md" style={{ backgroundColor: "#1e3a8a" }}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Saosin.</div>
        
        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-blue-500">Men </a>
          
          <a href="#" className="text-white hover:text-blue-500">Women</a>
          <a href="#" className="text-white hover:text-blue-500">Accessories</a>
          <a href="#" className="text-white hover:text-blue-500">About</a>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className=" text-white py-2 px-4 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-blue-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-black hover:text-blue-500">Men</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-blue-500">Women</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-blue-500">Accessories</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-blue-500">About</a>
          <button className=" w-full text-start text-black py-2 px-4 rounded hover:text-blue-700 ">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
