import React, { RefObject, useContext, useRef, useState } from "react"
import Container from "@/components/layouts/Container"
import { BsArrowRight } from "react-icons/bs"
import AccentButton from "@/components/shared/AccentButton"
import ImageSlider from "./Slider/ImageSlider"
import TextSlider from "./Slider/TextSlider"
import Slider from "react-slick"

const Banner = () => {
  const [sliderRef, setSliderRef] = useState<RefObject<Slider | undefined>>()
  return (
    <Container>
      <div className="grid grid-cols-[40%,60%] py-16 gap-5">
        <TextSlider setSliderRef={setSliderRef} />
        <ImageSlider sliderRef={sliderRef} />
      </div>
    </Container>
  )
}

export default Banner
