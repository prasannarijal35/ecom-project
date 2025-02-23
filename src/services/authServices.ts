import myAxios from "./apiServices";

export const login = async (email: string, password: string) => {
  const response = await myAxios.post(
    "/auth/login",
    {
      email,
      password,
    },
    {
      isAuthRoute: false,
    }
  );

  return response.data;
};

export const register = async (
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  const response = await myAxios.post(
    "/auth/register",
    {
      fullName,
      email,
      password,
      confirmPassword,
    },
    {
      isAuthRoute: false,
    }
  );

  return response.data;
};
