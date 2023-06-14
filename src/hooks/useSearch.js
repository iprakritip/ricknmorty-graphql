import { gql, useQuery } from '@apollo/client'
import React from 'react'

const GET_CHARACTER_LOCATIONS = gql`
query GetLocations($name: String!){
    characters(filter: {name: "Morty Smith"}) {
    results {
      name:$name
      location {
        name
      }
    }
  }
}
`
export const useSearch = (name) => {
    const { data, loading, error } = useQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })
    return { data, loading, error }
}
