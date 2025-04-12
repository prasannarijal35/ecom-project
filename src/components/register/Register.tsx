// "use client";
// import Image from "next/image";
// import registerImage from "@/assets/images/others/registerImage.png";
// import logo from "@/assets/images/logos/logo2.png";
// import Link from "next/link";
// import { useRegister } from "@/hooks";

// export default function Register() {
//   const {
//     fullName,
//     email,
//     password,
//     confirmPassword,
//     loading,
//     fullNameError,
//     emailError,
//     passwordError,
//     confirmPasswordError,
//     handleChange,
//     handleSubmit,
//     validateFullName,
//     validateEmail,
//     validatePassword,
//     validateConfirmPassword,
//   } = useRegister();
//   return (
//     <section
//       id="login-page"
//       className="w-full py-6 bg-gradient-to-r from-purple-500 to-cyan-500"
//     >
//       <div className="container flex justify-center items-start">
//         <div className="flex gap-4 bg-white rounded-lg shadow-lg opacity-70 w-full">
//           <div className="w-1/2 hidden md:block">
//             <div className="w-full ">
//               <Image
//                 src={registerImage}
//                 alt="Login Image"
//                 height={3000}
//                 width={3000}
//                 quality={100}
//                 className="object-cover object-center h-[540px] w-auto rounded-tl-md rounded-bl-md"
//               />
//             </div>
//           </div>
//           <div className="md:w-1/2 w-full px-6 py-3">
//             <div className="w-full flex justify-center items-center">
//               <Image
//                 src={logo}
//                 alt="logo"
//                 height={100}
//                 width={100}
//                 quality={100}
//                 className="object-cover object-center h-20 w-auto"
//               />
//             </div>
//             <h2 className="text-2xl font-semibold text-gray-600 mb-2 text-center">
//               Signup
//             </h2>
//             <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block text-sm font-semibold text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   onChange={handleChange}
//                   value={fullName}
//                   onBlur={validateFullName}
//                   onFocus={validateFullName}
//                   placeholder="Enter Full Name"
//                   className={`w-full p-2 border  rounded-md ${
//                     fullNameError ? "border-red-600" : "border-gray-300"
//                   } `}
//                 />
//                 {fullNameError && (
//                   <p className="text-red-600 italic">{fullNameError}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-700"
//                 >
//                   Email Adress
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                   onBlur={validateEmail}
//                   onFocus={validateEmail}
//                   placeholder="Enter email"
//                   className={`w-full p-2 border  rounded-md ${
//                     emailError ? "border-red-600" : "border-gray-300"
//                   } `}
//                 />
//                 {emailError && (
//                   <p className="text-red-600 italic">{emailError}</p>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-semibold text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   onChange={handleChange}
//                   value={password}
//                   onBlur={validatePassword}
//                   onFocus={validatePassword}
//                   name="password"
//                   placeholder="Enter password"
//                   className={`w-full p-2 border  rounded-md ${
//                     passwordError ? "border-red-600" : "border-gray-300"
//                   } `}
//                 />
//                 {passwordError && (
//                   <p className="text-red-600 italic">{passwordError}</p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-semibold text-gray-700"
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={handleChange}
//                   onBlur={validateConfirmPassword}
//                   onFocus={validateConfirmPassword}
//                   placeholder="Confirm your Password"
//                   className={`w-full p-2 border  rounded-md ${
//                     confirmPasswordError ? "border-red-600" : "border-gray-300"
//                   } `}
//                 />
//                 {confirmPasswordError && (
//                   <p className="text-red-600 italic">{confirmPasswordError}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary focus:outline-none"
//               >
//                 {loading ? "Loading..." : "Register Now"}
//               </button>
//               <div>
//                 Already have a account ?&nbsp;
//                 <Link
//                   href={"/login"}
//                   className="text-secondary hover:text-red-800"
//                 >
//                   &nbsp;Login
//                 </Link>
//               </div>
//             </form>
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
import { useRegister } from "@/hooks";
import avatar from "@/assets/images/others/avatar1.png";

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
      id="register"
      className=" flex items-center justify-center bg-gray-100 xl:py-10 h-full w-full p-10 "
    >
      <div className="bg-white shadow-lg rounded-3xl flex xl:max-w-[900px] md:max-w-[600px] sm:max-w-[400]">
        <div className="flex-1 hidden md:block flex-col justify-center items-center pt-10 px-10 bg-gradient-to-br from-primary to-secondary text-white rounded-3xl">
          <div className="h-1/3 ">
            <h1 className="text-3xl font-bold mb-4">
              Join us. Create an account to explore the latest trends.
            </h1>
            <p className="text-lg">
              Sign up now for exclusive collections and personalized style picks
            </p>
          </div>
          <div className="h-2/3 flex justify-end items-end">
            <Image
              src={avatar}
              alt="avatar"
              height={1000}
              width={1000}
              quality={100}
              className="w-auto xl:h-96 md:h-auto md:p-0"
            />
          </div>
        </div>
        <div className="flex-1 px-10 py-4 h-full">
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
          <h2 className="text-3xl font-bold text-center mb-4">Sign in Now</h2>

          <form className="space-y-4 " method="POST" onSubmit={handleSubmit}>
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
                <p className="text-red-500 text-xs mt-1 italic">
                  {fullNameError}
                </p>
              )}
            </div>
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
                <p className="text-red-500 text-xs mt-1 italic">
                  {confirmPasswordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-all duration-200"
            >
              {loading ? "Loading...." : "Register Now"}
            </button>
          </form>

          <div className="my-6 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <p className="text-sm text-gray-500">Or Login with</p>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <div className="flex  space-x-4">
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
            Already have a account?
            <a href={"/login"} className="text-secondary hover:underline">
              &nbsp; Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
