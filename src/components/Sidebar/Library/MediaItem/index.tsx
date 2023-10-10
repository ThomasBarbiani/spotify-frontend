import Image from 'next/image'
import React from 'react'
import {IoVolumeMedium} from 'react-icons/io5'

interface MediaItemProps{
  image: string,
  name: string,
  artist: string,
  type: string
  isSelected: boolean;
  onClick: () => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  image,
  name,
  artist,
  type,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex
        items-center
        gap-x-3
        cursor-pointer
        ${isSelected ? 'hover:bg-[#393939]' : 'hover:bg-neutral-800/50'}
        w-full
        p-2
        rounded-md
        ${isSelected ? 'bg-[#232323]' : ''}
      `}
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
        <p 
          className={`
            truncate
            ${isSelected ? 'text-[#1ed760]' : 'text-white '}
          `}
        >
          {name}
        </p>
        <p className='text-neutral-400 text-sm truncate'>
          {type} • {artist}
        </p>
      </div>
      {isSelected && (
        <div
          className='
            w-[20px]
            flex
            justify-end
            items-center
            flex-grow
            text-[#1ED760]
          '
        >
          <IoVolumeMedium size={20}/>
        </div>
      )}
    </div>
  )
}

export default MediaItem