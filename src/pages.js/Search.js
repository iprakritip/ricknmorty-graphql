import React from 'react'
import { useState } from 'react'

export default function Search() {
    const [name, setName] = useState('');
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
