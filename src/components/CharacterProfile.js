import React from 'react'
import EpisodeDetails from './EpisodeDetails'
import ProfileInfo from './ProfileInfo'

export default function CharacterProfile({ character }) {
    // console.log(character.episode.episode);
    const createdDate = new window.Date(character.created);
    const createdYear = createdDate.getUTCFullYear();
    const createdMonth = createdDate.toLocaleString('default', { month: 'long' });
    const createdDay = createdDate.getUTCDay();
    return (
        <div className='characterProfile flex flex-col items-center lg:items-start gap-4 lg:gap-10 bg-slate-100'>
            <h3 className='text-center w-full lg:text-2xl font-bold'>Character Details</h3>
            <div className='flex w-full flex-col items-center gap-2 lg:gap-6 bg-slate-200 border rounded-lg py-2'>
                <div className='w-[7rem] h-[7rem] lg:w-[15rem] lg:h-[15rem] rounded-full'>
                    <img className='w-[100%] h-[100%] rounded-full' src={character.image} width={500} height={500} alt="" />
                </div>
                <h2 className='text-green-400 text-lg lg:text-2xl'>{character.name}</h2>
                <div className='flex flex-col lg:flex-row lg:gap-[3rem] gap-[1rem]'>
                    <ProfileInfo info={character.gender} infoType='Gender' />
                    <ProfileInfo info={character.species} infoType='Species' />
                    <ProfileInfo info={character.status} infoType='Status' />
                    <ProfileInfo info={createdDay + ' ' + createdMonth + " " + createdYear} infoType='Date Added' />

                </div>
            </div>
            <>
                <p className='flex gap-2 '>Last seen at: <p className='text-green-500'>{character.location.name}</p> </p>
                <p className='flex gap-2 ' >Place of origin: <p className='text-green-500'>{character.origin.name}</p> </p>
            </>
            <>
                <p className='underline'>Episodes</p>
                <div className='characterDetails grid lg:grid-cols-2 gap-4 w-full'>

                    {character.episode.map(episode => {
                        return (
                            <EpisodeDetails episode={episode.episode} name={episode.name} />
                        )
                    })}

                </div>
            </>
        </div>
    )
}
