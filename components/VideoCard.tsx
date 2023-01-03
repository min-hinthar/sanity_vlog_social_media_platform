import React, { useState, useEffect, useRef } from 'react';
import { Video } from '../types';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go'

interface IProps {
    post: Video
}

const VideoCard: NextPage<IProps> = ({post}) => {


  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
        <div>
            <div className='flex  gap-3 p-2 cursor-pointer font-semibold rounded'>
                {/* USER IMAGE */}
                <div className='md:w-16 md:h-16 w-10 h-10'>
                    <Link href="/">
                        <>
                            <Image 
                                width={62}
                                height={62}
                                className='rounded-full'
                                src={post.postedBy.image}
                                alt='profile photo'
                                layout='responsive'
                            />
                        </>
                    </Link>
                </div>
                {/* USER NAME */}
                <div>
                    <Link href="/">
                        <div className='flex items-center gap-2'>
                            <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                                {post.postedBy.userName}
                                {""}
                                <GoVerified className='text-blue-400 text-md' />
                            </p>
                            <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>
                                {post.postedBy.userName}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        {/* VIDEO POST */}
    </div>
  )
}

export default VideoCard