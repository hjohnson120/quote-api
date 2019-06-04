import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetARecipe() {
  const [food, searchFood] = useState('')

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
      <form onSubmit={searchRecipe}>
        <input
          type="text"
          placeholder="Search a Recipe.."
          value={food}
          onChange={e => {
            searchFood(e.target.value)
          }}
        />
      </form>
      <h1>{food.strMeal}</h1>
      <p>{food.strInstructions}</p>
    </section>
  )
}
