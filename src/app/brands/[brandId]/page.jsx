import Products from "@/components/Products/Products";
import { getBrandDetails, getProductsByBrand } from "@/Services/brands.services";
import Image from "next/image";

export default async function Page(props) {
    const params = await props.params;
    const brand = await getBrandDetails(params.brandId);
    console.log(brand);
    
        // Next Step Get Products Based On Brand

    return (
        <>

            <section className="w-full bg-gradient-to-r mb-6 from-emerald-500 to-green-400 py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
                        <span className="hover:text-white cursor-pointer transition">Home</span>
                        <span>/</span>
                        <span className="font-semibold text-white">{brand?.name}</span>
                    </nav>
                    <div className="flex items-center gap-6">
                        {/* Icon Container */}
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-inner border border-white/30">
                            <Image
                                src={brand?.image}
                                alt={brand?.name}
                                width={400}
                                height={400}
                                className="w-full h-full object-contain transition-transform duration-300  group-hover:scale-125"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}