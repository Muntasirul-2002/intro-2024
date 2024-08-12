import React from "react";

const Stat = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between space-y-4 md:space-y-0 md:flex-nowrap">
        <div className="flex-1 min-w-[150px] bg-black shadow-md rounded-lg p-4">
          <div className="stat">
            <div className="stat-figure text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Solution Design</div>
            <div className="stat-value">50+</div>
            
          </div>
        </div>

        <div className="flex-1 min-w-[150px] bg-black shadow-md rounded-lg p-4">
          <div className="stat">
            <div className="stat-figure text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Collaboration</div>
            <div className="stat-value">30+</div>
            
          </div>
        </div>

        <div className="flex-1 min-w-[150px] bg-black shadow-md rounded-lg p-4">
          <div className="stat">
            <div className="stat-figure text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Projects Delivered</div>
            <div className="stat-value">10+</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
