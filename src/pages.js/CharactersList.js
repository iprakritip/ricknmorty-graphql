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
            <Link to='/search'>
                <button className='goToSearch'>{`Search by name ---->`}</button>
            </Link>
            <div className='characterList'>
                {data?.characters.results.map(character => {
                    return <Character character={character} />
                })}
            </div>
        </div>
    )
}
