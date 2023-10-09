import Image from 'next/image'
import React from 'react'

interface MediaItemProps{
  image: string,
  name: string,
  artist: string,
  type: string
}

const MediaItem: React.FC<MediaItemProps> = ({
  image,
  name,
  artist,
  type
}) => {
  return (
    <div
      className='
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        w-full
        p-2
        rounded-md
      '
    >
      <div
        className='
          relative
          rounded-md
          min-h-[48px]
          min-w-[48px]
          overflow-hidden
        '
      >
        <Image 
          fill
          src={image}
          alt="Media Item"
          className='object-cover'
        />
      </div>
      <div
        className='
          flex
          flex-col
          gap-y-1
          overflow-hidden
        '
      >
        <p className='text-white truncate'>
          {name}
        </p>
        <p className='text-neutral-400 text-sm truncate'>
          {type} • {artist}
        </p>
      </div>
    </div>
  )
}

export default MediaItem