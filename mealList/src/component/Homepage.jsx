import React, {useState, useEffect} from "react";
import foodbrand from "../assets/foodBrander.png";
import foods from "../assets/food.json";
import {Link} from "react-router-dom";
import axios from "axios";
import "../css/style.css";
import path from "../../path";
function RenderHomepage() {
  const [user, setUser] = useState()
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, []);
  const [foods, setFoods] = useState();
  useEffect(() => {
    axios
      .get(`${path}/recipes`)
      .then((result) => {
        const { data } = result;
        setFoods(data);
      });
  }, []);
  const [search, setSearch] = useState("");
  const login = (
    <button className="btn-login px-6 py-2 rounded-full border border-l-slate-50 select-none">
      Login
    </button>
  )
  return (
    <div
      id="homepage"
      className="w-full relative min-h-screen flex justify-center"
    >
      <div className="container-box pt-10 px-24 space-y-4">
        <nav className="w-full flex items-center justify-between">
          <div className="logo-page">
            <p className="text-3xl font-leckerli">MealList</p>
          </div>
            {user ?
             <p className="font-kanit text-lg">{user.firstname}&nbsp;&nbsp;{user.lastname}</p> 
            : <Link to="/signin">{login}</Link>}
        </nav>
        <div id="header" className="w-full flex justify-between">
          <div className="w-1/2 flex flex-col justify-center space-y-4">
            <button className="btn-project w-36 px-2 py-2 text-center rounded-full border border-rose-500 cursor-default">
              Project DevTool
            </button>
            <p className="text-6xl capitalize font-kanit leading-tight ">
              cooking a delicious food easily
            </p>
            <p className="text-stone-500 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              nisi illum, necessitatibus fuga iure accusantium officiis
              laboriosam possimus non pariatur nobis ut corporis tempore
              consequuntur distinctio fugit incidunt dolorem eos!
            </p>
            <div className="flex">
              <button className="btn-project w-36 px-4 py-3 text-center rounded-full mt-4 bg-rose-600 cursor-default">
                Getting Started
              </button>
            </div>
          </div>
          <div className="img-brand">
            <img src={foodbrand} alt="" />
          </div>
        </div>
        <div id="content" className="w-full pt-8 flex flex-col justify-center">
          <div className="w-full py-10">
          <input onChange={(e) => setSearch(e.target.value)} className="w-full px-8 py-5 bg-transparent border focus:border-rose-500 transition-colors duration-500 transition-duration-1000 outline-none rounded-full" placeholder="Enter your search" type="text" />
          </div>
          <div className="py-6 grid grid-cols-3 gap-10">
            {foods &&
            foods.filter((food) => {
              return search.toLowerCase() === '' ? food : food.name2.toLowerCase().includes(search)
            }).map((food, index) => {
                return <div
                id="card"
                key={index}
                className="flex py-6 px-6 bg-black rounded-xl bg-gradient-to-b from-stone-900 to-stone-950 justify-center"
              >
                <div className="img-topview mr-5 w-1/2">
                  <img src={food.image_top} alt="" />
                </div>
                <div className="w-1/2 pb-4 flex flex-col justify-between">
                  <div>
                    <p className="text-lg font-kanit capitalize">{food.name2}</p>
                    <p className="text-xs text-gray-500">Premium recipe</p>
                  </div>
                  <div className="flex">
                    <Link to={"/recipeDetail/"+food.id}>
                    <button className="btn-project w-36 py-2 text-center rounded-full border border-rose-500 mt-8 hover:bg-rose-600 hover:duration-150 transition ease-in-out">
                      Food Detail
                    </button>
                    <div className="">
                      
                    </div>
                    </Link>
                  </div>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderHomepage;
