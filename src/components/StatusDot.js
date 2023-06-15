import React from 'react'

export default function StatusDot({status}) {
    return (
        <p className={`h-[0.9rem] w-[0.9rem] mt-1 shadow-md  border  rounded-full ${status === 'Alive' ? 'bg-green-400  shadow-green-500 border-green-500' : status === 'Dead' ? 'bg-red-500 shadow-red-500 border-red-500' : 'bg-gray-500  shadow-gray-50-500 border-gray-500'}`}></p>
    )
}
