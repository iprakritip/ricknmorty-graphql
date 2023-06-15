import React from 'react'

export default function ProfileInfo({ info, infoType }) {
    return (
        <div className='flex flex-col items-center'>
            <p className='text-xs text-gray-400'>{infoType}</p>
            <p className='text-lg font-semi-bold'>{info}</p>
        </div>
    )
}
