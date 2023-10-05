import React, { useContext } from "react"
import Nav from "./Nav"
import Banner from "./Banner"
import { HeaderContext } from "./HeaderContext"

const Header = () => {
  const context = useContext(HeaderContext)
  const slide = context?.bg

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(#00000090, #00000090), url(${slide})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="transition-all"
    >
      <Nav />
      <Banner />
    </header>
  )
}

export default Header
