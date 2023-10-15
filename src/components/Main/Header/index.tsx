'use client'

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi";
import { RiNotification2Line} from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/Go";
import Button from "@/components/common/Button/Button";
import ButtonIcon from "@/components/common/ButtonIcon";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import Image from "next/image";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection} from "@nextui-org/react";

interface HeaderProps {
  children: React.ReactNode
  className?: string
}


const Header: React.FC<HeaderProps> = ({
  children,
  className
}) => {
  const router = useRouter()

  const handleLogout = () => {

  }

  return (
    <div 
      className={twMerge(`
        h-fit
        pl-6
        pr-3
        pt-4
        pb-1
        sticky 
        top-0 
        z-50 
        bg-[#121212]
      `,
        className
      )}
    >
      <div className="
        w-full
        mb-4
        flex
        items-center
        justify-between
      ">
        <div className="
          hidden
          md:flex
          gap-x-2
          items-center
        ">
          <Tooltip
            content="Go back"
          >
            <ButtonIcon
              onClick={() => router.back()}
              className="bg-black hover:opacity-75"
            >
              <RxCaretLeft 
                size={32}
                className="text-white "
              />
            </ButtonIcon>
          </Tooltip>
          <Tooltip
            content="Go forward"
          >
            <ButtonIcon
              onClick={() => router.forward()}
              className="bg-black"
            >
              <RxCaretRight 
                size={32}
                className="text-white hover:opacity-75"
              />
            </ButtonIcon>
          </Tooltip>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
          >
            <HiHome className="text-black" size={20}/>
          </button>
          <button
            className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
          >
            <BiSearch className="text-black" size={20}/>
          </button>
        </div>
        <div
          className="
            flex
            flex-row
            justify-between
            items-center
            gap-x-2
          " 
        >
          <Button
            onClick={() => {}}
            className="
              bg-black
              pl-3
              font-extrabold
              hover:scale-105	
            "
          >
            <FiDownload className="text-white" size={18} />
            Install App
          </Button>
          <Tooltip 
            content="What's new"
          >
            <ButtonIcon
              className='
              bg-black
                font-extrabold
                hover:scale-110
                transition-none
                text-neutral-400
                cursor-pointer
              hover:text-white
              '
            >
              <RiNotification2Line 
                size={18}
              />
            </ButtonIcon>
          </Tooltip>
          <Dropdown
            classNames={{
              base: "bg-[#282828] text-white mt-1 transition-none rounded-md",
            }}
            placement="bottom-end"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    opacity: {
                      duration: 0,
                    },
                  },
                },
                exit: {
                  y: 0,
                  opacity: 0,
                  transition: {
                    opacity: {
                      duration: 0,
                    },
                  },
                },
              },
            }}
          >
            <DropdownTrigger>
              <ButtonIcon
                className='
                bg-black
                  font-extrabold
                  hover:scale-105
                  transition-none
                  text-neutral-400
                  cursor-pointer
                hover:text-white
                '
              >
                <div
                  className='
                    relative
                    rounded-full
                    min-h-[24px]
                    min-w-[24px]
                    overflow-hidden
                  '
                >
                  <Image 
                    fill
                    src={"https://i.scdn.co/image/ab67757000003b82ece54cbc82e9a1af8a3f14c4"}
                    alt="Media Item"
                    className='object-cover'
                  />
                </div> 
              </ButtonIcon>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownSection 
                classNames={{
                  base: "mt-1",
                  divider: 'bg-white/20'
                }}
                showDivider
              >
                <DropdownItem 
                  className="cursor-progress rounded-sm h-10"
                  endContent={<GoLinkExternal className="text-large" />}
                  
                >
                  Account
                </DropdownItem>
                <DropdownItem className="cursor-progress rounded-sm h-10">Profile</DropdownItem>
                <DropdownItem className="cursor-progress rounded-sm h-10">Settings</DropdownItem>
              </DropdownSection>
              <DropdownSection className={"mb-0"}>
                <DropdownItem className="cursor-progress rounded-sm h-10">Log out</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header
