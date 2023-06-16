import React from 'react'
import EpisodeDetails from './EpisodeDetails'
import ProfileInfo from './ProfileInfo'
import StatusDot from './StatusDot';

export default function CharacterProfile({ character }) {
    const createdDate = new window.Date(character.created).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    return (
        <div className='characterProfile h-full flex flex-col items-center lg:items-start gap-4 lg:gap-10 bg-slate-100'>
            <h3 className='text-center w-full lg:text-2xl font-bold'>Character Details</h3>
            <div className='flex w-full flex-col items-center gap-2 lg:gap-6 bg-slate-200 border rounded-lg py-2'>
                <div className='w-[7rem] h-[7rem] lg:w-[15rem] lg:h-[15rem] rounded-full'>
                    <img className='w-[100%] h-[100%] rounded-full' src={character.image} width={500} height={500} alt="" />
                </div>
                <h2 className=' text-lg lg:text-2xl flex text-center gap-2 relative'>{character.name}
                    <StatusDot status={character.status} />
                </h2>
                <div className='flex flex-col lg:flex-row lg:gap-[3rem] gap-[1rem]'>
                    <ProfileInfo info={character.gender} infoType='Gender' />
                    <ProfileInfo info={character.species} infoType='Species' />
                    <ProfileInfo info={createdDate} infoType='Date Added' />
                </div>
            </div>
            <div className='flex w-full justify-between px-4'>
                <p className='flex gap-2 border border-dotted px-2 py-1 border-green-500 border-l-0'>Last identified location: <p className='text-green-500'>{character.location.name}</p> </p>
                <p className='text-xs text-green-500 mt-1'>...........................................................................</p>
                <p className='flex gap-2 border border-dotted px-2 py-1 border-green-500 border-r-0' >Place of origin: <p className='text-green-500'>{character.origin.name}</p> </p>
            </div>
            <div className='w-full'>
                <p className='underline'>Episodes</p>
                <div className='characterDetails grid lg:grid-cols-2 gap-4 w-full'>

                    {character.episode.map(episode => {
                        return (
                            <EpisodeDetails episode={episode.episode} name={episode.name} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
