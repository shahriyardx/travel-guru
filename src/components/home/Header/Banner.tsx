import React from "react"
import Container from "@/components/layouts/Container"
import { BsArrowRight } from "react-icons/bs"
import AccentButton from "@/components/shared/AccentButton"
import Slider from "./Slider/Slider"

const Banner = () => {
  return (
    <Container>
      <div className="grid grid-cols-[40%,60%] py-16 gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold uppercase text-white">
            Cox&apos;s Bazar
          </h1>
          <p className="text-zinc-200 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            dicta aliquid molestiae. Eius ex sunt beatae, laboriosam impedit,
            non eveniet ad voluptatem eum odio, distinctio nulla aliquam commodi
            blanditiis reiciendis!
          </p>

          <div>
            <AccentButton className="flex items-center gap-3 accent-btn px-5 rounded-md">
              <span>Booking</span>
              <BsArrowRight />
            </AccentButton>
          </div>
        </div>

        <div>
            <Slider />
        </div>
      </div>
    </Container>
  )
}

export default Banner
