import React from 'react';
import './Pricing.css'; // Import the CSS file

const pricingData = [
  { plan: '5,000,000 Credits', price: '$499', credits: '5,000,000 credits per verification', pricePerCredit: '$0.00014' },
  { plan: '1,000,000 Credits', price: '$149', credits: '1,000,000 credits per verification', pricePerCredit: '$0.00015' },
  { plan: '500,000 Credits', price: '$99', credits: '500,000 credits per verification', pricePerCredit: '$0.00020' },
  { plan: '200,000 Credits', price: '$49', credits: '200,000 credits per verification', pricePerCredit: '$0.00025' },
  { plan: '100,000 Credits', price: '$29', credits: '100,000 credits per verification', pricePerCredit: '$0.00029' },
  { plan: '50,000 Credits', price: '$19', credits: '50,000 credits per verification', pricePerCredit: '$0.00038' },
  { plan: '20,000 Credits', price: '$10', credits: '20,000 credits per verification', pricePerCredit: '$0.00050' },
  { plan: '10,000 Credits', price: '$5', credits: '10,000 credits per verification', pricePerCredit: '$0.00050' },
  { plan: 'Free Plan', price: '$0', credits: '10,000 credits per verification', pricePerCredit: '$0.00000' }
];

export const Pricing = () => {
  const handleButtonClick = (price) => {
    if (price === '$0') {
      // Redirect to validation page for free plan
      window.location.href = '/validation';
    } else {
      // Redirect to signup page for other plans
      window.location.href = '/signup';
    }
  };

  return (
    <div className="pricing-section border border-gray-300 rounded-lg p-6 mx-auto my-8 bg-white shadow-md">
      <div className="relative w-full h-full">
        <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Affordable</span>
              </span>{' '}
              for everyone
            </h2>
            
          </div>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pricingData.map((plan, index) => (
              <div key={index} className="p-8 bg-gray-900 rounded">
                <div className="mb-4 text-center">
                  <p className="text-xl font-medium tracking-wide text-white">
                    {plan.plan}
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      {plan.price}
                    </p>
                    <p className="text-lg text-gray-500">/ month</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-300">{plan.credits}</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3">
                      <svg
                        className="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-300">Price per credit: {plan.pricePerCredit}</p>
                  </li>
                </ul>
                {plan.price === '$0' ? (
                  <button
                    type="submit"
                    onClick={() => handleButtonClick(plan.price)}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Try Free
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() => handleButtonClick(plan.price)}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Get Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
