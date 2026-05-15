
import Image from "next/image";
import { FiMinus, FiRefreshCw, FiShield, FiTruck, FiPlus, FiShoppingCart, FiZap } from "react-icons/fi";
import { getDetails } from "@/Services/products.services";
import Features from "@/components/Products/Features/features";
import Informations from "@/components/Products/Information/Informations";
import Thumbnails from "@/components/Products/Thumbnails/Thumbnails";
import ProductView from "@/components/Products/Thumbnails/ProductView/ProductView";
import { getProducts } from "@/Services/products.services";
export const metadata = {
  title: "productDetails",
};

export default async function ProductDetails(props) {
    const { productId } = await props.params;
    const product = await getDetails(productId);

    // This Option Can Be Get Product Based On Slug Cause (SEO) Put Some Products samely slugger 
    // 1. get all products
    // const products = await getProducts();

    // 2. find product by slug
    // const product = products.find(
    //     (item) => item.slug === slug
    // );
    // console.log(slug);
    // const matchedProduct = products.find(
    //     (item) => item.slug === slug
    // );
    // // 3. handle not found
    // if (!matchedProduct) {
    //     return <div>Product not found</div>;
    // }

    // console.log(product);

    return (
        <>

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* ================= LEFT: IMAGES ================= */}
                <div className="lg:col-span-4 space-y-4 md:col-span-1">

                    {/* Main Image This Is Image Cover Product  */}
                    <ProductView product={product} />
                </div>

                {/* ================= RIGHT: DETAILS ================= */}
                <div className="lg:col-span-8 space-y-5 md:col-span-1">

                    {/* Category + Brand */}
                    <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                            {product.category?.name}
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                            {product.brand?.name}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-semibold">{product.title}</h1>

                    {/* Rating */}
                    <div className="text-sm text-gray-500">
                        ⭐ {product.ratingsAverage} ({product.ratingsQuantity} reviews)
                    </div>

                    {/* PRICE */}
                    <div className="text-2xl font-bold">
                        {product.price} EGP
                    </div>

                    {/* STOCK */}
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-green-600 text-sm font-medium">
                            In Stock
                        </span>
                    </div>

                    <hr />

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm leading-6">
                        {product.description}
                    </p>

                    <hr />

                    {/* ================= QUANTITY ROW ================= */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Quantity</span>

                        <div className="flex items-center border rounded-md overflow-hidden">
                            <button className="px-3 py-2 hover:bg-gray-100">
                                <FiMinus />
                            </button>

                            <span className="px-4">1</span>

                            <button className="px-3 py-2 hover:bg-gray-100">
                                <FiPlus />
                            </button>
                        </div>

                        <span className="text-xs text-gray-500">
                            {product.quantity} available
                        </span>
                    </div>

                    {/* TOTAL PRICE */}
                    <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Total Price</span>
                        <span className="text-green-600 font-bold text-lg">
                            {product.price}.00 EGP
                        </span>
                    </div>

                    {/* ================= CTA ================= */}
                    <div className="flex gap-3 pt-2">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
                            <FiShoppingCart /> Add to Cart
                        </button>

                        <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center gap-2">
                            <FiZap /> Buy Now
                        </button>
                    </div>

                    {/* WISHLIST */}
                    <button className="w-full border py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                        Add to Wishlist
                    </button>
                    <Features />
                </div>




            </div>
            <Informations product={product} />
        </>
    );
}