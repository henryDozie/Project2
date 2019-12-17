import React from 'react'
import axios from 'axios'

export async function getCat() {
  const response = await axios('https://api.rawg.io/api/genres')
  // console.log(response.data.results);
  return response.data.results
}

export async function getPopularIn2019() {
  const response = await axios('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added')
  // console.log(response);
  return response.data.results
}

export async function getHighestRating() {
  const response = await axios('https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating')
  console.log(response);
  return response.data.results
}

export async function getGame(name) {
  console.log(name)
  name = name.split(' ').join('-')
  console.log(name)
  
  const response = await axios(`https://api.rawg.io/api/games?search=${name}`)
  return response.data.results
}