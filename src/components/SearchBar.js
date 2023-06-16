import React from 'react'

export default function SearchBar({ name, onChange }) {
  return (
    <div className='flex flex-col '>
      <label className='text-xs text-center ' htmlFor="locationInput">Search for a character's locations</label>
      <input className='px-4 py-2 w-[20rem] border rounded-lg' id='locationInput' type="text" value={name} onChange={(e) => onChange(e)} />
    </div>
  )
}
