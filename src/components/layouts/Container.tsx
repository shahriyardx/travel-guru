import cn from "@/utils/tailwind"
import React, { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement>

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-5", className)}>{children}</div>
  )
}

export default Container
