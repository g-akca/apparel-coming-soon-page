import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <div className="text-base leading-base text-pink-400 min-h-screen bg-linear-[140deg] from-white from-25% to-[#FFF4F4] to-80% flex flex-col desktop:hidden">
        <Header />

        <main className="flex flex-col gap-16 pb-14">
          <HeroImage />

          <MainSection />
        </main>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[auto_610px] text-base leading-base text-pink-400 min-h-screen">
        <main className="pl-41.25 flex flex-col gap-34 py-20 bg-linear-[140deg] from-white from-25% to-[#FFF4F4] to-80%">
          <Header />

          <MainSection />
        </main>

        <HeroImage />
      </div>
    </>
  )
}

export default App;