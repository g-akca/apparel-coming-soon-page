import HeroImage from "./HeroImage";
import arrowIcon from "/images/icon-arrow.svg";

function MainSection() {
  return (
    <main className="flex flex-col gap-16 pb-12">
      <HeroImage />

      <div className="px-8 max-w-127.25 self-center flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="uppercase text-[40px] leading-[100%] tracking-[10px] font-light">We're <span className="font-semibold text-gray-900">Coming Soon</span></h2>

          <p className="text-[14px] leading-[155%]">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>

        <form className="relative">
          <input 
            type="email"
            placeholder="Email Address"
            className="w-full pl-6 pr-22 py-2 h-12 border border-pink-400 rounded-[28px] placeholder:text-pink-400/50"  
          />

          <button 
            type="submit" 
            className="absolute right-0 top-0 flex justify-center items-center w-16 h-12 rounded-[28px] bg-linear-150 from-[#F8BFBF] from-15% to-[#EE8B8B] shadow-[0_15px_20px_rgba(198,110,110,0.25)]"
          >
            <img src={arrowIcon} />
          </button>
        </form>
      </div>
    </main>
  )
}

export default MainSection;