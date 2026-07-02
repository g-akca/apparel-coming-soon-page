import Header from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="text-base leading-base min-h-screen bg-linear-[140deg] from-white from-25% to-[#FFF4F4] to-80% flex flex-col">
      <Header />
      
      <MainSection />
    </div>
  )
}

export default App;