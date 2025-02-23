import { login } from "@/services/authServices";
import { Login } from "@/types/auth";
import { setAccessToken, setUser } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { email, password } = formData;

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError(null);
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (email && !emailError && password && !passwordError) {
      try {
        setLoading(true);
        const response = await login(email, password);

        const token = response.data.token;
        await setAccessToken(token);

        const user = response.data.user;
        await setUser(user);

        toast.success("Login successful");
        router.push("/");
      } catch (error: any) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          console.log(error.response.data);
          if (error.response.data.errors) {
            const errors = error.response.data.errors;

            errors.map((error: any) => {
              const key = Object.keys(error)[0];
              const value = error[key];

              if (key === "email") {
                setEmailError(value);
              }

              if (key === "password") {
                setPasswordError(value);
              }
            });
          }
          toast.error(error.response.data.message, {
            id: "toast",
          });
          return;
        }
        toast.error("Something went wrong", {
          id: "toast",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    email,
    password,
    loading,
    emailError,
    passwordError,
    handleChange,
    handleSubmit,
    validateEmail,
    validatePassword,
  };
}
