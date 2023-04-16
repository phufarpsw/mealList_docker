import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/style.css";
import path from "../../path";

export default function RenderLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  function submit(){
    axios
    .post(`${path}/signin/`, {username: username, password: password})
    .then((result) => {
        if(result.data.length != 0){
            window.location.href = "/"
            localStorage.setItem("user", JSON.stringify(result.data[0]))
        }
    });
  }
  function handleOnChange (e){
    if (e.target.name == "username"){
        setUsername(e.target.value)
    }
    else{
        setPassword(e.target.value)
    }
  };
  return (
    <div
      id="loginpage"
      className="w-full relative h-screen flex justify-center pt-12"
    >
      <div className="container-box flex justify-center items-center border-0 space-y-4">
        <div className="shdow-box w-6/12 rounded-lg p-6 border ">
          <p className="text-4xl font-kanit select-none leading-tight">
            Hi Welcome back!
          </p>
          <p className="text-xl font-kanit select-none text-stone-400">
            Login to MealList
          </p>
          <div className="flex flex-col mt-10 space-y-3">
            <span className="font-kanit">Username</span>
            <div className="email mt-2">
              <input
                type="text"
                name="username"
                className="w-full outline-none bg-transparent border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Password</span>
            <div className="password mt-2">
              <input
                type="password"
                name="password"
                className="w-full outline-none bg-transparent border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <p className="text-gray-300 font-kanit cursor-pointer select-none text-right">
              Forgot your password ?
            </p>
          </div>
          <button
            type="submit"
            className="w-full mt-5 rounded-md font-bold text-xl text-center font-kanit bg-rose-500 p-2"
            onClick={submit}
          >
            SIGNIN
          </button>
          <p className="mt-4 text-center cursor-pointer font-kanit">
            Don’t have an account ?{" "}
            <Link to="/signup" className="text-yellow-300"> SIGNUP</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
