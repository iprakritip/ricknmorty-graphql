import { gql, useQuery } from '@apollo/client'
import React from 'react'

export const GET_CHARACTER_DETAILS = gql`
query GetCharacterDetails($id:ID!){
    character(id: $id) {
    id
    name
    image
    status
    gender
    species
    created
    episode {
        id
      name
      episode
    }
    origin{
      id
      name
    }
    location{
      id
      name
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
