import React from 'react'

export default function CharacterProfile({ character }) {
    // console.log(character.episode.episode);
    return (
        <div className='characterProfile'>
            <img src={character.image} width={500} height={500} alt="" />
            <div className='characterDetails'>
                <h2>{character.name}</h2>
                {character.episode.map(episode => {
                    console.log(episode.episode);
                    return (
                        <div key={episode.episode}>
                            <p><b>{episode.episode}</b> - {episode.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
