import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(`
        rounded-full
        w-[32px]
        h-[32px]
        flex
        items-center
        justify-center
        transition
        border
        border-none
        focus:outline-none 
      `,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

ButtonIcon.displayName = "ButtonIcon"

export default ButtonIcon