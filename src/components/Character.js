import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Character({ character }) {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col' data-testid='test-route' onClick={() => navigate(`/${character.id}`)}>
            <div className='m-auto bg-white p-4'>
                <img src={character.image} alt={character.name} />
            </div>
            <div className='flex py-[1rem] w-full flex-col items-center bg-white'>
                <h2 className='font-semibold text-blue-950'>{(character.name).toUpperCase()}</h2>
                <p className='text-gray-400'>Human</p>
            </div>
        </div>
    )
}
