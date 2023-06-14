import React from 'react'
import EpisodeDetails from './EpisodeDetails'

export default function CharacterProfile({ character }) {
    // console.log(character.episode.episode);
    return (
        <div className='characterProfile'>
            <img src={character.image} width={500} height={500} alt="" />
            <div className='characterDetails'>
                <h2>{character.name}</h2>
                {character.episode.map(episode => {
                    return (
                        <EpisodeDetails episode={episode.episode} name={episode.name} />
                    )
                })}
            </div>
        </div>
    )
}
