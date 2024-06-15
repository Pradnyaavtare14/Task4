// import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Blue background section */}
      <div className="bg-customGray flex justify-center items-center min-h-[450px] sm:min-h-[450px] relative" style={{ backgroundColor: "#1e3a8a" }}>
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl mt-10" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
            Service Business <span className="underline">Management</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold mt-2" style={{ color: "#ffff" }}>
            Software You Can Count On
          </h1>
          <p className="text-base sm:text-lg mt-7" style={{ color: "#4860a2" }}>
            Organize Your Business And Optimize Your Schedule With A Single <br className="hidden sm:block"/>
            Business Management Software. Accept Online Bookings And Payments, <br className="hidden sm:block"/>
            Manage Teams And Customers, Increase Client Retention And Grow Your <br className="hidden sm:block"/>
            Business With Saosin.
          </p>
          <button className=" text-white py-2 px-4  hover:bg-blue-700">
            <span className="text-sm hover:text-blue-500">Book a Demo</span>
          </button>
        </div>
      </div>

      {/* Rectangle section */}
      <div className="flex justify-center items-center -mt-8 sm:-mt-12 relative">
        <div className="w-[90vw] sm:w-[80vw] h-[50vh] bg-gray-200 flex justify-center items-center">
          {/* Add any additional content for the rectangle here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
