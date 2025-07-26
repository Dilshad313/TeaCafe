import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate= useNavigate();
  return (
    <button onClick={()=>navigate(-1)} className='absolute top-4 left-4 bg-[#262626] p-2 rounded-full text-[#f5f5f5] hover:bg-[#383838] transition-colors duration-200'>
        <IoArrowBackOutline/>
    </button>
  )
}

export default BackButton