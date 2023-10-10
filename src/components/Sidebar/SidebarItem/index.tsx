import Link from "next/link"
import { IconType } from "react-icons"
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps{
  icon: IconType
  label: string
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon : Icon,
  label,
  active,
  href
}) => {

  return (
    <Link
      href={href}
      className={twMerge(`
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-semibold
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
      `,
        active && "text-white"
      )}
    >
      <div className="h-[32px] w-[32px] flex items-center justify-center">
        <Icon size={28}></Icon>
      </div>
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;