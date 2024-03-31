import React from 'react'
import { IoHomeOutline, IoLinkOutline, IoLocationOutline, IoLogoTwitter } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'

export default function MainComponent({user}) {
  return (
    <div className='bg-white dark:bg-slate-800 min-h-52 rounded px-4 py-8'>
        <section className='flex gap-4'>
                {/* user image */}
            <img src={user.avatar_url ?? ''} alt="user image" className='h-20 w-20 rounded-full' />
                <section className='flex flex-col justify-between gap-2 sm:flex-row sm:w-full'>
                    <div>
                        {/* name */}
                        <h1>{user.name ?? 'Not available'}</h1>
                        {/* id */}
                        <Link to={`https://github.com/${user.login}`} target={'_blank'} className={'text-blue-700 text-sm hover:underline transition-all'}>@{user.name ?? 'Not Available'}</Link>
                    </div>

                    {/* date joined */}
                    <p>Joined-{dateFormat(user.created_at,'dd mmm yyyy')}</p>
                </section>
        </section>

        <section className='flex flex-col gap-4 mt-3'>
            <p>{user.bio}</p>
            {/* repo and followers */}
            <div className='min-h-14 bg-stone-200 dark:bg-slate-900 rounded px-6 py-4 flex justify-between items-center'>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs opacity-90'>Repos</p>
                    <p className='text-sm font-semibold sm:text-base'>{user.public_repos}</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs opacity-90'>Followers</p>
                    <p className='text-sm font-semibold sm:text-base'>{user.followers}</p>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs opacity-90'>Following</p>
                    <p className='text-sm font-semibold sm:text-base'>{user.following}</p>
                </div>
            </div>

            {/* address and extra info */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                <div className='flex items-center gap-2'>
                    <IoLocationOutline size={21} className={'text-blue-800'}/>
                    <p>{user.location ?? (
                        <span className='opacity-60'>Not available</span>
                    )}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IoLinkOutline size={21} className={'text-blue-800'}/>
                    <Link title={user.html_url} to={user.html_url} target={'_blank'} className={'overflow-hidden text-ellipsis max-w-56 opacity-75 underline'}>{user.html_url ?? (
                        <span className='opacity-60'>Not available</span>
                    )}</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <IoLogoTwitter size={21} className={'text-blue-800'}/>
                    <Link to={`https://twitter.com/${user.twitter_username}`} className={'text-blue-700 hover:underline hover:text-blue-800 transition-all'} target={'_blank'}>{user.twitter_username ?? (
                        <span className='opacity-60'>Not available</span>
                    )}</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <IoHomeOutline size={21} className={'text-blue-800'}/>
                    <p>{user.company ?? (
                        <span className='opacity-60'>Not available</span>
                    )}</p>
                </div>
            </div>
        </section>

        
    </div>
  )
}
