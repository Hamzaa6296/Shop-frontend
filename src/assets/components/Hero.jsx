import React from "react";
import { motion } from "framer-motion";
import Heroimage from "../images/Heroimage.png";
import vector from "../images/vector.png";

//brand logo images
import brand1 from "../images/versace.png";
import brand2 from "../images/zara.png";
import brand3 from "../images/gucci.png";
import brand4 from "../images/parada.png";
import brand5 from "../images/calvin.png";

const HeroSection = () => {
    const fadeUpEqual = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
        },
    };

    return (
        <section className="w-full bg-[#f2f0f1] py-8 px-6 overflow-hidden mt-19">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* LEFT CONTENT */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    variants={fadeUpEqual}
                    initial="hidden"
                    animate="show"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                        FIND CLOTHES <br />
                        THAT MATCHES <br />
                        <span className="text-black">YOUR STYLE</span>
                    </h1>

                    <p className="text-gray-600 mt-5 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of
                        style.
                    </p>

                    <button className="mt-6 bg-black text-white py-3.5 px-15 rounded-full text-sm hover:bg-gray-800 transition cursor-pointer">
                        Shop Now
                    </button>

                    {/* Stats */}
                    <div className=" mt-10 grid grid-cols-2 md:grid-cols-3 max-w-xl mx-auto md:mx-0 text-center gap-6 md:gap-0">

                        <div className="md:pr-5 md:border-r md:border-gray-300">
                            <h3 className="text-4xl font-semibold text-gray-900">200+</h3>
                            <p className="text-gray-600 text-sm">International Brands</p>
                        </div>

                        <div className="md:px-5 md:border-r md:border-gray-300">
                            <h3 className="text-4xl font-semibold text-gray-900">2,000+</h3>
                            <p className="text-gray-600 text-sm">High-Quality Products</p>
                        </div>

                        <div className="col-span-2 md:col-span-1 md:pl-5 flex flex-col items-center">
                            <h3 className="text-4xl font-semibold text-gray-900">30,000+</h3>
                            <p className="text-gray-600 text-sm">Happy Customers</p>
                        </div>

                    </div>



                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="flex-1 flex justify-center relative"
                    variants={fadeUpEqual}
                    initial="hidden"
                    animate="show"
                >
                    <img
                        src={Heroimage}
                        alt="Fashion Models"
                        className="w-full max-w-lg md:max-w-lg object-contain relative"
                    />

                    <img
                        src={vector}
                        alt="star"
                        className="absolute w-20 h-20 -right-8 top-10 md:right-20 md:top-20"
                    />
                    <img
                        src={vector}
                        alt="star"
                        className="absolute w-12 h-12 left-4 bottom-10 md:left-20 md:bottom-20 mb-50"
                    />
                </motion.div>
            </div>

            {/* BRAND LOGO MARQUEE (full width) */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black overflow-hidden py-6">
                <motion.div
                    className="flex gap-20 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                >
                    {[brand1, brand2, brand3, brand4, brand5].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="brand logo"
                            className="h-10 w-50 md:h-15 md:w-50 object-contain"
                        />
                    ))}

                    {[brand1, brand2, brand3, brand4, brand5].map((logo, index) => (
                        <img
                            key={`dup-${index}`}
                            src={logo}
                            alt="brand logo"
                            className="h-10 w-50 md:h-15 md:w-50 object-contain"
                        />
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default HeroSection;
