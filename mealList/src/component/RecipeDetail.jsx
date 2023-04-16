import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import kcal from "../assets/icon/icons8-kcal-58.png";
import level from "../assets/icon/level.png";
import time from "../assets/icon/clock.png";
import cook from "../assets/icon/cooking.png";
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
      className="w-full relative min-h-screen flex justify-center p-24"
    >
      {recipe && (
        <div className="container-box p-9 flex flex-col items-center">
          <img
            className="w-full w-[38rem] rounded-2xl object-cover"
            src={recipe.image_land}
            alt=""
          />
          <div className="w-[90%] space-y-4">
            <div className="title-recipe-food mt-10">
              <p className="font-kanit capitalize text-5xl">{recipe.name2}</p>
              <p className="font-kanit capitalize text-xl pt-2">{recipe.name1}</p>
            </div>
            <div className="flex space-x-4">
              <div className=" flex justify-center items-center space-x-4 p-4 rounded-xl">
                <img src={kcal} className="w-14" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-lg">{recipe.Kcal} Calories</p>
                  <p className="text-sm text-gray-200">Energy</p>
                </div>
              </div>
              <div className="w-48 flex justify-center items-center space-x-4 p-4 rounded-xl">
                <img src={level} className="h-12" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-2xl">Level</p>
                  <p className="capitalize">{recipe.level}</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4 p-4 rounded-xl">
                <img src={time} className="w-14" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-xl capitalize">preparation time</p>
                  <p className="capitalize">{recipe.time_pre} minutes</p>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4 p-4 rounded-xl">
                <img src={cook} className="w-14" alt="" />
                <div className="flex flex-col items-center">
                  <p className="text-xl capitalize">cook time</p>
                  <p className="capitalize">{recipe.time_cook} minutes</p>
                </div>
              </div>
            </div>
            <div id="ingredient" className="space-y-4">
              <p className="text-3xl font-kanit text-rose-500 mt-5">Ingredients</p>
              <div className="">
                <ul className="list-disc pl-7">
                  {ingredient &&
                    ingredient.map((res, index) => {
                      return <li key={index} className="mt-1">{res}</li>;
                    })}
                </ul>
              </div>
            </div>
            <div className="method space-y-4">
              <p className="text-3xl font-kanit text-rose-500 mt-5">Method</p>
              <div className="">
                {method &&
                  method.map((res, index) => {
                    return <p key={index} className="mt-1">{index+1}. {res}</p>;
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
