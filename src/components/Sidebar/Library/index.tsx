'use client'

import { TbPlaylist } from 'react-icons/tb'
import { HiOutlinePlus } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '@/components/common/Button/Button';
import Tooltip from '@/components/common/Tooltip/Tooltip';
import ButtonIcon from '@/components/common/ButtonIcon';
import MediaItem from './MediaItem';
import { useMemo, useState } from 'react';

type ButtonName = 'playlists' | 'albums';

const Library = () => {

  const onClick = () => {
    // depois
  }

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState<ButtonName | null>(null);

  const handleButtonClick = (buttonName: ButtonName) => {
    if (activeButton === buttonName) {
      setTimeout(function () {
        setActiveButton(null);
      }, 400);
    } else {
      setTimeout(function () {
        setActiveButton(buttonName);
      }, 400);
    }
  };

  const mediaData = useMemo(() => [
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273de3c04b5fc750b68899b20a9',
      name: 'In Rainbows',
      artist: 'Radiohead',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b27374dc897ea75402db37ef239a',
      name: 'Madvillainy',
      artist: 'Madvillain',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273013c00ee367dd85396f79c82',
      name: 'KIDS SEE GHOSTS',
      artist: 'KIDS SEE GHOSTS',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b2731a84d71391df7469c5ab8539',
      name: 'Wish You Were Here',
      artist: 'Pink Floyd',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9',
      name: 'Yeezus',
      artist: 'Kanye West',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44',
      name: 'UTOPIA',
      artist: 'Travis Scott',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1',
      name: 'To Pimp A Butterfly',
      artist: 'Kendrick Lamar',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de',
      name: 'Fearless',
      artist: 'Taylor Swift',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be',
      name: 'Future Nostalgia',
      artist: 'Dua Lipa',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f',
      name: 'My Beautiful Dark Twisted Fantasy',
      artist: 'Kanye West',
      type: 'Album',
    },
    {
      image: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336',
      name: 'Melodrama',
      artist: 'Lorde',
      type: 'Album',
    },
  ], [])

  return (
    <div className="flex flex-col">
      <div className='flex flex-col pb-2'>
        <div
          className="
            flex
            items-center
            justify-between
            px-6
            pt-3  
          "
        >
          <Tooltip 
            content="Collapse Your Library"
          >
            <div
              className="
                inline-flex
                items-center
                gap-x-2
                cursor-pointer
                text-neutral-400
                hover:text-white
                transition
              "
            > 
              <TbPlaylist  size={26}/>
              <p
                className='
                  font-bold
                  text-md
                '
              >
                Your Library
              </p>
            </div>
          </ Tooltip>
          <Tooltip 
            content="Create playlist or folder"
          >
            <ButtonIcon
              className='
                hover:bg-[#1A1A1A] 
                focus:bg-black
                text-neutral-400
                cursor-pointer
              hover:text-white
              '
            >
              <HiOutlinePlus 
                onClick={onClick}
                size={20}
              />
            </ButtonIcon>
          </Tooltip>
        </div>
        <div
          className=" 
            flex
            items-center
            mt-1
            px-4
            pt-4
            gap-x-2   
          "
        >
          {activeButton && (
            <ButtonIcon
              onClick={() => {
                setTimeout(function () {
                  setActiveButton(null);
                }, 400);
              }}
              className="
                bg-[#232323] 
                hover:bg-[#2A2A2A] 
                px-1.5 
                py-1.5 
                transition 
                text-neutral-400
              "
            >
              <AiOutlineClose 
                size={22}
              />
            </ButtonIcon>
          )}

          <Button
            onClick={() => handleButtonClick('playlists')}
            className={`
              ${activeButton === 'playlists' ? 'bg-white text-black' : 'bg-[#232323] text-white'}
              px-3 
              py-1.5 
              ${activeButton === 'albums' ? 'hidden' : ''} 
              ${activeButton === 'playlists' ? 'bg-white' : 'hover:bg-[#2A2A2A]'} 
              transition 
              font-semibold
            `}
          >
            Playlists
          </Button>

          <Button
            onClick={() => handleButtonClick('albums')}
            className={`
              ${activeButton === 'albums' ? 'bg-white text-black' : 'bg-[#232323] text-white'}
              px-3 
              py-1.5 
              ${activeButton === 'playlists' ? 'hidden' : ''} 
              ${activeButton === 'albums' ? 'bg-white' : 'hover:bg-[#2A2A2A]'} 
              transition 
              font-semibold
            `}
          >
            Albums
          </Button>
        </div>
      </div>
      <div className="
        flex
        flex-col
        gap-y-1
        my-2
        px-2
        text-white
      ">
        {mediaData.map((item) => (
          <MediaItem
            key={item.name}
            {...item}
            isSelected={item.name === selectedItem}
            onClick={() => setSelectedItem(item.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;