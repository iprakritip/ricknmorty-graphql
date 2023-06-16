import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Fallback from '../components/Fallback';
import Location from '../components/Location';
import { useSearch } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar'

export default function Search() {
    const [name, setName] = useState('');
    const [filteredBy, setFilteredBy] = useState('');
    const { getLocations, data, error, loading } = useSearch(name)
    const [buttonDisability, setButtonDisability] = useState(true)
    useEffect(() => {
        name !== '' ? setButtonDisability(false) : setButtonDisability(true)
    }, [name])

    return (
        <div className=' bg-slate-100 flex h-[68vh] flex-col gap-10 mt-[5rem]'>
            <div className='flex flex-col gap-6 items-center w-full'>
                <SearchBar onChange={(e) => setName(e.target.value)} name={name} label="Search for a character's locations" placeholder="e.g: Rick Sanchez" />
                <button disabled={buttonDisability} className={`${buttonDisability ? 'bg-green-300' : 'bg-green-500'} px-4 py-1 border rounded-lg`} onClick={() => {
                    getLocations({
                        variables: {
                            name
                        }
                    })
                    setFilteredBy(name)
                }}>Search</button>
            </div>
            <div className='bg-slate-100'>
                {filteredBy && <h2 className='font-bold text-xl text-green-500'>{data?.characters?.results.length ? `${filteredBy}'s Locations` : `There is no character by the name '${filteredBy}'. `}</h2>}
                {data?.characters?.results.map(character => {
                    return <div>{data
                        ? <Location location={character.location.name} />
                        : <Fallback loading={loading ? true : false} error={error ? true : false} />}</div>
                })}
            </div>

        </div>


    )
}
