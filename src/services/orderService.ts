import myAxios from "./apiServices";

export const getAllOrders = async () => {
  const response = await myAxios.get("/orders");
  return response.data;
};

export const placeOrder = async () => {
  const response = await myAxios.post("/orders");
  return response.data;
};

export const createKhaltiPayment = async ({ orderId }: { orderId: number }) => {
  const response = await myAxios.post(`/orders/${orderId}/payment`);
  return response.data;
};
