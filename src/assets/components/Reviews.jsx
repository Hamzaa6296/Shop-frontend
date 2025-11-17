import { motion } from "framer-motion";
import { MdOutlineVerified } from "react-icons/md";

const reviews = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations."`,
  },
  {
    name: "Alex K.",
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is not only diverse but also on-point with the latest trends."`,
  },
  {
    name: "Monica R.",
    text: `"Absolutely love this store! Top-quality clothes and super fast delivery. Highly recommended!"`,
  },
];

export default function HappyCustomers() {
  // Duplicate array for seamless infinite scrolling
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <section className="w-full py-12 overflow-hidden relative">
      {/* Title Row */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-4xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
      </div>

      {/* Blur edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-20"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-20"></div>

      {/* Infinite Scrolling Row */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
        >
          {scrollingReviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[380px] bg-white shadow rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">★</span>
                  ))}
              </div>

              <h4 className="font-semibold text-lg flex items-center gap-2">
                {review.name}
                <span className="text-green-500 text-xl"><MdOutlineVerified /></span>
              </h4>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
