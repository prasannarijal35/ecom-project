import Image from "next/image";
import background from "@/assets/images/others/background.jpg";
import loginImage from "@/assets/images/others/loginimage.jpeg";

export default function Login() {
  return (
    <section id="login-page" className="w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="flex bg-white p-6 rounded-lg shadow-lg opacity-90">
          {/* Left Column - Login Form */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Login Here</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                />
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
                  placeholder="Enter password"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-primary text-white font-semibold rounded-md hover:bg-secondary focus:outline-none"
              >
                Login
              </button>
              <div>
                need a account ? <span className="text-primary"> Signup</span>
              </div>
            </form>
          </div>

          <div className="w-1/2 ">
            <div className="w-full">
              <Image
                src={loginImage}
                alt="Login Image"
                height={3000}
                width={3000}
                quality={100}
                className="object-contain h-[400px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
