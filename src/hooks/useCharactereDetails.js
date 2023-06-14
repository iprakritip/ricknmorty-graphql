import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_CHARACTER_DETAILS = gql`
query GetCharacterDetails($id:ID!){
    character(id: $id) {
    id
    name
    image
    episode {
      name
      episode
    }
  }
}
`


export const useCharacterDetails = (id) => {
    const { data, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
        variables: {
            id
        }
    });
    return { data, loading, error }
}