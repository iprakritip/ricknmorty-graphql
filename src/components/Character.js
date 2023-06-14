import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function Character({ character }) {
    const navigate = useNavigate();
    return (
        <div data-testid='test-route' onClick={() => navigate(`/${character.id}`)}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
        </div>
    )
}
