import { Product } from "../Interfaces/product.interface";
import React from "react";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      process.env.NEXTAUTH_BASE_URL + "/api/v1/products",
      {
        method: "GET",
        cache: "force-cache",
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();

    // console.log("SERVER DATA:", products);

    return await products.data;
  } catch (error) {
    console.error("Get Products error:", error);
    return []; // fallback so UI doesn't crash
  }
}

export async function getDetails(productId: string): Promise<Product[]> {
  try {
    const response = await fetch(
      process.env.NEXTAUTH_BASE_URL + "/api/v1/products/" + productId,
      {
        method: "GET",
        cache: "force-cache",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();

    // console.log("SERVER DATA:", products);

    return await products.data;
  } catch (error) {
    console.error("Get Products error:", error);
    return []; // fallback so UI doesn't crash
  }
}
