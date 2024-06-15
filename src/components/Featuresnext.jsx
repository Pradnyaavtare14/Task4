// import React from 'react'

const Featuresnext = () => {
  return (
    <div>
        <div className="text-center text-3xl  font-bold" >
                    <h1 style={{ color: "#3b82f6", fontFamily: "Times New Roman" }}>Frequently Asked</h1>
                    <h1 style={{ color: "#1e3a8a" }}>Questions</h1>
                    <a className="text-sm text-center underline" href="#" style={{ color: "#3b82f6"}}>View All FAQ</a>
                </div>
                
          <div className="flex flex-col items-center gap-4 p-4">
      {['How Does Saosian Work ?', 'What Are The Benefits Of Using Saosin?', 'What Industries Commonly use Saosian?', 'How is Pricing Typically For Saosian Products', 'Can Saosin Be Customized To Meet My Specific Needs?'].map((feature, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-blue-100 border border-blue-200 p-6 w-full  text-black rounded-lg shadow-md"
        >
          <span className="text-lg font-medium">{feature}</span>
          <span className="text-xl font-bold text-blue-500">+</span>
        </div>
      ))}
    </div>
    <div className="bg-customGray flex justify-center items-center min-h-[450px] sm:min-h-[450px] relative mb-16 mt-16" style={{ backgroundColor: "#3b82f6" }}>
                <div className="text-center px-4">
                <h2 className="text-4xl font-bold" style={{ color: "#ffff", fontFamily: "Times New Roman" }}>
                            Appointment Reminders <span style={{fontFamily:"sans-serif"}}> Starts Here, </span>
                        </h2>
                    <p className="text-base sm:text-sm mt-8  ml-16 mr-16" style={{ color: "#4860a2" }}>
                        Organize Your Business And Optimize Your Schedule With A Single Business Management Software. Accept Online Bookings And Payments, Manage Teams And Customers, Increase Client Retention And Grow Your Business With Saosin.
                    </p>
                    <button className="text-white py-2 px-4 hover:bg-blue-700 mt-4 ml-16">
                        <span className="text-sm hover:text-blue-500">Book a Demo</span>
                    </button>
                </div>
            </div>
    </div>
  
  )
}

export default Featuresnext