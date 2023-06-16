import React from 'react'

export default function SearchBar({ name, onChange,label,placeholder }) {
  return (
    <div className='flex flex-col items-center'>
      <label className='text-xs text-center ' htmlFor="locationInput">{label}</label>
      <input className='px-4 py-2 w-[20rem] border rounded-lg' id='locationInput' type="text" placeholder={placeholder} value={name} onChange={(e) => onChange(e)} />
    </div>
  )
}
