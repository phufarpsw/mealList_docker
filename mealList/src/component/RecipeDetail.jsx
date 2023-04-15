import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import kcal from "../assets/icon/icons8-kcal-58.png";
import level from "../assets/icon/icons8-boost-64.png";
import time from "../assets/icon/icons8-time-100.png";
import cook from "../assets/icon/icons8-cook-64.png";
import "../css/style.css";
export default function RecipeDetail(props) {
  let params = useParams();
  const [recipe, setRecipe] = useState();
  const [ingredient, setIngredient] = useState();
  const [method, setMethod] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes/" + params.recipeId)
      .then((result) => {
        const { data } = result;
        setRecipe(data[0]);
        setIngredient(JSON.parse(data[0].ingredient));
        setMethod(JSON.parse(data[0].method));
      });
  }, []);
  return (
    <div
      id="recipeDetail"
      className="w-full relative min-h-screen flex justify-center p-12"
    >
      {recipe && (
        <div className="container-box p-4 flex flex-col items-center">
          <img
            className="w-full h-[30rem] rounded-2xl object-cover"
            src={recipe.image_land}
            alt=""
          />
          <div className="w-[95%] space-y-4">
            <div className="title-recipe-food mt-10">
              <p className="font-kanit capitalize text-5xl">{recipe.name2}</p>
              <p className="font-kanit capitalize text-2xl">{recipe.name1}</p>
            </div>
            <div className="flex space-x-4">
              <div className=" flex justify-center items-center border border-rose-500 space-x-4 p-4 rounded-xl">
                <img src={kcal} className="w-16" alt="" />
                <div className="flex flex-col justify-start">
                  <p className="text-2xl">Kcal.</p>
                  <p>{recipe.Kcal} calories</p>
                </div>
              </div>
              <div className="w-48 flex justify-center items-center border border-rose-500 space-x-4 p-4 rounded-xl">
                <img src={level} className="w-16" alt="" />
                <div className="flex flex-col justify-starat">
                  <p className="text-2xl">Level</p>
                  <p className="capitalize">{recipe.level}</p>
                </div>
              </div>
              <div className="flex justify-center items-center border border-rose-500 space-x-4 p-4 rounded-xl">
                <img src={time} className="w-16" alt="" />
                <div className="flex flex-col justify-starat">
                  <p className="text-xl capitalize">preparation time</p>
                  <p className="capitalize">{recipe.time_pre} minutes</p>
                </div>
              </div>
              <div className="flex justify-center items-center border border-rose-500 space-x-4 p-4 rounded-xl">
                <img src={cook} className="w-16" alt="" />
                <div className="flex flex-col justify-starat">
                  <p className="text-xl capitalize">cook time</p>
                  <p className="capitalize">{recipe.time_cook} minutes</p>
                </div>
              </div>
            </div>
            <div id="ingredient" className="space-y-4">
              <p className="text-3xl font-kanit">Ingredients</p>
              <div className="">
                {ingredient &&
                  ingredient.map((res, index) => {
                    return <p key={index}>{res}</p>;
                  })}
              </div>
            </div>
            <div className="method space-y-4">
              <p className="text-3xl font-kanit">Method</p>
              <div className="">
                {method &&
                  method.map((res, index) => {
                    return <p key={index}>{index+1}. {res}</p>;
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
