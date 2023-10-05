import React, {
  RefObject,
  SetStateAction,
  useRef,
  Dispatch,
  useEffect,
} from "react"
import Slider, { Settings } from "react-slick"
import { slideData } from "@/utils/data"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TextSlide from "./TextSlide"

const TextSlider = ({
  setSliderRef,
}: {
  setSliderRef: Dispatch<
    SetStateAction<RefObject<Slider | undefined> | undefined>
  >
}) => {
  const sliderRef = useRef<Slider>(null)
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
  }

  useEffect(() => {
    if (sliderRef.current) {
      setSliderRef(sliderRef)
    }
  }, [sliderRef, setSliderRef])

  return (
    <Slider {...settings} ref={sliderRef}>
      {slideData.map((data, index) => (
        <TextSlide
          key={index}
          title={data.title}
          description={data.description}
        />
      ))}
    </Slider>
  )
}

export default TextSlider
