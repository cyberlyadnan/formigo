'use client'
import { useState } from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md md:max-w-2xl">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-blue-600">
          {isLogin ? "Login here" : "Create Account"}
        </h2>
        <p className="text-center text-gray-500">
          {isLogin
            ? "Welcome back! You've been missed!"
            : "Create an account to explore all the existing jobs"}
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          <div className="">
            {isLogin ? (
              <a href="#" className="text-sm mb-4 text-blue-600 hover:underline">
                Forgot your password?
              </a>
            ) : null}
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {isLogin ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>

        {/* Social Login */}
        <div className="flex items-center justify-center space-x-4 mt-4">
          <p className="text-sm text-gray-500">Or continue with</p>
          <div className="flex space-x-2">
            <button className="p-2 text-blue-600 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaGoogle size={18} />
            </button>
            <button className="p-2 text-blue-600 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaFacebook size={18} />
            </button>
            <button className="p-2 text-blue-600 bg-gray-100 rounded-full hover:bg-gray-200">
              <FaApple size={18} />
            </button>
          </div>
        </div>

        {/* Toggle between Login and Signup */}
        <div className="text-center">
          {isLogin ? (
            <p className="text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:underline"
              >
                Register
              </button>
            </p>
          ) : (
            <p className="text-sm">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
