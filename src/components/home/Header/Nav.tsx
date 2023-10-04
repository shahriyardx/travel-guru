import React from "react"
import Image from "next/image"

import Container from "@/components/layouts/Container"
import { BiSearch } from "react-icons/bi"
import Link from "next/link"
import AccentButton from "@/components/shared/AccentButton"

const Nav = () => {
  return (
    <div>
      <Container className="py-5 flex items-center gap-5">
        <Image
          src="/logo.png"
          width={80}
          height={50}
          alt="Logo"
          className="invert"
        />

        <div className="flex items-center bg-white/20 gap-2 px-3 py-2 border border-white rounded-md flex-grow max-w-[300px]">
          <BiSearch className="text-white" />
          <input
            type="text"
            placeholder="Search your destination"
            className="bg-transparent placeholder:text-white text-white text-xs outline-none border-0 w-full"
          />
        </div>

        <nav className="text-white ml-auto">
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/news">Destination</Link>
            </li>
            <li>
              <Link href="/news">Blog</Link>
            </li>
            <li>
              <Link href="/news">Contact</Link>
            </li>

            <li>
              <AccentButton className="rounded-md px-5">Login</AccentButton>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Nav
