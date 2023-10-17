import Image from "next/image"
import SongItem from "./SongItem"
import LikeButton from "@/components/common/LikeButton"

const PlayerContent = () => {
  return (
    <div
      className="
        grid
        grid-cols
        md:grid-cols-3
        h-full
      "
    >
      <div
        className="
          flex
          w-full
          justify-start
          gap-x-4
        "
      >
        <SongItem />
        <LikeButton />
      </div>
      
    </div>
  )
}

export default PlayerContent