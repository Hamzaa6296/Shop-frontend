import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

const NewArrivals = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "T-shirt with Tape Details",
      price: "$120",
      img: image1,
      rating: 4.5
    },
    {
      name: "Skinny Fit Jeans",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
      img: image2,
      rating: 3.5
    },
    {
      name: "Checkered Shirt",
      price: "$180",
      img: image3,
      rating: 4.5
    },
    {
      name: "Sleeve Striped T-shirt",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
      img: image4,
      rating: 4.5
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-wide mb-14">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100"
            >
              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => navigate("/product", { state: item })}
                className="bg-gray-100 h-60 rounded-xl flex items-center justify-center mb-4 cursor-pointer"
              >
                <img src={item.img} alt={item.name} className="h-full object-contain" />
              </div>

              <p className="text-gray-800 font-medium text-lg mb-2">{item.name}</p>

              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${i <= Math.round(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-gray-600 text-sm ml-1">{item.rating}/5</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-semibold text-xl text-gray-900">{item.price}</span>

                {item.oldPrice && (
                  <span className="text-gray-400 line-through">{item.oldPrice}</span>
                )}

                {item.discount && (
                  <span className="text-red-500 bg-red-100 px-2 py-0.5 text-xs rounded-full">
                    {item.discount}
                  </span>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NewArrivals;
