import { gql, useLazyQuery } from '@apollo/client'
import React from 'react'

export const GET_CHARACTER_LOCATIONS = gql`
query GetLocations($name: String!){
    characters(filter: 
    {name: $name
    }) {
    results {
      location {
        name
      }
    }
  }
}
`

export const useSearch = () => {
  const [getLocations, { data, loading, error }] = useLazyQuery(GET_CHARACTER_LOCATIONS)
  return { getLocations, data, loading, error }
}
