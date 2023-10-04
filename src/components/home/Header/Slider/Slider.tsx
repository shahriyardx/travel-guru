import React, { useRef, useState } from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slide from "./Slide"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const BannerSlider = () => {
  const slideData = [
    { image: "/images/coxs-bazar.png", text: "Cox's Bazar" },
    { image: "/images/Sajek.png", text: "Sajek" },
    { image: "/images/Sreemongol.png", text: "Sreemangal" },
    { image: "/images/Sundorbon.png", text: "Sundarban" },
  ]
  const sliderRef = useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    afterChange: (currentSlide: number) => setActiveSlide(currentSlide),
  }

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {slideData.map((data, index) => (
          <Slide
            key={index}
            image={data.image}
            text={data.text}
            className={activeSlide === index ? "border-yellow-400" : ""}
          />
        ))}
      </Slider>

      <div className="flex items-center gap-3 mt-5">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-12 aspect-square bg-white grid place-items-center text-3xl rounded-full"
        >
          <BiChevronLeft />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-12 aspect-square bg-white grid place-items-center text-3xl rounded-full"
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default BannerSlider
