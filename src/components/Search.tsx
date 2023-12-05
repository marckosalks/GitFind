import { SearchIcon } from "@/assets"
import Image from "next/image"



export default function Search() {
  return (

    <div className="flex flex-col justify-center gap-2 ">
      <h2 className="text-cyan-200 text-base">Big or little, can you find everyone dev!</h2>
      <div className="pl-3 flex justify-center gap-1">
        <input type="text"
          name="search"
          className="w-72 rounded-lg h-6 outline-0"
          id="search" />
        <Image style={{ filter: "brightness(0) invert(1)" }}
          className="relative w-4 h-4 top-1 rotate-12 cursor-pointer"
          src={SearchIcon}
          alt="" />
      </div>
    </div>
  )
}
