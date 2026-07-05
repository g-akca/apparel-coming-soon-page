import logoImg from "/images/logo.svg";

function Header() {
  return (
    <header className="p-8 tablet:px-20">
      <img src={logoImg} className="h-5" />
    </header>
  )
}

export default Header;