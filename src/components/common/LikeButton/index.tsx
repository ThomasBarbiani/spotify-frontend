'use client'

import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

const LikeButton = () => {

  const [isLiked, setIsLiked] = useState(false)

  const Icon = isLiked ? FaHeart : FaRegHeart

  const handleLike = () => {
    if(!isLiked){
      setIsLiked(true)
    }
    else{
      setIsLiked(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      className="
        transtition
        hover:scale-105
        text-neutral-400
      hover:text-white
      "
    >
      <Icon color={isLiked ? '#1ED760' : ''}size={16}/>
    </button>
  )
}

export default LikeButton