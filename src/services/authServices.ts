/* eslint-disable @typescript-eslint/no-unused-vars */
export const login = async (email: string, password: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = {
    status: 200,
    message: "Login successful",
  };
  return response;
};

export const register = async (
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = {
    status: 200,
    message: "Register Successful",
  };
  return response;
};
