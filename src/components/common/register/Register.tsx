"use client";
import Image from "next/image";
import registerImage from "@/assets/images/others/registerImage.png";
import logo from "@/assets/images/logos/logo2.png";
import Link from "next/link";
import { useRegister } from "@/hooks";

export default function Register() {
  const {
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
  } = useRegister();
  return (
    <section
      id="login-page"
      className="w-full h-screen py-20 bg-gradient-to-r from-primary to-secondary"
    >
      <div className="container flex justify-center items-start">
        <div className="flex gap-4 bg-white rounded-lg shadow-lg opacity-80 w-full">
          <div className="w-1/2 hidden md:block">
            <div className="w-full ">
              <Image
                src={registerImage}
                alt="Login Image"
                height={3000}
                width={3000}
                quality={100}
                className="object-cover object-center h-[540px] w-auto rounded-tl-md rounded-bl-md"
              />
            </div>
          </div>
          <div className="md:w-1/2 px-6 py-3">
            <div className="w-full flex justify-center items-center">
              <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                quality={100}
                className="object-cover object-center h-20 w-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2 text-center">
              Signup
            </h2>
            <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  value={fullName}
                  onBlur={validateFullName}
                  onFocus={validateFullName}
                  placeholder="Enter Full Name"
                  className={`w-full p-2 border  rounded-md ${
                    fullNameError ? "border-red-600" : "border-gray-300"
                  } `}
                />
                {fullNameError && (
                  <p className="text-red-600 italic">{fullNameError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Adress
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={validateEmail}
                  onFocus={validateEmail}
                  placeholder="Enter email"
                  className={`w-full p-2 border  rounded-md ${
                    emailError ? "border-red-600" : "border-gray-300"
                  } `}
                />
                {emailError && (
                  <p className="text-red-600 italic">{emailError}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={password}
                  onBlur={validatePassword}
                  onFocus={validatePassword}
                  name="password"
                  placeholder="Enter password"
                  className={`w-full p-2 border  rounded-md ${
                    passwordError ? "border-red-600" : "border-gray-300"
                  } `}
                />
                {passwordError && (
                  <p className="text-red-600 italic">{passwordError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  onBlur={validateConfirmPassword}
                  onFocus={validateConfirmPassword}
                  placeholder="Confirm your Password"
                  className={`w-full p-2 border  rounded-md ${
                    confirmPasswordError ? "border-red-600" : "border-gray-300"
                  } `}
                />
                {confirmPasswordError && (
                  <p className="text-red-600 italic">{confirmPasswordError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary focus:outline-none"
              >
                {loading ? "Loading..." : "Register Now"}
              </button>
              <div>
                Already have a account ?&nbsp;
                <Link
                  href={"/login"}
                  className="text-secondary hover:text-red-800"
                >
                  &nbsp;Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
