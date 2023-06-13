import React from 'react'

export default function Character({ characters }) {
    return (
        <div>
            {characters.map(character => {
                return <div key={character.id}>
                    <img src={character.image} alt="" />
                    <h2>{character.image}</h2>
                </div>
            })}
        </div>
    )
}
