import BurgerMenu from "../Burger-menu";
// import { SiGmail } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";



const Header = () => {


  return (
    <header className="fixed w-full py-4 px-6 z-50 flex justify-between">
    <div className="text-grey flex md:gap-9 gap-4 justify-center items-center text-xl">
        {/* <a href="">
        <SiGmail />
        </a> */}
        <a href="https://www.linkedin.com/in/rominavilattamontenegro/" target="_blank" className="cursor-pointer">
        <TfiLinkedin />
        </a>
        <a href="https://github.com/VilattaRomina" target="_blank" className="cursor-pointer">
        <SiGithub />
        </a>
        </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
