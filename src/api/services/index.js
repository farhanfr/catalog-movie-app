import axios from "axios"
import {BASE_URL,API_KEY} from '../store'

const MovieServices = () =>{
    const getAll = async () => await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
    const getAllById = async (movieId) => await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    const searchMovie = async (search) => await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`)
    return {getAll,getAllById,searchMovie}
}

export{MovieServices}