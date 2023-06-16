import React from 'react'

export default function StatusDot({ status }) {
    return (
        <div className='absolute group right-[-1.5rem] top-[0.3rem]'>
            <p className={`absolute hidden  text-xs bottom-4 left-4 group-hover:block px-1 border ${status === 'Alive' ? 'border-green-500  text-green-500' : status === 'Dead' ? 'border-red-500  text-red-500' : 'border-gray-500  text-gray-500'} rounded`}>{status}</p>
            <p className={`h-[0.9rem] w-[0.9rem] mt-1 shadow-md   border cursor-pointer  rounded-full ${status === 'Alive' ? 'bg-green-400  shadow-green-500 border-green-500' : status === 'Dead' ? 'bg-red-500 shadow-red-500 border-red-500' : 'bg-gray-500  shadow-gray-50-500 border-gray-500'}`}></p>
        </div>
    )
}
