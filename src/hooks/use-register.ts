import { register } from "@/services/authServices";
import { Register } from "@/types/auth";
import { useState } from "react";

export default function useRegister() {
  const [formData, setFormData] = useState<Register>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { fullName, email, password, confirmPassword } = formData;

  const validateFullName = () => {
    if (!fullName) {
      setFullNameError("full name is required");
    } else {
      if (fullName.length < 3) {
        setFullNameError("Name must be greater than 3 letters");
      } else {
        setFullNameError(null);
      }
    }
  };
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
      if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters");
      } else {
        setPasswordError(null);
      }
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
    } else {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateFullName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (
      fullName &&
      !fullNameError &&
      email &&
      !emailError &&
      password &&
      !passwordError &&
      confirmPassword &&
      !confirmPasswordError
    ) {
      try {
        setLoading(true);
        const response = await register(
          fullName,
          email,
          password,
          confirmPassword
        );
        console.log(response);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return {
    fullName,
    email,
    password,
    confirmPassword,
    loading,
    fullNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    handleChange,
    handleSubmit,
    validateFullName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
  };
}
