import "./Presentation.css";
import perfil from "../../../assets/img/perfil.png";
const Presentation = () => {
  return (
    <section className="md:flex md:flex-row flex flex-col justify-center items-center gap-10 section" id="presentation">
      <div>
        <h1 className="text-light">
          ¡Hello! I&apos;m <span className="text-primary">Romi</span>
        </h1>
        <div className="text-5xl ">
          <span className="bg-clip-text-custom gradient-bg">
            Frontend Developer
          </span>
        </div>
      </div>
      <img
        src={perfil}
        alt="perfil"
        className="rounded-full w-60 h-60 drop-shadow-lg profile"
      />
    </section>
  );
};

export default Presentation;
