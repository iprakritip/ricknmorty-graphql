import React from 'react'
import { Link } from 'react-router-dom'

export default function Character({ characters }) {
    return (
        <div className='characterList'>
            {characters.map(character => {
                return (
                    <Link to={`/${character.id}`}>
                        <div key={character.id}>
                            <img src={character.image} alt="" />
                            <h2>{character.name}</h2>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
