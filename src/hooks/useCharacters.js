import { gql, useQuery } from '@apollo/client'
import React from 'react'


const GET_CHARACTERS = gql`
query getCharacters{
    characters{
        results{
            id
            name
            image
            species
        }
    }
}
`
export const useCharacters=()=> {
    const { error, loading, data } = useQuery(GET_CHARACTERS);
    return { error, loading, data }
}


