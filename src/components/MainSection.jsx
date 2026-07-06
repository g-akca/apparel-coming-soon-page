import { useState } from "react";
import arrowIcon from "/images/icon-arrow.svg";
import errorIcon from "/images/icon-error.svg";

function MainSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedEmail || !isValidEmail) {
      setMessage("Please provide a valid email.");
      setError(true);
      return;
    }

    setError(false);
    setMessage("Thanks! We’ll keep you updated.");
    setEmail("");
  };

  return (
    <div 
      className="
        px-8 max-w-127.25 self-center flex flex-col gap-8 desktop:px-0 
        desktop:max-w-111.25 desktop:self-start desktop:grow desktop:justify-center
      "
    >
      <div className="flex flex-col gap-4 tablet:gap-8 text-center desktop:text-start">
        <h2 className="uppercase text-[40px] tablet:text-[64px] leading-[100%] tablet:leading-[110%] tracking-[10px] tablet:tracking-[17.5px] font-light">We're <br/><span className="font-semibold text-gray-900">Coming <br/> Soon</span></h2>

        <p className="text-[14px] leading-[155%] tablet:text-base tablet:leading-base">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
      </div>

      <div className="flex flex-col gap-2">
        <form className="relative" noValidate onSubmit={handleSubmit}>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className={`
              w-full pl-6 tablet:pl-8 pr-30 tablet:pr-38 py-2 h-12 tablet:h-14 text-gray-900
              border border-pink-400 rounded-[28px] placeholder:text-pink-400/50
              focus:outline-pink-400 ${error ? "border-red-400 border-2 focus:outline-none" : ""}
            `}
          />

          <div className="absolute right-0 top-0 flex items-center gap-2 tablet:gap-4">
            {error && <img src={errorIcon} className="w-6 aspect-square" />}
            
            <button 
              type="submit" 
              className="
                flex justify-center items-center w-16 tablet:w-25 h-12 tablet:h-14 
                rounded-[28px] bg-linear-150 from-[#F8BFBF] from-15% to-[#EE8B8B] 
                shadow-[0_15px_20px_rgba(198,110,110,0.25)] cursor-pointer focus:outline-pink-400
              "
            >
              <img src={arrowIcon} />
            </button>
          </div>
        </form>

        {message && (
          <p className={`text-[13px] leading-base pl-6 tablet:pl-8 ${error ? "text-red-400" : "text-green-500"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default MainSection;