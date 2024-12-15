"use client";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Email"
              labelPlacement="outside"
              type="email"
              name="email"
              className="w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              labelPlacement="outside"
              type="password"
              name="password"
              className="w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600  py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Login Now
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            New here?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
