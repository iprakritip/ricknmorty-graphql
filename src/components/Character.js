import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Character({ character }) {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col shadow hover:shadow-2xl transition-shadow duration-300 ease-in-out  cursor-pointer' data-testid='test-route' onClick={() => navigate(`/${character.id}`)}>
            <div className='m-auto lg:w-[20rem] lg:h-[20rem] bg-white p-4 lg:p-2'>
                <img className='w-[100%] h-[100%]' src={character.image} alt={character.name} />
            </div>
            <div className='flex py-[1rem] lg:py-[0.7rem] w-full flex-col items-center bg-white'>
                <h2 className='font-semibold lg:font-bold text-blue-950'>{(character.name).toUpperCase()}</h2>
                <p className='text-gray-400'>{character.species}</p>
            </div>
        </div>
    )
}
