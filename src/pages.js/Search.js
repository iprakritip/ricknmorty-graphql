import React from 'react'
import { useState } from 'react'
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useSearch } from '../hooks/useSearch';

export default function Search() {
    const [name, setName] = useState('');
    const { data, error, loading } = useSearch(name)
    if (loading) return <Loading />
    if (error) return <Error />
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button>Search</button>
        </div>
    )
}
