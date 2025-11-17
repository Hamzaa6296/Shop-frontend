import image11 from '../images/image11.png'
import image12 from '../images/image12.png'
import image13 from '../images/image13.png'
import image14 from '../images/image14.png'



const categories = [
  { key: "casual", label: "Casual", image: image11, span: 1 },
  { key: "formal", label: "Formal", image: image12, span: 2 },
  { key: "party", label: "Party", image: image13, span: 2 },
  { key: "gym", label: "Gym", image: image14, span: 1 },
];

export default function BrowseByDressStyle() {
  return (
    <section className="max-w-6xl mx-auto p-6 md:p-8 bg-gray-100 rounded-2xl">
      <h2 className="text-center text-2xl md:text-4xl font-extrabold tracking-wide mb-8">
        BROWSE BY DRESS STYLE
      </h2>

      {/* Grid: on small screens stack (grid-cols-1), on md use 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((item) => {
          // Use md:col-span-2 for large ones and md:col-span-1 for small ones
          const spanClass = item.span === 2 ? "md:col-span-2" : "md:col-span-1";

          return (
            <article
              key={item.key}
              className={`${spanClass} relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer`}
            >
              {/* Image - object-cover ensures nice crop */}
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-56 md:h-64 lg:h-72 object-cover"
                loading="lazy"
              />

              {/* Label (top-left) */}
              <span className="absolute top-4 left-4 text-lg md:text-xl font-semibold text-black">
                {item.label}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
