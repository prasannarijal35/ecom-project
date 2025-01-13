import { login } from "@/services/authServices";
import { Login } from "@/types/auth";
import { useState } from "react";

export default function useLogin() {
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
        console.log(response);
      } catch (error: any) {
        // Handle errors
        console.log(error);
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
