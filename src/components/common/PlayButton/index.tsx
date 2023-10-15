import React from 'react'
import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {
  return (
    <button
      className='
        transition
        opacity-0
        rounded-full
        flex
        items-center
        bg-[#1ED760]
        p-4
        drop-shadow-md
        translate
        translate-y-2
        group-hover:opacity-100
        group-hover:translate-y-0
        hover:scale-110
        hover:transition-none
        hover:bg-[#1FDF64]
      '
    >
      <FaPlay className="text-black transition-none" />
    </button>
  )
}

export default PlayButton