"use client";

import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import FavoriteButton from "./FavoriteButton";

function FavoritesList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorite, setFavorite] = useState([]); // <= this state holds the id's of all favorite reciepies

  // following function handles the operation of adding fav recipes's id's

  const addToFavorite = () => {
    console.log("yay2");
  };

  // this one does the exact opposite, it removes the favorite recipe id's
  const removeFavorite = (id) => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

  // this variable holds the list of favorite recipes, we will use it to render all the fav ecipes
  let findfavorite = items.filter((item) => favorite.includes(item.id));

  // filtered list of recipes
  let filtered = items.filter((item) => {
    if (searchTerm === "") {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  return (
    <div className="main">
      <div className="recipe__search">
        <input
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="recipe-container">
        <div className="recipe__list">
          <h2>all recipes</h2>
          {filtered.map((item) => {
            return (
              <div key={item.id} className="recipe__card">
                <img src={item.image} alt="foods" width={50} height={50} />
                <h2 className="recipe__card__title">{item.title}</h2>

                <FavoriteButton fn={addToFavorite} />
              </div>
            );
          })}
        </div>

        <div className="favorite__list">
          <h2>favorite recipes</h2>
          {findfavorite.map((item) => {
            return (
              <div key={item.id} className="recipe__card">
                <img src={item.image} alt="foods" width={50} height={50} />
                <h2 className="recipe__card__title">{item.title}</h2>

                <IoIosClose onClick={() => removeFavorite(item.id)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FavoritesList;
