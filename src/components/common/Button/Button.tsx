import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(`
        flex
        flex-row
        w-auto
        rounded-full
        border
        border-transparent
        px-4
        py-1.5
        text-sm
        bg-slate-900
        text-white
        text-opacity-90
        gap-x-1
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

Button.displayName = "Button"

export default Button