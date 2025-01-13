import { ProductData } from "@/data/products";
export const getSingleProduct = async (slug: string) => {
  const data = ProductData.find((product) => product.slug === slug);
  let response;
  if (!data) {
    response = {
      status: 404,
      message: "Product not found",
      error: [{ slug: "Product not found" }],
    };
    throw response;
  }
  response = {
    status: 200,
    message: "product found",
    data,
  };
  return response;
};
