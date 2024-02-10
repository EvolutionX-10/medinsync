import React from "react";

function Landing4() {
    return (
        <div className="bg-white flex w-screen flex-col gap-12 justify-start  px-40">
            <p className="text-6xl font-bold text-black w-full text-left mt-20">
                Hospitals Drowning in Paper Data Chaos:
            </p>

            <p className="text-5xl font-bold text-black w-full text-left leading-normal">
                <span className="text-[#FF5555]">Lost </span>records, <span className="text-[#F49AB1]">tedious</span> entry, 
                locked-away patient data, 
                and <span className="text-[#BBDE8E]">fragmented</span> communication
            </p>

            <p className="text-5xl font-medium text-black w-full text-left">
                These hospital headaches lead to:
            </p>

            <p className="text-6xl font-bold text-[#FF9B85] w-full text-left">
                Delayed diagnoses & treatment
            </p>

            <p className="text-6xl font-bold text-[#FF5555] w-full text-left">
                Medication errors
            </p>

            <p className="text-6xl font-bold text-[#F4DB85] w-full text-left">
                Frustrated patients
            </p>
            
            <p className="text-6xl font-bold text-[#F4C09A] w-full text-left">
                Wasted resources
            </p>
        </div>
      
    );
}

export default Landing4;
