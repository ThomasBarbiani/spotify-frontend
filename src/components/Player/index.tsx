import React from 'react'
import PlayerContent from './PlayerContent'

const Player = () => {
  return (
    <div
      className='
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-80px
        px-4
        text-white
      '
    >
      <div className='pb-2'>
        <PlayerContent />
      </div>
    </div>
  )
}

export default Player