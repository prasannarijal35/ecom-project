import { register } from "@/services/authServices";
import { Register } from "@/types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useRegister() {
  const router = useRouter();
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
      setFullNameError("Full name is required");
    } else {
      if (fullName.length < 3) {
        setFullNameError("Full name must be at least 3 characters");
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
        setPasswordError("Password must be at least 6 characters");
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
        await register(fullName, email, password, confirmPassword);
        toast.success("Account created successfully");
        router.push("/login");
      } catch (error: any) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;

            errors.map((error: any) => {
              const key = Object.keys(error)[0];
              const value = error[key];

              if (key === "fullName") {
                setFullNameError(value);
              }

              if (key === "email") {
                setEmailError(value);
              }

              if (key === "password") {
                setPasswordError(value);
              }

              if (key === "confirmPassword") {
                setConfirmPasswordError(value);
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
