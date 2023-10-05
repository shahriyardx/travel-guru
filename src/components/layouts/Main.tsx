import React from "react"
import Header from "@/components/shared/Header/Index"
import { HeaderProvider } from "../shared/Header/HeaderContext"

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      {children}
    </div>
  )
}

export default Main
