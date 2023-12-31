import React, { ButtonHTMLAttributes } from "react"
import cn from "@/utils/tailwind"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const AccentButton = ({ className, children }: Props) => {
  return (
    <button className={cn("px-3 py-2 bg-yellow-500 text-black", className)}>
      {children}
    </button>
  )
}

export default AccentButton
