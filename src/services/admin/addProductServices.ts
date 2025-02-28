import { ProductForm } from "@/types/product";
import myAxios from "../apiServices";

interface Params {
  page?: number;
  size?: number;
  search?: string;
}

export const getAllProducts = async ({
  page = 1,
  size = 10,
  search = "",
}: Params) => {
  const params: Params = {
    page: page,
    size: size,
  };
  if (search) params.search = search;
  const response = await myAxios.get("/products", { params });
  return response.data;
};

export const addProduct = async (data: ProductForm) => {
  const response = await myAxios.post("/products", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateProduct = async (data: ProductForm, id: number) => {
  const response = await myAxios.put(`/products/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
