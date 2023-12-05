import Search from "@/components/Search";

export default function Home() {
  return (
    <section className="bg-slate-950 flex flex-col gap-4 w-2/5 rounded-2xl justify-center text-center h-96">
      <h1 className="bg-gradient-to-r from-blue-900 to-purple-500 text-transparent bg-clip-text font-extrabold  text-4xl ">GITHUB FIND 🔭</h1>
      <Search />
    </section>
  )
}
