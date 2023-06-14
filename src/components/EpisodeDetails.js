import React from 'react'

export default function EpisodeDetails({episode, name}) {
    return (
        <div key={episode}>
            <p><b>{episode}</b> - {name}</p>
        </div>
    )
}
