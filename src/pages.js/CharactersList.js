import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Character from '../components/Character';
import Fallback from '../components/Fallback';
import { useCharacters } from '../hooks/useCharacters';
import SearchBar from '../components/SearchBar'

export default function CharactersList() {
    const { error, loading, data } = useCharacters();
    // console.log(loading, error, data);
    const [name, setName] = useState('');
    return (
        <div className="flex flex-col gap-6">
            <Link className=' my-4 mr-5 lg:mr-[2rem] flex justify-end' to='/search'>
                <button className='goToSearch px-2 py-1 border border-dotted rounded-lg border-green-500 text-green-500'>{`Search Locations by character`}</button>
            </Link>
            <SearchBar label='Search character' placeholder="e.g: Rick Sanchez" value={name} onChange={(e) => setName(e.target.value)} />
            {data ?
                <div className='characterList flex flex-wrap justify-center gap-8 bg-slate-100'>
                    {data?.characters.results.map(character => {
                        return <Character character={character} />
                    })}
                </div>
                : <Fallback loading={loading ? true : false} error={error ? true : false} />}

        </div>
    )
}
