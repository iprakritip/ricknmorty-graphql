import React from 'react'
import { useState } from 'react'
import Error from '../components/Error';
import Loading from '../components/Loading';
import Location from '../components/Location';
import { useSearch } from '../hooks/useSearch';

export default function Search() {
    const [name, setName] = useState('');
    const { getLocations, data, error, loading } = useSearch(name)
    // console.log(data); 
    if (loading) return <Loading />
    if (error) return <Error />
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            <div>
                <h2>{name}'s Locations</h2>
                {data && data.characters.results.map(character => {
                    return <Location location={character.location.name} />
                })}
            </div>
        </div>
    )
}
