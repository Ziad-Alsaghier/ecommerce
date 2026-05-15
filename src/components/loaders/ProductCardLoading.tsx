import { Suspense } from "react";
import ProductCardLoading from "@/components/loaders/ProductCardLoading";
import Products from "@/components/Products/Products";

export default function ProductsPage() {
    return (
        <Suspense
            fallback={
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardLoading key={i} />
                    ))}
                </div>
            }
        >
            <Products />
        </Suspense>
    );
}