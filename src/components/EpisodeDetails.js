import React from 'react'

export default function EpisodeDetails({episode, name}) {
    return (
        <div className='text-center lg:text-start' key={episode}>
            <p className='text-sm'><b className='text-green-400'>{episode}</b> - {name}</p>
        </div>
    )
}
