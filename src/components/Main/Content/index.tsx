
import { Media } from "@/types"
import SongItem from "./SongItem"
import Link from "next/link"

interface ContentProps {
  children: React.ReactNode,
  media: Media[],
}

const Content: React.FC<ContentProps> = ({
  children,
  media
}) => {
  return (
    <div className="flex flex-col mb-10">
      <div className='flex justify-between items-end'>
        <h1 className='text-white text-2xl font-bold'>
          {children}
        </h1>
        <Link href="/">
          <p 
            className="
              font-bold 
              text-[#B2B2B2] 
              text-sm	
              hover:underline 
            "
          >
            Show all 
          </p>
        </Link>
      </div>
      <div 
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-8
          gap-6
          mt-5
        "
      >
        {media.map((item) => (
          <SongItem 
            key={item.name}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Content