import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 text-gray-700">

            {/* FULL WIDTH BLACK BACKGROUND */}
            <div className="w-full bg-black py-10">

                {/* CENTERED CONTENT WITH max-w-7xl */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">

                    <h2 className="text-2xl md:text-3xl font-extrabold text-center lg:text-left leading-snug">
                        STAY UP TO DATE ABOUT <br className="hidden md:block" />
                        OUR LATEST OFFERS
                    </h2>

                    <div className="w-full max-w-md flex flex-col gap-3">
                        <div className="bg-white rounded-full flex items-center px-4 h-12 w-full">
                            <span className="text-gray-400 mr-3 text-lg">✉</span>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full outline-none text-gray-800 placeholder-gray-500"
                            />
                        </div>

                        <button className="h-12 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                            Subscribe to Newsletter
                        </button>
                    </div>

                </div>
            </div>

            {/* FOOTER MAIN */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">

                {/* Brand */}
                <div>
                    <h3 className="font-extrabold text-xl mb-4">SHOP.CO</h3>
                    <p className="text-gray-600 text-sm mb-5 max-w-xs">
                        We have clothes that suit your style and which you're proud to wear. From women to men.
                    </p>
                    <div className="flex items-center gap-4 text-xl text-gray-600">
                        <FaTwitter className="cursor-pointer hover:text-black" />
                        <FaFacebookF className="cursor-pointer hover:text-black" />
                        <FaInstagram className="cursor-pointer hover:text-black" />
                        <FaPinterestP className="cursor-pointer hover:text-black" />
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold mb-4 text-gray-900">COMPANY</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-black cursor-pointer">About</li>
                        <li className="hover:text-black cursor-pointer">Features</li>
                        <li className="hover:text-black cursor-pointer">Works</li>
                        <li className="hover:text-black cursor-pointer">Career</li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h4 className="font-semibold mb-4 text-gray-900">HELP</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-black cursor-pointer">Customer Support</li>
                        <li className="hover:text-black cursor-pointer">Delivery Details</li>
                        <li className="hover:text-black cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-black cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                {/* FAQ */}
                <div>
                    <h4 className="font-semibold mb-4 text-gray-900">FAQ</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-black cursor-pointer">Account</li>
                        <li className="hover:text-black cursor-pointer">Manage Deliveries</li>
                        <li className="hover:text-black cursor-pointer">Orders</li>
                        <li className="hover:text-black cursor-pointer">Payments</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-semibold mb-4 text-gray-900">RESOURCES</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-black cursor-pointer">Free eBooks</li>
                        <li className="hover:text-black cursor-pointer">Development Tutorial</li>
                        <li className="hover:text-black cursor-pointer">How to - Blog</li>
                        <li className="hover:text-black cursor-pointer">Youtube Playlist</li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t w-full">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-600">

                    <p>Shop.co © 2000–2023, All Rights Reserved</p>

                    <div className="flex items-center gap-3 mt-4 lg:mt-0">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Apple_Pay_logo.svg" alt="Apple Pay" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg" alt="Google Pay" className="h-6" />
                    </div>

                </div>
            </div>

        </footer>
    );
}
