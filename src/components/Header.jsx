import logoImg from "/images/logo.svg";

function Header() {
  return (
    <header className="p-8 tablet:px-20 desktop:p-0">
      <img src={logoImg} className="h-5 desktop:h-8" />
    </header>
  )
}

export default Header;