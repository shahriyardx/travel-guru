import React, { RefObject, useContext, useRef, useState } from "react"
import Slider, { Settings } from "react-slick"
import Slide from "./ImageSlide"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { HeaderContext } from "../HeaderContext"
import { slideData } from "@/utils/data"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BannerSlider = ({
  sliderRef: textSliderRef,
}: {
  sliderRef: RefObject<Slider | undefined> | undefined
}) => {
  const context = useContext(HeaderContext)
  const sliderRef = useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    afterChange: (currentSlide: number) => {
      setActiveSlide(currentSlide)
    },
    beforeChange: (_curr, next) => {
      context?.setBg(slideData[next].image)
    },
  }

  return (
    <div>
      <Slider className="images" {...settings} ref={sliderRef}>
        {slideData.map((data, index) => (
          <Slide
            key={index}
            image={data.image}
            text={data.title}
            className={activeSlide === index ? "border-yellow-400" : ""}
            sliderRef={sliderRef}
            index={index}
          />
        ))}
      </Slider>

      <div className="flex items-center gap-3 mt-5">
        <button
          onClick={() => {
            sliderRef.current?.slickPrev()
            textSliderRef?.current?.slickPrev()
          }}
          className="w-12 aspect-square bg-white grid place-items-center text-3xl rounded-full"
        >
          <BiChevronLeft />
        </button>
        <button
          onClick={() => {
            sliderRef.current?.slickNext()
            textSliderRef?.current?.slickNext()
          }}
          className="w-12 aspect-square bg-white grid place-items-center text-3xl rounded-full"
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default BannerSlider
