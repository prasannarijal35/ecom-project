/* eslint-disable @typescript-eslint/no-unused-vars */
export const addData = async (
  productTitle: string,
  price: number,
  discount: number,
  image: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = {
    status: 200,
    message: "New product added succesfully",
  };
  return response;
};
