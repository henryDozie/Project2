import React from 'react'
import axios from 'axios'

export async function LoadApi() {
  const result = await axios('https://api.rawg.io/api/games')

  console.log(result);
  return result
}