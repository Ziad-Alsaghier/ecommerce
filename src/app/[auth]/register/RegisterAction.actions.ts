export default async function RegisterAction(values) {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    console.log(response);

    if (response.ok) {
      return { success: true, data };
    }

    return { success: false, data };
  } catch (error) {
    console.error("Some Error In Registration:", error);

    return { success: false, data: null };
  }
}
