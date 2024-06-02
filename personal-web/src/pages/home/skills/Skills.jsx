import { FaHtml5, FaJava, FaReact, FaGithub, FaAngular, FaNode } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiMysql, SiMongodb, SiSelenium, SiPostman } from "react-icons/si";
import { AiOutlineGitlab } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import skills from "../../../assets/skills.json";
import "./Skills.css";

const Skills = () => {
  
  return (
    <section id="skills" className="flex justify-center items-center gap-10 section" >
      <div className="grid md:grid-cols-5 grid-cols-3 text-7xl md:gap-28 gap-10">
        {skills.map((item, index) => {
          const IconComponent = getIconComponent(item.icon);
          return (
            <div key={index} className="icon" title={item.label}>
              <IconComponent />
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Función para obtener el componente de icono correspondiente según el nombre proporcionado en el JSON
function getIconComponent(iconName) {
  switch (iconName) {
    case "IoLogoJavascript":
      return IoLogoJavascript;
    case "FaHtml5":
      return FaHtml5;
    case "IoLogoCss3":
      return IoLogoCss3;
    case "FaJava":
      return FaJava;
    case "FaReact":
      return FaReact;
    case "FaGithub":
      return FaGithub;
    case "AiOutlineGitlab":
      return AiOutlineGitlab;
    case "SiTypescript":
      return SiTypescript;
    case "SiMysql":
      return SiMysql;
    case "SiMongodb":
      return SiMongodb;
    case "SiSelenium":
      return SiSelenium;
    case "SiPostman":
      return SiPostman;
    case "TbBrandNextjs":
      return TbBrandNextjs;
    case "FaAngular":
      return FaAngular;
    case "FaNode":
      return FaNode;
    default:
      return null;
  }
}

export default Skills;
