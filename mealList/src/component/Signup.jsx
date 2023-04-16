import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/style.css";
import path from "../../path";
export default function RenderLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  function submit() {
    if (
      username != "" &&
      password != "" &&
      firstname != "" &&
      lastname != "" &&
      email != "" &&
      tel != ""
    ) {
      axios
        .post(`${path}/signup/`, {
          username: username,
          password: password,
          firstname: firstname,
          lastname: lastname,
          email: email,
          tel: tel,
        })
        .then((result) => {
          alert("Signup Successfully")
          window.location.href = "/signin"
          console.log(result);
        });
    }else{
      alert("Please input information")
    }
  }
  function handleOnChange(e) {
    if (e.target.name == "username") {
      setUsername(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.name == "lastname") {
      setLastname(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "tel") {
      setTel(e.target.value);
    }
    console.log(e.target.value)
  }
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
            <div className="mt-2">
              <input
                type="text"
                name="username"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Firstname</span>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Lastname</span>
            <div className="mt-2">
              <input
                name="lastname"
                type="text"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Telephone</span>
            <div className="mt-2">
              <input
                type="text"
                name="tel"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Email Address</span>
            <div className="email mt-2">
              <input
                type="text"
                name="email"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Password</span>
            <div className="password mt-2">
              <input
                type="password"
                name="password"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
                onChange={handleOnChange}
              />
            </div>
            <span className="font-kanit">Confirm Password</span>
            <div className="password mt-2">
              <input
                type="password"
                className="w-full bg-transparent outline-none border rounded-md h-12 p-4"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={submit}
            className="w-full mt-5 rounded-md font-bold text-xl text-center font-kanit bg-rose-500 p-2"
          >
            SignUp
          </button>
          <p className="mt-4 text-center cursor-pointer">
            Already have any account ?{" "}
            <Link to="/signin" className="text-yellow-300">
              {" "}
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
