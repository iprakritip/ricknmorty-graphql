import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Error from '../components/Error';
import Fallback from '../components/Fallback';
import Loading from '../components/Loading';
import Location from '../components/Location';
import { useSearch } from '../hooks/useSearch';

export default function Search() {
    const [name, setName] = useState('');
    const [filteredBy, setFilteredBy] = useState('');
    const { getLocations, data, error, loading } = useSearch(name)
    const [buttonDisability, setButtonDisability] = useState(true)
    useEffect(() => {
        name !== '' ? setButtonDisability(false) : setButtonDisability(true)
    }, [name])

    if (loading) return <Loading />
    if (error) return <Error />


    return (
        <div className=' bg-slate-100 flex h-[68vh] flex-col gap-10 mt-[5rem]'>
            <div className='flex flex-col gap-6 items-center w-full'>
                <div className='flex flex-col '>
                    <label className='text-xs text-center ' htmlFor="locationInput">Search for a character's locations</label>
                    <input className='px-4 py-2 w-[20rem] border rounded-lg' id='locationInput' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
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
                {filteredBy && <h2 className='font-bold text-green-500'>{data.character > 0 ? `${filteredBy}'s Locations` : `There is no character by the name '${filteredBy}'. `}</h2>}
                {data?.characters?.results.map(character => {
                    return <div>{data
                        ? <Location location={character.location.name} />
                        : <Fallback loading={loading ? true : false} error={error ? true : false} />}</div>
                })}
            </div>

        </div>


    )
}
