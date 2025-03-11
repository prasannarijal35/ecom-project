import myAxios from "./apiServices";

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
  const response = await myAxios.get("/categories/user/all", { params });
  return response.data;
};

export const getSingleCategory = async (slug: string) => {
  const response = await myAxios.get(`/categories/${slug}/user`, {
    isAuthRoute: false,
  });
  return response.data;
};
