import Content from '@/components/Main/Content'
import Header from '@/components/Main/Header'
import { useMemo } from 'react'
import recentlyPlayed from '@/data/recentlyPlayed.json'

export default function Home() {

  const mediaData = useMemo(() => recentlyPlayed, [])
  
  return (
    <div className="
      flex
      flex-col
      bg-[#121212]
      rounded-lg
      h-full
      overflow-hidden
      mr-2
      bg-gradient-to-b
      from-neutral-800
      to-0%
      overflow-y-auto
      scrollbar
    scrollbar-thumb-white/30
    hover:scrollbar-thumb-white/50 
      scrollbar-track-white/0
      scrollbar-medium
    ">
      <Header>
        Header
      </Header>
      <div 
        className='
          h-full 
          mb-7 
          pl-6 
          pr-3
          text-white 
        '
      >
       {[...Array(6)].map((_, index) => (
          <Content key={index} media={mediaData}>
            Recently played
          </Content>
        ))}
        <footer
          className='h-18'
        >
          <p>hello world!</p>
        </footer>
      </div>
    </div>
  )
}

