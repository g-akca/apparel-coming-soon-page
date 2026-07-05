import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="text-base leading-base text-pink-400 min-h-screen bg-linear-[140deg] from-white from-25% to-[#FFF4F4] to-80% flex flex-col">
      <Header />

      <main className="flex flex-col gap-16 pb-14">
        <HeroImage />

        <MainSection />
      </main>
    </div>
  )
}

export default App;