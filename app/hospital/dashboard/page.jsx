"use client";

import Navbar from "@/components/Navbar2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Link from "next/link";

function Page() {
    const currentDate = new Date();
    const Day = currentDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekString = days[Day];
    const date = currentDate.getDate();

    const [activeIndex, setActiveIndex] = useState(null);

    const togglePanel = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const sections = [
        { title: "Section 1", content: "Lorem ipsum..." },
        { title: "Section 2", content: "Lorem ipsum..." },
        { title: "Section 3", content: "Lorem ipsum..." },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-[#edf6f5] py-20">
                <div className="container flex flex-col lg:flex-row items-center justify-between lg:items-start mx-auto px-4 lg:px-20 mt-20">
                    <div className="text-center lg:text-left">
                        <p className="text-6xl font-bold">{dayOfWeekString}</p>
                        <p className="text-7xl font-semibold">{date}</p>
                    </div>
                    <div className="flex flex-col items-center gap-8 ml-10 lg:ml-0 mt-8 lg:mt-0">
                        <Link href="/dashboard/users/new"> 
                            <div className="button px-10 h-16 bg-[#66CDCC] flex justify-center items-center text-3xl font-semibold cursor-pointer">
                                <p>Register a New User</p>
                            </div>
                        </Link>
                        <div className="user-info w-72 bg-white h-40 rounded-3xl flex flex-col lg:flex-row items-center justify-around">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start lg:ml-4">
                                <p className="text-xl font-medium">Doctor's Name</p>
                                <p className="text-sm">Last Visited</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-20 lg:mt-0">
                        <div className="prescription-box w-[90vw] lg:w-[30rem] h-64 rounded-3xl border-[#797885] border-2 mr-10">
                            <p className="text-3xl font-medium text-center mt-3">Prescription</p>
                        </div>
                    </div>
                </div>
                <div className="records-container w-[80vw] mx-auto mt-20 lg:ml-48 ml-10">
                    <div className="flex items-center">
                        <p className="font-semibold px-1">Your Past Records</p>
                        <hr className="ml-4 w-7/12 h-3 border-black" />
                    </div>
                    {sections.map((section, index) => (
                        <div key={index} className="accordion-container mt-10">
                            <button
                                className={`text-left px-4 accordion-button ${activeIndex === index ? "active" : ""}`}
                                onClick={() => togglePanel(index)}
                            >
                                {section.title}
                            </button>
                            <div className={`accordion-panel ${activeIndex === index ? "active" : ""}`}>
                                <p>{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;
