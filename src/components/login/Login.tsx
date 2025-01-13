"use client";
import Image from "next/image";
// import background from "@/assets/images/others/background.jpg";
import loginImage from "@/assets/images/others/loginimage.jpeg";
import logo from "@/assets/images/logos/logo2.png";
import Link from "next/link";
import { useLogin } from "@/hooks";

export default function Login() {
  const {
    email,
    password,
    loading,
    emailError,
    passwordError,
    handleChange,
    handleSubmit,
    validateEmail,
    validatePassword,
  } = useLogin();
  return (
    <section id="login-page" className="w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 py-20 bg-gradient-to-r from-primary to-secondary">
        {/* <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

        <div className="container relative z-10 flex justify-center items-start h-full">
          <div className="flex gap-4 bg-white rounded-lg shadow-lg opacity-80">
            <div className="w-1/2 hidden md:block">
              <div className="w-full ">
                <Image
                  src={loginImage}
                  alt="Login Image"
                  height={3000}
                  width={3000}
                  quality={100}
                  className="object-cover object-center h-[400px] w-auto rounded-tl-md rounded-bl-md"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={logo}
                  alt="logo"
                  height={100}
                  width={100}
                  quality={100}
                  className="object-cover object-center h-16 w-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Login to Your Account
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onBlur={validateEmail}
                    onFocus={validateEmail}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className={`w-full p-2 border  rounded-md ${
                      emailError ? "border-red-600" : "border-gray-300"
                    }`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1 italic">
                      {emailError}
                    </p>
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
                    name="password"
                    value={password}
                    onChange={handleChange}
                    onBlur={validatePassword}
                    onFocus={validatePassword}
                    placeholder="Enter password"
                    className={`w-full p-2 border  rounded-md ${
                      passwordError ? "border-red-600" : "border-gray-300"
                    }`}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-xs mt-1 italic">
                      {passwordError}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary focus:outline-none"
                >
                  {loading ? "loading..." : "Login"}
                </button>
                <div>
                  Need a account ?&nbsp;
                  <Link
                    href={"/register"}
                    className="text-secondary hover:text-red-800"
                  >
                    &nbsp;Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
