import React from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai'

const Modal = ({ setOpenModal, modalOpen, image, data, closeModal}) => {
  return (
    <div class="md:justify-center md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 w-full h-full backdrop-blur">
        <div class="flex flex-col md:flex-row md:max-w-xl mt-24 md:mt-0 rounded-lg bg-white shadow-lg w-full md:h-96 h-1/2 my-6 mx-auto max-w-3xl">
            {/* {movieModal.poster_path ? <img className='w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg' src={`${IMAGE_PATH}${movieModal.poster_path}`} alt=""/>
            : null} */}
            <img class=" md:w-full md:h-96 h-full  object-cover md:px-0 px-6 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
            <div class="p-6 flex flex-col justify-start mb-6 bg-white">
                <button
                    onClick={() => {
                    // closeModal(false);
                    setOpenModal(!modalOpen)
                    }} 
                >
                {/* <AiOutlineCloseSquare className='w-8 h-8 ml-60'/> */}
                Button
                </button>
                <h2 class="text-gray-900 text-3xl font-bold mb-2">{data.title}</h2>
                <h2 class="text-gray-700 text-lg font-medium mb-2">{data.release_date}</h2>
                <p class="text-gray-700 text-base mb-4">{data.overview}</p>
                <p class="text-gray-600 text-sm">{data.vote_average}/10</p>
                <p class="text-gray-600 text-sm">({data.vote_count} total votes)</p>
            </div>
        </div>
    </div>
  )
}

export default Modal