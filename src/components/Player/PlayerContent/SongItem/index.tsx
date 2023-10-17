import Image from 'next/image'
import React from 'react'

const SongItem = () => {
  return (
    <div className="flex items-center gap-x-4">
      <div
        className='
          flex
          items-center
          gap-x-4
          w-full
          rounded-md
        '
      >
        <div
          className='
            relative
            rounded-md
            min-h-[56px]
            min-w-[56px]
            overflow-hidden
            cursor-pointer
          '
        >
          <Image 
            fill
            src="https://i.scdn.co/image/ab67616d0000b27374dc897ea75402db37ef239a"
            alt="Media Item"
            className='object-cover'
          />
        </div>
        <div
          className='
            flex
            flex-col
            overflow-hidden
          '
        >
          <p 
            className='
              truncate
              text-white 
              text-sm
              font-medium
              hover:underline
              cursor-pointer
            '
          >
            All Caps
          </p>
          <p 
            className='
            text-neutral-400 
              text-xs 
              truncate
              hover:underline
              cursor-pointer
            '
          >
            Madvillain
          </p>
        </div>
      </div>
    </div>
  )
}

export default SongItem