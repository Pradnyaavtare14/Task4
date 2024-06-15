// src/components/Features.js
// import React from 'react';

const Features = () => {
    return (
        <div>
            {/* First Section */}
            <div className="flex flex-col lg:flex-row justify-evenly mt-16 mx-4 gap-7">
                <div className="relative lg:w-1/3">
                    <div className="relative z-10 bg-gray-200 rounded-xl h-80 w-full text-white p-2">
                    </div>
                </div>
                <div className="flex flex-col justify-center bg-white h-auto w-full lg:w-2/3 text-black p-8 m-4">
                    <div className="items-center text-4xl font-bold">
                        <h1 style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Automated Appointment</h1>
                        <h1 style={{ color: "#1e3a8a" }}>Booking And Payment Processing
</h1>
                    </div>
                    <p className='mt-5 text-lg' style={{ color: "#4860a2" }}>
                        Encourage Early Booking With The Personalized Booking Environment Created By Trafft. Our Appointment Booking Software Easily Integrates With Your Website, Making It A Stress-free Online Booking Experience For Your Client.
                    </p>
                    <a href="#" className='mt-5 underline text-xl' style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Request a Demo</a>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row justify-evenly mt-16 mx-4 gap-7">
                <div className="flex flex-col justify-center bg-white h-auto w-full lg:w-2/3 text-black p-8 m-4">
                    <div className="items-center text-4xl font-bold">
                        <h1 style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Appointment Reminders</h1>
                        <h1 style={{ color: "#1e3a8a" }}>for All Participants</h1>
                    </div>
                    <p className='mt-5 text-lg' style={{ color: "#4860a2" }}>
                        No More Forgotten Appointments. Our Scheduling Software Will Automatically Send Email And SMS Notifications So That Both The Staff And The Customers Receive Appointment Reminders And Updates.
                    </p>
                    <a href="#" className='mt-5 underline text-xl' style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Request a Demo</a>
                </div>
                <div className="relative lg:w-1/3">
                    <div className="relative z-10 bg-gray-200 rounded-xl h-80 w-full text-white p-2">
                    </div>
                </div>
            </div>

            {/* Blue Section */}
            <div className="bg-customGray flex justify-center items-center min-h-[450px] sm:min-h-[450px] relative mb-16 mt-16" style={{ backgroundColor: "#1e3a8a" }}>
                <div className="text-start px-4">
                    <p className="text-2xl font-semibold mt-2 ml-16 mr-16" style={{ color: "#ffff" }}>
                        Perfectly-Designed Booking Software For You And Your Client. Saosin Simplifies The Appointment Scheduling Process On All Ends And Speeds Up The Booking Process By More Than 75%. Automate Repetitive Business Processes And Enjoy Your Newly Acquired Free Time Based On Saosin Data.
                    </p>
                    <p className="text-base sm:text-sm mt-8  ml-16 mr-16" style={{ color: "#4860a2" }}>
                        Organize Your Business And Optimize Your Schedule With A Single Business Management Software. Accept Online Bookings And Payments, Manage Teams And Customers, Increase Client Retention And Grow Your Business With Saosin.
                    </p>
                    <button className="text-white py-2 px-4 hover:bg-blue-700 mt-4 ml-16">
                        <span className="text-sm hover:text-blue-500">Book a Demo</span>
                    </button>
                </div>
            </div>

            {/* Three Boxes Section */}
            <div className="flex flex-col lg:flex-row justify-evenly mx-4 mb-16 gap-7">
                <div className="flex flex-col items-center space-y-6 p-4 w-full lg:w-1/3">
                    <div className="bg-white border border-blue-100 p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
                            Appointment Reminders
                        </h2>
                        <p className="text-xs mt-2">
                            No more forgotten appointments. Saosin management software helps you increase sales by providing important business reports and dashboards to help you track the performance of your business through vital KPIs and statistics.
                        </p>
                    </div>
                    <div className="bg-white border border-blue-100 p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
                            Flexible Scheduling
                        </h2>
                    </div>
                    <div className="bg-white border border-blue-100 p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
                            Customer Management
                        </h2>
                    </div>
                </div>
                <div className="relative lg:w-1/3">
                    <div className="relative z-10 bg-gray-200 rounded-xl h-80 w-full text-white p-2">
                    </div>
                </div>
            </div>

            {/* Gray Rectangle Section */}
            <div className="mx-4 mb-16">
                <div className="text-start text-3xl ml-32 font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
                    <h1>Design The Perfect</h1>
                    <h1 style={{ color: "#1e3a8a" }}>Books Experience Software</h1>
                </div>
                <p className="mt-5 text-xs text-start ml-32" style={{ color: "#4860a2" }}>
                    No More Forgotten Appointments. Our Scheduling Software Will Automatically Send Email And SMS Notifications <br />So That Both The Staff And The Customers Receive Appointment Reminders And Updates.
                </p>
                <div className="flex justify-center items-center mt-12 mb-16">
                    <div className="w-[90vw] sm:w-[80vw] h-[50vh] bg-gray-200 flex justify-center items-center rounded-3xl">
                        {/* Add any additional content for the rectangle here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;



// src/components/Features.js
// import React from 'react';

// const Features = () => {
//     return (
//         <div>
//             <div className="flex justify-evenly mt-16 mx-4 gap-7">
//                 <div className="relative">

//                     <div className="relative z-10 bg-gray-200 rounded-xl h-80 w-80 text-white p-2 ml-32">
//                     </div>
//                 </div>
//                 <div className="flex flex-col justify-center bg-white h-96 w-full sm:w-1/2 lg:w-2/3 xl:w-3/4 text-black p-8 m-4">
//                     <div className=" items-center text-4xl  font-bold">
//                         <h1 style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Appoinment Reminders</h1>
//                         <h1 style={{ color: "#1e3a8a" }}>for All Participants</h1>
//                     </div>
//                     <p className='mt-5 text-lg' style={{ color: "#4860a2" }}>
//                         Encourage Early Booking With The Personalized Booking Environment <br /> Created By Trafft. Our Appointment Booking Software Easily Integrates <br /> With Your Website, Making It A Stress-free Online Booking Experience For Your Client.
//                     </p>
//                     <a href="#" className='mt-5 underline text-xl' style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Request a Demo</a>
//                 </div>
//             </div>
//             {/* div next  */}
//             <div className="flex justify-evenly  mx-4">
//                 <div className="flex flex-col justify-center bg-white h-96 w-full sm:w-1/2 lg:w-2/3 xl:w-3/4 text-black p-8 m-4 ml-24">
//                     <div className=" items-center  text-4xl font-bold">
//                         <h1 style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Appoinment Reminders</h1>
//                         <h1 style={{ color: "#1e3a8a" }}>for All Participants</h1>
//                     </div>
//                     <p className='mt-5 text-lg' style={{ color: "#4860a2" }}>
//                         No More Forgotten Appointments. Our Scheduling Software Will Automatically Send <br />Email And SMS Notifications So That Both The Staff And The Customers Receive <br /> Appointment Reminders And Updates.

//                     </p>
//                     <a href="#" className='mt-5 underline text-xl' style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Request a Demo</a>
//                 </div>

//                 <div className="relative">

//                     <div className="relative z-10 bg-gray-200 rounded-xl h-80 w-80 text-white p-2 mr-52">
//                     </div>
//                 </div>
//             </div>
//             {/* blue screen with the full screen */}
//             <div className="bg-customGray flex justify-center items-center min-h-[450px] sm:min-h-[450px] relative mb-16" style={{ backgroundColor: "#1e3a8a" }}>
//                 <div className="text-start px-4">
//                     <p className="text-2xl  font-semibold mt-2" style={{ color: "#ffff" }}>Perfectly-Designed Booking Software For You And Your <br />
//                         Client. Saosin Simplifies The Appointment Scheduling <br />
//                         Process On All Ends And Speeds Up The Booking <br />
//                         Process By More Than 75%. Automate Repetitive <br />
//                         Business Processes And Enjoy Your Newly Acquired <br />
//                         Free Time Based On Saosin Data.</p>
//                     <p className="text-base sm:text-xs mt-8" style={{ color: "#4860a2" }}>
//                         Organize Your Business And Optimize Your Schedule With A Single <br className="hidden sm:block" />
//                         Business Management Software. Accept Online Bookings And Payments, <br className="hidden sm:block" />
//                         Manage Teams And Customers, Increase Client Retention And Grow Your <br className="hidden sm:block" />
//                         Business With Saosin.
//                     </p>
//                     <button className=" text-white py-2 px-4  hover:bg-blue-700">
//                         <span className="text-sm hover:text-blue-500">Book a Demo</span>
//                     </button>
//                 </div>
//             </div>
//             {/* blue ke necche wala */}
//             <div className="flex justify-evenly  mx-4 mb-16">
//             <div className="flex flex-col items-center space-y-6 p-4">
//       <div className="bg-white border border-blue-100 p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
//           Appointment Reminders
//         </h2>
//         <p className="text-xs mt-2"> No more forgotten appointments. Saosin management software helps
// you increase sales by providing important business reports and
// dashboards to help you track the performance of your business through
// vital KPIs and statistics.</p>
        
//       </div>
//       <div className="bg-white border border-blue-100 p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
//           Flexible Scheduling
//         </h2>
        
        
//       </div>
//       <div className="bg-white border border-blue-100 p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold" style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>
//           Customer Management
//         </h2>
        
//       </div>
//     </div>

//                 <div className="relative">

//                     <div className="relative z-10 bg-gray-200 rounded-xl h-80 w-80 text-white p-2 ">
//                     </div>
//                 </div>
//             </div>
//             {/* gray color rectangle */}

//             <div>
//             <div className=" items-center  text-3xl font-bold ml-36">
//                         <h1 style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Appoinment Reminders</h1>
//                         <h1 style={{ color: "#1e3a8a" }}>for All Participants</h1>
//                     </div>
//                     <p className='mt-5 text-xs  ml-36' style={{ color: "#4860a2" }}>
//                         No More Forgotten Appointments. Our Scheduling Software Will Automatically Send <br />Email And SMS Notifications So That Both The Staff And The Customers Receive <br /> Appointment Reminders And Updates.
//                     </p>
//                     <div className="flex justify-center items-center mt-12 mb-16 ">
//         <div className="w-[90vw] sm:w-[80vw] h-[50vh] bg-gray-200 flex justify-center items-center rounded-3xl">
//           {/* Add any additional content for the rectangle here */}
//         </div>
//       </div>
//             </div>
//         </div>
//     );
// };

// export default Features;