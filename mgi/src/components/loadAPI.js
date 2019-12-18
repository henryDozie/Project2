import axios from 'axios'

export async function getCat() {
  const response = await axios('https://api.rawg.io/api/genres')
  console.log(response.data.results);
  return response.data.results
}

export async function getPopularIn2019() {
  const response = await axios('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added')
  return response.data.results
}

export async function getHighestRating() {
  const response = await axios('https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating')
  return response.data.results
}

export async function getGame(name) {
  name = name.split(' ').join('-')
  const response = await axios(`https://api.rawg.io/api/games?search=${name}`)
  return response.data.results
}

export async function getLast30Games() {
  const n = new Date()
  const year = n.getFullYear()
  const month = n.getMonth()
  const day = n.getDate()
  const prevMonth = month - 1
  let prevYear;
  if (month === 0) {
    prevYear = year;
  }
  else {
    prevYear = year
  }
  const response = await axios(`https://api.rawg.io/api/games?dates=${prevYear}-${prevMonth}-${day},${year}-${month}-${day}&platforms=18,1,7`)
  return response.data.results
}

export async function getAllTimeGreats() {
  const response = await axios(`https://api.rawg.io/api/games?ordering=-rating&developers=109`)
  console.log(response.data.results);
  
  return response.data.results
}

export async function getPlatforms() {
  const response = await axios("https://api.rawg.io/api/platforms")
  console.log(response.data.results);
  return response.data.results 
}