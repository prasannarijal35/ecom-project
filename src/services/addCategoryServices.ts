/* eslint-disable @typescript-eslint/no-unused-vars */
export const addCategory = async (categoryName: string, image: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = {
    status: 200,
    message: "New category added successfully",
  };
  return response;
};

export const updateCategory = async (categoryName: string, image: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = {
    status: 200,
    message: "Category updated successfully",
  };
  return response;
};
