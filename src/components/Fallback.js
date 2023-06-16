import React from 'react'
import Loading from './Loading'
import Error from './Error'

export default function Fallback({ loading, error }) {
    return (
        <div className='h-[100%]  w-full'>{loading ? <Loading /> : <Error />}</div>
    )
}
