import { ReactNode } from "react"

interface ContainerType {
  children: ReactNode
}


export default function Container({ children }: ContainerType) {
  return (
    <main className=" flex justify-center w-full">
      {children}
    </main>
  )
}
