import { useState } from "react";
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'

export default function ProductPage() {
    const [color, setColor] = useState("olive");
    const [size, setSize] = useState("Large");
    const [quantity, setQuantity] = useState(1);

    const colors = [
        { id: "olive", class: "bg-[#5A5A34]" },
        { id: "green", class: "bg-[#2F4632]" },
        { id: "navy", class: "bg-[#222B45]" },
    ];

    const sizes = ["Small", "Medium", "Large", "X-Large"];

    return (
        <div className="w-full px-4 md:px-10 py-10 max-w-7xl mx-auto mt-12">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
                Home / Shop / Men / <span className="text-black font-medium">T-shirts</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left :: Images */}
                <div className="grid grid-cols-4 gap-4">
                    {/* Thumbnail column */}
                    <div className="flex flex-col space-y-4 col-span-1">
                        <img src={product1}
                            className="w-full rounded-lg border cursor-pointer" alt="" />
                        <img src={product2}
                            className="w-full rounded-lg border cursor-pointer" alt="" />
                        <img src={product3}
                            className="w-full rounded-lg border cursor-pointer" alt="" />
                    </div>

                    {/* Main Image */}
                    <div className="col-span-3">
                        <img
                            src={product1}
                            className="w-full rounded-xl"
                            alt="Product"
                        />
                    </div>
                </div>

                {/* Right :: Product Info */}
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        ONE LIFE GRAPHIC T-SHIRT
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center text-yellow-400 mt-2">
                        ★★★★☆
                        <span className="text-black text-sm ml-2">4.5/5</span>
                    </div>

                    {/* Price */}
                    <div className="mt-4 flex items-center space-x-3">
                        <span className="text-3xl font-bold">$260</span>
                        <span className="line-through text-gray-400">$300</span>
                        <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full text-sm">
                            -40%
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-gray-600 max-w-md">
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft
                        and breathable fabric, it offers superior comfort and style.
                    </p>

                    {/* Colors */}
                    <div className="mt-6">
                        <h3 className="mb-2 font-semibold">Select Colors</h3>
                        <div className="flex space-x-3">
                            {colors.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setColor(c.id)}
                                    className={`w-8 h-8 rounded-full border-2 ${color === c.id ? "border-black" : "border-transparent"
                                        } ${c.class}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="mt-6">
                        <h3 className="mb-2 font-semibold">Choose Size</h3>
                        <div className="flex flex-wrap gap-3">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`px-4 py-2 rounded-full border ${size === s
                                        ? "bg-black text-white border-black"
                                        : "text-gray-700 border-gray-300"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity + Add to Cart */}
                    <div className="mt-6 flex items-center space-x-4">
                        <div className="flex items-center border rounded-full px-4 py-2">
                            <button
                                className="text-xl"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            >
                                -
                            </button>
                            <span className="px-4 text-lg">{quantity}</span>
                            <button
                                className="text-xl"
                                onClick={() => setQuantity((q) => q + 1)}
                            >
                                +
                            </button>
                        </div>

                        <button className="flex-1 bg-black text-white py-3 rounded-full text-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
