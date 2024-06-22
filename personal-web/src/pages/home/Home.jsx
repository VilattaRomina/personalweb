import Presentation from "./presentation/Presentation";
import Experiences from "./experiences/Experiences";
import Skills from "./skills/Skills";
import Menu from "./menu/Menu";
import SideNav from "../../components/SideNav";

const Home = () => {
  return (
    <main>
      <SideNav />
      <Presentation />
      <Experiences />
      <Skills />
      <Menu />
    </main>
  );
};

export default Home;
