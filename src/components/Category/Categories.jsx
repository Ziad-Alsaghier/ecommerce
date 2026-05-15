
import Image from "next/image";
import { getCategories } from "@/Services/categories.services";
import { FiArrowRight } from "react-icons/fi";

export default async function Categories() {
  const categories = await getCategories();
  return (


    // Title 
    <div>
      <div className="w-full px-4 md:px-10 lg:px-20 mb-10">
        <div className="px-4 md:px-20 lg:px- flex items-center justify-between w-full mb-10">
          {/* Left Side */}
          <div className="flex items-center gap-3 relative ">
            {/* <span className="w-1 h-8 bg-green-500 rounded-full"></span> */}

            <h2 className="relative text-3xl font-bold  before:content-[''] before:absolute before:left-[-20] before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-green-500 before:from-green-400 before:to-green-700">
              Shop By <span className="text-green-500">Category</span>
            </h2>
          </div>

          {/* Right Side */}
          <button className="flex items-center gap-2 text-green-500 font-medium hover:gap-3 transition-all">
            View All Categories
            <span>
              <FiArrowRight className="" />
            </span>
          </button>
        </div>

        <div className="w-full px-4 md:px-10 lg:px-20 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories?.map((cat) => (
              <div
                key={cat._id}
                className="flex flex-col items-center p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <div className="w-26 h-26 mb-4 overflow-hidden rounded-full border border-gray-50 bg-gray-50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >

  );
}