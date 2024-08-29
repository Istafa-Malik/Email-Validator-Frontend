// import "./Header.css";

export const Header = () => {
  return (

    
<section className="h-[100vh] relative overflow-x-hidden bg-gradient-to-r from-blue-100 to-blue-200 py-32 px-4 sm:px-6 lg:px-8">
<div className="w-fit container mx-auto  text-center relative z-10">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Elevate Your Email Verification
  </h1>
  <p className="text-lg md:text-xl text-gray-700 mb-8">
    Experience the most accurate and reliable email verification service on the market. 
    <span className="block font-semibold">First 2,000 validations are on us.</span>
  </p>
  <div className="flex justify-center  mb-12">
    <form className="w-full flex justify-center  flex-col md:flex-row gap-4 bg-white shadow-lg rounded-lg p-4 md:p-6">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
      />
      <button
        type="submit"
        className="w-[29%] px-6 py-2 my-auto bg-yellow-400 text-white rounded-md font-semibold hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
      >
        Verify Now
      </button>
      
    </form>
  </div>
  <p className="text-gray-500 text-sm">
    <span className="font-semibold">Free 100 credits</span> for new accounts. No credit card required.
  </p>
</div>
<div className="absolute inset-0 overflow-hidden">
  <svg
    className="absolute bottom-0 left-0 w-full h-auto text-blue-200"
    viewBox="0 0 1440 320"
    fill="currentColor"
  >
    <path
      fill-opacity="0.6"
      d="M0,128L30,122.7C60,117,120,107,180,122.7C240,139,300,181,360,176C420,171,480,121,540,101.3C600,81,660,91,720,101.3C780,112,840,128,900,138.7C960,149,1020,153,1080,160C1140,167,1200,177,1260,186.7C1320,196,1380,204,1410,208L1440,212L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
    />
  </svg>
</div>
<div className="absolute bottom-8 w-full text-center text-gray-500 animate-bounce">
  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
  <p>Scroll Down</p>
</div>
</section>

    // <div className="header-container">
    //   <img
    //     src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
    //     className="header-background"
    //     alt=""
    //   />
    //   <div className="header-overlay">
    //     <div className="header-content">
    //       <div className="header-text-section">
    //         <h2 className="header-title">
    //           The quick, brown fox <br className="hidden md:block" />
    //           jumps over a <span className="header-highlight">lazy dog</span>
    //         </h2>
    //         <p className="header-description">
    //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //           accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
    //         </p>
    //         <a href="/" aria-label="" className="header-link">
    //           Learn more
    //           <svg
    //             className="header-link-icon"
    //             fill="currentColor"
    //             viewBox="0 0 12 12"
    //           >
    //             <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
// import React, { useState } from 'react';



// export  const Header = () => {
//   const [email, setEmail] = useState('');
//   const [isValid, setIsValid] = useState(null);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);

//     // Basic email validation
//     if (value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     alert(`Submitted email: ${email}`);
//   };

//   return (
//     <section className="relative bg-gray-100 py-20 overflow-hidden">
//       <div className="absolute inset-0">
       
//       </div>
//       <div className="relative container mx-auto px-4 text-center z-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Email Verifier</h1>
//         <p className="text-lg md:text-xl text-gray-600 mb-8">
//           We verified <span className="font-semibold text-blue-600">over 90 million emails</span> in the last year. Let us clean your list too.
//         </p>
        
//         <div className="flex justify-center items-center mb-10">
//           <form className="w-full max-w-lg bg-white text-gray-800 rounded-lg shadow-lg p-8" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-semibold mb-4">Try Snov.io email checker for free</h2>
//             <p className="text-sm mb-6">Check email addresses and reduce your bounce rate. Our 7-tier email verifier ensures accuracy.</p>
//             <div className="relative mb-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={handleChange}
//                 placeholder="Enter your email address"
//                 className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${isValid === false ? 'border-red-500' : 'border-gray-300'}`}
//               />
//               {isValid === false && (
//                 <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
//             >
//               Verify
//             </button>
//           </form>
//         </div>
//         <p className="text-sm text-gray-600 mt-4">Free 100 credits for new accounts. No credit card required.</p>
//       </div>
//     </section>
//   );
// };

