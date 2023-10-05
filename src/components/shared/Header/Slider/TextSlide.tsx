import React from "react"
import AccentButton from "../../AccentButton"
import { BsArrowRight } from "react-icons/bs"

type Props = {
  title: string
  description: string
}

const TextSlide = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-6xl font-bold uppercase text-white">{title}</h1>
      <p className="text-zinc-200 text-sm">{description}</p>

      <div>
        <AccentButton className="flex items-center gap-3 accent-btn px-5 rounded-md">
          <span>Booking</span>
          <BsArrowRight />
        </AccentButton>
      </div>
    </div>
  )
}

export default TextSlide
