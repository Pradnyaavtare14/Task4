// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  lg:grid-cols-5 ">
        
        {/* Logo and Subscribe */}
        <div className="ml-16">
          <h2 className="text-2xl font-bold mb-4">Saosin.</h2>
          <p className="text-sm">Drop us your email to stay in the loop.</p>
          <input
            type="email"
            placeholder="Drop us your email to stay in the loop."
            className="mt-2 p-2 rounded text-white"
          />
          <button className=" text-white p-2 rounded mt-2">Subscribe Now</button>
        </div>
        
        
        
        {/* Navigation Links */}
        <div className="col-span-3 flex justify-end space-x-16">
          <div>
            <h3 className="text-xl font-bold mb-4">Why Saosin</h3>
            <ul>
              <li><a href="#about" className="hover:underline">About us</a></li>
              <li><a href="#financing" className="hover:underline">Financing Options</a></li>
              <li><a href="#courses" className="hover:underline">All courses</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul>
              <li><a href="#twitter" className="hover:underline">Twitter</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#youtube" className="hover:underline">Youtube</a></li>
              <li><a href="#tech" className="hover:underline">Tech Talent</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Whos It For</h3>
            <ul>
              <li><a href="#terms" className="hover:underline">Terms of Use</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#about" className="hover:underline">About us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Blog</h3>
            <ul>
              <li><a href="#terms" className="hover:underline">Career Service</a></li>
              <li><a href="#faq" className="hover:underline">Student Testmonials</a></li>
              <li><a href="#about" className="hover:underline">SwitchUp</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  lg:grid-cols-5 ">
        
        {/* Logo and Subscribe */}
        <div className="ml-16 mt-10">
        <h3 className="text-xl font-bold mb-4">Read Our Reviews</h3>
          <p className=" items-center">
            <span className="mr-2">Google</span> 
            <span className="text-yellow-400">★ 4.9</span>
          </p>
          <p >
            <span className="mr-2">Trustpilot</span>
            <span className="text-yellow-400">★ 4.7</span>
          </p> 
        </div>

           {/* Navigation Links */}
        <div className="col-span-3 flex justify-end space-x-20">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul>
              <li><a href="#about" className="hover:underline">Course Report</a></li>
              <li><a href="#financing" className="hover:underline">Career Service</a></li>
              <li><a href="#courses" className="hover:underline">Financing Options</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul>
              <li><a href="#twitter" className="hover:underline">Press</a></li>
              <li><a href="#testimonials" className="hover:underline">Facebook</a></li>
              <li><a href="#youtube" className="hover:underline">Instagram</a></li>
              <li><a href="#tech" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul>
              <li><a href="#terms" className="hover:underline">Work with Us</a></li>
              <li><a href="#faq" className="hover:underline">Contact Us</a></li>
              <li><a href="#about" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Pricing </h3>
            <ul>
              <li><a href="#terms" className="hover:underline">Ionhack Enterprise</a></li>
              <li><a href="#faq" className="hover:underline">Social Impact</a></li>
              <li><a href="#about" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        </div>
        </div>
      
      {/* Social Media and Legal Links */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 border-t border-blue-700 pt-4">
        <div className="flex space-x-4 ml-20">
        <p>Made With <span className="text-red-500">❤️</span> by SlabDsgn.</p>
           </div>
        <div className="mt-4 md:mt-0 mr-20">
        
          <p>© Saosin 2022 - All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
