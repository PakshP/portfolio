import React, { useState, useEffect, useCallback } from "react";

const Home = () => {
    const words = ["Developer", "Learner", "Prototyper"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const updateWordIndex = useCallback(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
    }, [words.length]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsAnimating(true);
            setTimeout(updateWordIndex, 800);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [updateWordIndex]);



    return (
        <div id="home" className="content flex flex-col items-center justify-center h-screen text-white">
            <div className="flex flex-col items-start">
                <div className="flex items-center">
                    <h1 className="text-9xl font-semibold mb-2">PAKSH PATEL</h1>
                </div>
                <div className="flex items-center">
                    <span className="border-t-2 border-[#b4bcc2] translate-x-[-7px] translate-y-[-5px] w-[378px] mx-4"></span>
                    <span className="text-6xl font-semibold text-[#b4bcc2] mr-2 translate-y-[-13px]">+</span>
                    <div className="relative overflow-hidden w-[310px]">
                        <div
                            className={`bg-[#094889] z-10 w-[500px] h-[70px] absolute left-0 transition-transform duration-500 ease-in-out ${
                                isAnimating ? "translate-x-0" : "-translate-x-[500px]"
                            }`}
                        ></div>
                        <h2 className={`text-6xl font-semibold h-20 transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>{words[currentWordIndex]}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
