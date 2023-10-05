import { slideData } from "@/utils/data"
import React, { Dispatch, SetStateAction, createContext, useState } from "react"

interface ContextType {
  bg: string
  setBg: Dispatch<SetStateAction<string>>
}

export const HeaderContext = createContext<ContextType | undefined>(undefined)

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [bg, setBg] = useState(slideData[0].image)

  return (
    <HeaderContext.Provider value={{ bg, setBg }}>
      {children}
    </HeaderContext.Provider>
  )
}
