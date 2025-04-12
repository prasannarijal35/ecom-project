import myAxios from "./apiServices";

export const getAllCarts = async () => {
  const response = await myAxios.get("/cart");
  return response.data;
};

export const createCart = async ({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) => {
  const response = await myAxios.post("/cart", { productId, quantity });
  return response.data;
};

export const deleteCartItem = async (itemId: number) => {
  const response = await myAxios.delete(`/cart/${itemId}`);
  return response.data;
};
