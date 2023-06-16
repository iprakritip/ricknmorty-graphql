import React from 'react'
import { Link } from 'react-router-dom';
import Character from '../components/Character';
import Fallback from '../components/Fallback';
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
    const { error, loading, data } = useCharacters();
    // console.log(loading, error, data);

    return (
        <div>
            <Link className=' my-4 mr-5 lg:mr-[2rem] flex justify-end' to='/search'>
                <button className='goToSearch px-2 py-1 border border-dotted rounded-lg border-green-500 text-green-500'>{`Search Locations by character`}</button>
            </Link>
            {data ?
                <div className='characterList flex flex-wrap justify-center gap-8 bg-slate-100'>
                    {data?.characters.results.map(character => {
                        return <Character character={character} />
                    })}
                </div>
                : <Fallback loading={loading ? true : false} error={error ? true : false}/>}

        </div>
    )
}
