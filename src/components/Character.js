import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Character({ characters }) {
    const navigate = useNavigate();
    return (
        <div className='characterList'>
            {characters.map(character => {
                return (
                    // <Link key={character.id} to={`/${character.id}`}>
                        <div data-testid='test-route' onClick={()=>navigate(`/${character.id}`)}>
                            <img src={character.image} alt={character.name} />
                            <h2>{character.name}</h2>
                        </div>
                    // </Link>
                )
            })}
        </div>
    )
}
