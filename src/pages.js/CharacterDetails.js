import React from 'react'
import { useParams } from 'react-router-dom'
import CharacterProfile from '../components/CharacterProfile';
import Error from '../components/Error';
import Fallback from '../components/Fallback';
import Loading from '../components/Loading';
import { useCharacterDetails } from '../hooks/useCharactereDetails'

export default function CharacterDetails() {
    const { id } = useParams();
    const { data, loading, error } = useCharacterDetails(id)

    if (loading) return <Loading />
    if (error) return <Error />
    if (!data.character) return <Error />
    return (
        <div>
            {data ? <CharacterProfile character={data.character} /> : <Fallback loadiing={loading ? true : false} error={error && !data.character ? true : false} />}

        </div>
    )
}
