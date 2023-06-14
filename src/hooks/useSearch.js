import { gql, useLazyQuery } from '@apollo/client'
import React from 'react'

const GET_CHARACTER_LOCATIONS = gql`
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

export const useSearch = (name) => {
    const [getLocations, { data, loading, error }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })
    return { getLocations, data, loading, error }
}
