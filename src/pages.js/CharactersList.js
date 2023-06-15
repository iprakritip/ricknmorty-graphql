import React from 'react'
import { Link } from 'react-router-dom';
import Character from '../components/Character';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
    const { error, loading, data } = useCharacters();
    // console.log(loading, error, data);
    if (loading) return <Loading />
    if (error) return <Error />
    return (
        <div>
            <Link className=' my-4 mr-5 lg:mr-[2rem] flex justify-end' to='/search'>
                <button className='goToSearch px-2 py-1 border border-dotted rounded-lg border-green-500 text-green-500'>{`Search Locations`}</button>
            </Link>
            <div className='characterList flex flex-wrap justify-center gap-8'>
                {data?.characters.results.map(character => {
                    return <Character character={character} />
                })}
            </div>
        </div>
    )
}
