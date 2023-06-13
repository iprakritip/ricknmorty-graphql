import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_CHARACTERS = gql`
query{
    characters{
        results{
            id
            name
            image
        }
    }
}
`


export default function CharactersList() {
    const { error, pending, data } = useQuery(GET_CHARACTERS);
    console.log(data, pending);
    return (
        <div>CharactersList</div>
    )
}
