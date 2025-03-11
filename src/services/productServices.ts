import myAxios from "./apiServices";

interface Params {
  page?: number;
  size?: number;
  search?: string;
  slug?: string;
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
  const response = await myAxios.get("/products/user/all", { params });
  return response.data;
};

export const getDiscountedProducts = async () => {
  const response = await myAxios.get("/products/discounted/all");
  return response.data;
};

export const getProductsByCategory = async ({
  page = 1,
  size = 10,
  search = "",
  slug,
}: Params) => {
  const params: Params = {
    page: page,
    size: size,
  };
  if (search) params.search = search;
  const response = await myAxios.get(`/products/category/${slug}`, {
    params,
  });
  return response.data;
};

export const getSingleProduct = async (slug: string) => {
  const response = await myAxios.get(`/products/${slug}/user`, {
    isAuthRoute: false,
  });
  return response.data;
};
