export async function getCategories() {
  try {
    const response = await fetch(
      process.env.NEXTAUTH_BASE_URL + "/api/v1/categories",
      {
        method: "GET",
        cache: "force-cache",
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();

    return await categories.data;
  } catch (error) {
    console.error("getCategories error:", error);
    return []; // fallback so UI doesn't crash
  }
}

// export async function categoryDetails(category): Category {
//   //  Logic Code
// }
