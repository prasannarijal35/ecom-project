import { CategoryForm } from "@/types/admin/category";
import myAxios from "../apiServices";

interface Params {
  page?: number;
  size?: number;
  search?: string;
}

export const getAllCategories = async ({
  page = 1,
  size = 10,
  search = "",
}: Params) => {
  const params: Params = {
    page: page,
    size: size,
  };
  if (search) params.search = search;
  const response = await myAxios.get("/categories", { params });
  return response.data;
};

export const addCategory = async (data: CategoryForm) => {
  const response = await myAxios.post("/categories", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateCategory = async (data: CategoryForm, id: number) => {
  const response = await myAxios.put(`/categories/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
