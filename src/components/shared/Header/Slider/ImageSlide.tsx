import cn from "@/utils/tailwind"
import Image from "next/image"
import React, { HTMLAttributes, RefObject } from "react"
import Slider from "react-slick"

type Props = HTMLAttributes<HTMLDivElement> & {
  image: string
  text: string
  sliderRef: RefObject<Slider>
  index: number
}

const Slide = ({ image, text, className, sliderRef, index }: Props) => {
  return (
    <div
      className="px-3 relative"
      onClick={() => sliderRef.current?.slickGoTo(index)}
    >
      <div
        className={cn(
          `
          w-full aspect-[1.3/2] border-4 
          rounded-2xl overflow-hidden border-transparent 
          shadow-xl transition-all`,
          className,
        )}
      >
        <Image
          className="h-full w-full object-cover"
          src={image}
          width={500}
          height={500}
          alt={image}
        />

        <h1 className="text-2xl font-semibold absolute bottom-3 left-7 text-white uppercase tracking-tighter">
          {text}
        </h1>
      </div>
    </div>
  )
}

export default Slide
