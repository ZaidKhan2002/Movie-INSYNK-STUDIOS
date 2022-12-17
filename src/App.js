import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import { AiOutlineSearch} from 'react-icons/ai'

function App() {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("")

  // Fetching data

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        query: searchKey
      }
    })

    setMovies(results);
  } 

  useEffect(() => {
    fetchMovies()
  }, [])

  // Rendering data

  const renderMovies = () => (
    movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie} />
    ))
  )

  // Searching data
  
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  }

  return (
    <>
        <div className='bg-gray-200 sticky top-0 z-50'>
          <div class="container px-4 pt-4 pb-2 mx-auto flex flex-wrap items-center justify-between">
              <img className='md:w-32 w-24 sm:mb-0' src="/logo.png" alt=''/>
              <form className='flex' onSubmit={searchMovies} > 
                  <button class="font-normal flex text-center rounded-md text-sm bg-gray-100 h-10 items-center text-gray-800" type={"submit"}>
                  <AiOutlineSearch className='w-8 h-8 text-slate-400 pl-2'/>
                    <input className='h-8 md:w-60 w-44 bg-gray-100 text-left placeholder:italic placeholder:text-slate-400 pl-2' type="text" placeholder='Search a movie' onChange={(e) => setSearchKey(e.target.value)} />
                  </button>
              </form>
          </div>
        </div>
        <div class="border-solid border-2 border-gray-400 mt-2 mb-2 ml-24 mr-24"></div>
        <h1 className='text-3xl pl-24 font-bold mt-2'>Most Recent Movies</h1>
        <div className=' grid gap-3 row-gap-3 lg:grid-cols-4 md:grid-cols-2 text-center px-14 pb-8'>
          {renderMovies()}
        </div>
    </>
  );
}

export default App;
