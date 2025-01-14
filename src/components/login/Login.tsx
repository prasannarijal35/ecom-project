// "use client";
// import Image from "next/image";
// // import background from "@/assets/images/others/background.jpg";
// import loginImage from "@/assets/images/others/loginimage.jpeg";
// import logo from "@/assets/images/logos/logo2.png";
// import Link from "next/link";
// import { useLogin } from "@/hooks";

// export default function Login() {
//   const {
//     email,
//     password,
//     loading,
//     emailError,
//     passwordError,
//     handleChange,
//     handleSubmit,
//     validateEmail,
//     validatePassword,
//   } = useLogin();
//   return (
//     <section id="login-page" className="w-full h-screen">
//       <div className="w-full h-full z-0 py-20 bg-gradient-to-r from-purple-500 to-cyan-300">
//         {/* <Image
//           src={background}
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         /> */}

//         <div className="container flex justify-center items-start h-full">
//           <div className="flex gap-4 bg-white rounded-lg shadow-lg opacity-70">
//             <div className="w-1/2 hidden md:block h-full">
//               <div className="w-full h-full">
//                 <Image
//                   src={loginImage}
//                   alt="Login Image"
//                   height={3000}
//                   width={3000}
//                   quality={100}
//                   className="object-cover object-center h-fulll w-full rounded-tl-md rounded-bl-md"
//                 />
//               </div>
//             </div>
//             <div className="md:w-1/2 p-4">
//               <div className="w-full flex justify-center items-center">
//                 <Image
//                   src={logo}
//                   alt="logo"
//                   height={100}
//                   width={100}
//                   quality={100}
//                   className="object-cover object-center h-16 w-auto"
//                 />
//               </div>
//               <h2 className="text-2xl font-semibold mb-2 text-center">
//                 Login to Your Account
//               </h2>
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onBlur={validateEmail}
//                     onFocus={validateEmail}
//                     onChange={handleChange}
//                     placeholder="Enter email"
//                     className={`w-full p-2 border  rounded-md ${
//                       emailError ? "border-red-600" : "border-gray-300"
//                     }`}
//                   />
//                   {emailError && (
//                     <p className="text-red-500 text-xs mt-1 italic">
//                       {emailError}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-semibold text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={password}
//                     onChange={handleChange}
//                     onBlur={validatePassword}
//                     onFocus={validatePassword}
//                     placeholder="Enter password"
//                     className={`w-full p-2 border  rounded-md ${
//                       passwordError ? "border-red-600" : "border-gray-300"
//                     }`}
//                   />
//                   {passwordError && (
//                     <p className="text-red-500 text-xs mt-1 italic">
//                       {passwordError}
//                     </p>
//                   )}
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="rememberMe"
//                       name="rememberMe"
//                       className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
//                       onChange={handleChange}
//                     />
//                     <label
//                       htmlFor="rememberMe"
//                       className="ml-2 text-sm text-gray-600"
//                     >
//                       Remember Me
//                     </label>
//                   </div>
//                   <Link
//                     href="/forgot-password"
//                     className="text-sm text-primary"
//                   >
//                     Forgot Password?
//                   </Link>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary focus:outline-none"
//                 >
//                   {loading ? "loading..." : "Login"}
//                 </button>
//                 <div>
//                   Need a account ?&nbsp;
//                   <Link
//                     href={"/register"}
//                     className="text-secondary hover:text-red-800"
//                   >
//                     &nbsp;Register
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "@/assets/images/logos/logo2.png";
import { useLogin } from "@/hooks";
import Link from "next/link";

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
    <section
      id="login"
      className=" flex items-center justify-center bg-gray-100 xl:py-10 h-full w-full p-10 "
    >
      <div className="bg-white shadow-lg rounded-3xl flex xl:max-w-[900px] md:max-w-[600px] sm:max-w-[400]">
        <div className="flex-1 hidden md:block flex-col justify-center items-center p-10 bg-gradient-to-br from-primary to-secondary text-white rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">
            Simplify management with our dashboard.
          </h1>
          <p className="text-lg">
            Simplify your e-commerce management with our user-friendly admin
            dashboard.
          </p>
        </div>
        <div className="flex-1 px-10 py-4">
          <div className="flex justify-center items-center">
            <Image
              src={logo}
              alt="logo"
              height={100}
              width={100}
              quality={100}
              className="h-14 w-auto"
            />
          </div>
          <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
          <p className="text-center mb-4 text-gray-600 text-sm ">
            Please login to your account.
          </p>
          <form className="space-y-4 " method="POST" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onBlur={validateEmail}
                onFocus={validateEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${
                  passwordError ? "border-red-600" : "border-gray-300"
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1 italic">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
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
                placeholder="Enter your password"
                className={`w-full mt-1 p-2 border rounded-md focus:outline-none  ${
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
              <Link href="/forgot-password" className="text-sm text-primary">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-all duration-200"
            >
              {loading ? "Loading...." : "Login"}
            </button>
          </form>

          <div className="my-6 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <p className="text-sm text-gray-500">Or Login with</p>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center justify-center gap-2 w-full p-2 border border-gray-300 rounded-md">
              <FcGoogle />
              Google
            </button>
            <button className="flex items-center justify-center w-full gap-2 p-2 border border-gray-300 rounded-md">
              <FaFacebook className="bg-primary text-white rounded-full" />
              Facebook
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href={"/register"} className="text-secondary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
