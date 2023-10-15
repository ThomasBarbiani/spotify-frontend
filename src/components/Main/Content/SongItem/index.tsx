import PlayButton from "@/components/common/PlayButton"
import { Media } from "@/types"
import Image from "next/image"

interface SongItemProps {
  data: Media,
}

const SongItem: React.FC<SongItemProps> = ({
  data
}) => {
  return (
    <div 
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-[#181818]
        cursor-pointer
        hover:bg-[#282828]
        transition
        p-4
      "
    >
      <div
        className="
          relative
          aspect-square
          w-full
          h-full
          rounded-md
          overflow-hidden
          shadow-[0_45px_30px_-15px_rgba(0,0,0,0.3)]
        "
      >
        <Image 
          className="object-cover"
          src={data.image}
          fill
          alt="Image"
        />
      </div>
      <div
        className="
           flex
           flex-col
           items-start
           w-full
           mt-4
           gap-y-1
        "
      >
        <p className="font-semibold truncate w-full">
          {data.name}
        </p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          {data.artist}
        </p>
      </div>
      <div
        className="
          absolute
          bottom-26
          right-6
        "
      >
        <PlayButton />
      </div>
    </div>
  )
}

export default SongItem