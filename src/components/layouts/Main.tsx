import React from "react"
import Header from "@/components/home/Header/Index"

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Main
