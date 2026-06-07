import { Brands } from "@/Interfaces/Brands.interface";
import { Product } from "../Interfaces/product.interface";
import React from "react";

export async function getBrands(): Promise<Brands[]> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/brands",
      {
        method: "GET",
        cache: "force-cache",
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch brands");
    }
    const brands = await response.json();

    // console.log("SERVER DATA:", brands);

    return await brands.data;
  } catch (error) {
    console.error("Get Brands error:", error);
    return []; // fallback so UI doesn't crash
  }
}
// Get brand details by brand ID
export async function getBrandDetails(brandId: string): Promise<Brands> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/` + brandId,
      {
        method: "GET",
        cache: "force-cache",
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch brand details");
    }
    const brand = await response.json();

    // console.log("SERVER DATA:", brand);
    return await brand.data;
  } catch (error) {
    console.error("Get Brand Details error:", error);
    return null; // fallback so UI doesn't crash
  }
}



//  Get products by brand ID
