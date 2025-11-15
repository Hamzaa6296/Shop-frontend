import React from "react";
import { motion } from "framer-motion";
import Heroimage from "../images/Heroimage.png";
import vector from "../images/vector.png"

const HeroSection = () => {
    return (
        <section className="w-full bg-[#f2f0f1] py-1 md:py-10 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        FIND CLOTHES <br />
                        THAT MATCHES <br />
                        <span className="text-black">YOUR STYLE</span>
                    </h1>

                    <p className="text-gray-600 mt-5 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of
                        style.
                    </p>

                    <button className="mt-6 bg-black text-white py-3 px-10 rounded-full text-sm hover:bg-gray-800 transition cursor-pointer">
                        Shop Now
                    </button>

                    {/* Stats Section */}
                    <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto md:mx-0">
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900">200+</h3>
                            <p className="text-gray-600 text-sm">International Brands</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900">2,000+</h3>
                            <p className="text-gray-600 text-sm">High-Quality Products</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900">30,000+</h3>
                            <p className="text-gray-600 text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={Heroimage}
                        alt="Fashion Models"
                        className="w-full max-w-md md:max-w-lg object-contain relative"
                    />
                    <img src={vector} 
                        alt="star"
                        className="h-22 w-22 absolute ml-120 mt-20" />
                    <img src={vector} 
                        alt="star"
                        className="h-12 w-12 absolute mr-130 mt-65" />
                </div>
            </div>

            {/* Brand Logos with Motion */}
            <div className="relative bg-black w-full overflow-hidden">
                <motion.div
                    className="overflow-hidden w-full bg-black py-6 md:py-8"
                >
                    <motion.div
                        className="flex whitespace-nowrap text-white md:text-3xl sm:text-lg font-semibold"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,   // adjust speed
                            ease: "linear",
                        }}
                    >
                        {/* First Copy */}
                        <span className="flex gap-24 px-10">
                            
                        </span>

                        {/* Second Copy (for seamless loop) */}
                        <span className="flex gap-24 px-10">
                            VERSACE ZARA GUCCI PRADA CALVIN KLEIN
                        </span>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
