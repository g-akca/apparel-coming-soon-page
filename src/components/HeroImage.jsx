import heroMobile from "/images/hero-mobile.jpg";
import heroDesktop from "/images/hero-desktop.jpg";

function HeroImage() {
  return (
    <picture className="w-full">
      <source srcSet={heroDesktop} media="(width >= 1440px)" />
      <img
        src={heroMobile}
        alt="Woman with brown hair and orange shirt"
        className="max-h-75 w-full object-cover object-top tablet:max-h-100 desktop:max-h-none desktop:h-full"
      />
    </picture>
  )
}

export default HeroImage;