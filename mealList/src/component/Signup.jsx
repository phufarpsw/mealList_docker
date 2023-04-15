import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
export default function RenderLogin() {
  return (
    <div
      id="signuppage"
      className="w-full relative min-h-screen flex justify-center items-center"
    >
      <div className="container-box min-h-screen flex justify-center items-center border-0">
        <div className="w-6/12 rounded-md p-6 border">
          <p className="text-4xl font-kanit leading-tight">Create Account</p>
          <p className="text-gray-500 pt-1">SignUp to MealList</p>
          <div className="flex flex-col mt-10 space-y-3">
            <span className="font-kanit">Username</span>
            <div class="mt-2">
              <input
                type="text"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
            <span className="font-kanit">Firstname</span>
            <div class="mt-2">
              <input
                type="text"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
            <span className="font-kanit">Lastname</span>
            <div class="mt-2">
              <input
                type="text"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
            <span className="font-kanit">Telephone</span>
            <div class="mt-2">
              <input
                type="text"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
            <span className="font-kanit">Email Address</span>
            <div class="email mt-2">
              <input
                type="text"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
            <span className="font-kanit">Password</span>
            <div class="password mt-2">
              <input
                type="password"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
            <span className="font-kanit">Confirm Password</span>
            <div class="password mt-2">
              <input
                type="password"
                class="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
          </div>
            <button type="submit" className="w-full mt-5 rounded-md font-bold text-xl text-center font-kanit bg-rose-500 p-2">SignUp</button>
            <p className="mt-4 text-center cursor-pointer">Already have any account ? <Link to="/signin" className="text-yellow-300"> SIGN IN</Link></p>
        </div>
      </div>
    </div>
  );
}
