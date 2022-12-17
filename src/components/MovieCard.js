import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

const MovieCard = ({movie}) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
  <div className='mt-10 mx-auto justify-center align-center bg-white rounded-xl shadow-2xl '>
    <div className='rounded-xl'   onClick={() => {
          setModalOpen(true);
        }}
      >
       {modalOpen && <Modal data={movie} title={movie.title} image={`${IMAGE_PATH}${movie.poster_path}`} setOpenModal={setModalOpen} modalOpen={modalOpen} closeModal = {() => {
         setModalOpen(false)
       }} />}
      <div class="rounded-full w-8 h-8  bg-white  absolute m-4 ">
        {movie.vote_average}
      </div>
        {movie.poster_path ? <img className='rounded-t-xl w-full' src={`${IMAGE_PATH}${movie.poster_path}`} alt=""/>
        : null} 
        <p className="mb-2 text-xl font-normal sm:text-2xl">
        {movie.title}
        </p>
    </div>
  </div>
</>
  )
}

export default MovieCard