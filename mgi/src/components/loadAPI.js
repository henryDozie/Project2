import React from 'react'
import axios from 'axios'

export async function getCat() {
  const response = await axios('https://api.rawg.io/api/genres')
  console.log(response.data.results);
  return response
}

export async function loadGames() {

}