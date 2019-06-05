import React, { useState } from 'react'
import axios from 'axios'

export default function GetARecipe() {
  const [food, searchFood] = useState('')
  // const [recipe, returnedRecipe] = useState('')

  const searchRecipe = e => {
    e.preventDefault()
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    axios.get(API_URL).then(resp => {
      searchFood(resp.data.meals[0])
      console.log({ resp })
    })
  }

  return (
    <section>
      <h1>{food.strMeal}</h1>

      <form className="recipeSearchBox" onSubmit={searchRecipe}>
        <input
          type="text"
          placeholder="Search a Recipe.."
          value={food}
          onChange={e => {
            searchFood(e.target.value)
          }}
        />
      </form>
      <section className="picture">
        <ul className="ingredients">
          <li>{food.strIngredient1}</li>
          <li>{food.strIngredient2}</li>
          <li>{food.strIngredient3}</li>
          <li>{food.strIngredient4}</li>
          <li>{food.strIngredient5}</li>
          <li>{food.strIngredient6}</li>
          <li>{food.strIngredient7}</li>
          <li>{food.strIngredient8}</li>
          <li>{food.strIngredient9}</li>
          <li>{food.strIngredient10}</li>
          <li>{food.strIngredient11}</li>
          <li>{food.strIngredient12}</li>
          <li>{food.strIngredient13}</li>
        </ul>
        <div className="img">
          <img src={food.strMealThumb} />
        </div>
      </section>
      <p className="instructions">{food.strInstructions}</p>
    </section>
  )
}
