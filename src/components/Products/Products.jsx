
import { getProducts } from "@/Services/products.services";
import { FiArrowRight, FiEye, FiHeart, FiRefreshCw } from "react-icons/fi";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ProductCardLoading from "@/components/loaders/ProductCardLoading";
import Rating from "@/components/ui/Rating";
import AddToCartButton from "@/components/Products/AddToCartButton";
export default async function Products() {
  const products = await getProducts();

  return (


    // Title 
    <div>

      <div className="w-full px-4 md:px-10 lg:px-20 mb-10">
        <div className="px-4 md:px-20 lg:px- flex items-center justify-between w-full mb-10">
          {/* Left Side */}
          <div className="flex items-center gap-3 relative ">
            {/* <span className="w-1 h-8 bg-green-500 rounded-full"></span> */}

            <h2 className="relative text-3xl font-bold  before:content-[''] before:absolute before:left-[-20] before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-green-500 before:from-green-400 before:to-green-700">
              Featured  <span className="text-green-500">Products</span>
            </h2>
          </div>

          {/* Right Side */}
          <button className="flex items-center gap-2 text-green-500 font-medium hover:gap-3 transition-all">
            View All products
            <span>
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className="w-full px-4 md:px-10 lg:px-20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
              <div key={product._id}>
                <div className="group  w-full flex flex-col p-3 border border-gray-100 rounded-xl bg-white transition-all hover:shadow-lg hover:border-green-200">
                  <Link href={'product/details/' + product.id} className="group  w-full flex flex-col p-3 hover:border  rounded-xl bg-white transition-all hover:shadow-lg hover:border-green-200">
                    <div className="w-full relative  aspect-square mb-4 overflow-hidden rounded-lg bg-whit">
                      {/* Using With Socail */}
                      <div className="absolute right-0 top-0 p-1 flex flex-col items-center space-y-2">

                        <Button className="w-9 h-9 cursor-pointer flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-red-500 hover:text-white transition">
                          <FiHeart />
                        </Button>

                        <Button className="w-9 h-9 cursor-pointer flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-blue-500 hover:text-white transition">
                          <FiRefreshCw />
                        </Button>

                        <Button href={"product/details/" + product.id} className="w-9 h-9 cursor-pointer flex items-center justify-center rounded-full bg-white text-gray-600 hover:bg-green-500 hover:text-white transition">
                          <FiEye />
                        </Button>

                      </div>

                      <Image
                        src={product?.imageCover}
                        alt={product?.name ?? 'Produyct' + product?._id}
                        width={300}
                        height={300}
                        loading="lazy"
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>

                  </Link>
                  <div className="my-4 text-sm text-gray-600 leading-6">
                    {product?.description
                      ?.trim()
                      ?.split(/\s+/)
                      ?.slice(0, 5)
                      ?.join(" ") + "..."}
                  </div>
                  {/* Rating And Reviews ⭐ */}
                  <div className="flex items-center  mb-2 my-4">
                    <Rating value={product.ratingsAverage} />
                    <span className="text-xs ms-3 text-gray-500">
                      {product.ratingsAverage}  <span>( {product?.ratingsQuantity} )</span>

                    </span>


                  </div>
                  <div className="mt-3 flex items-center justify-between">

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      {/* Original Price */}

                      <span className="text-l  font-bold text-green-600">
                        {new Intl.NumberFormat("en-US").format(product?.price)} EGP
                      </span>

                      {/* fake old price Cause Dont Put In Response Discount  */}
                      <span className="text-sm text-gray-400 line-through">
                        {new Intl.NumberFormat("en-US").format((product?.price * 20) / 100)} EGP
                      </span>
                    </div>

                    {/* Offer badge */}
                    <span className="text-xs rounded-full">
                      <AddToCartButton product={product} />
                    </span>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div >

  );
}