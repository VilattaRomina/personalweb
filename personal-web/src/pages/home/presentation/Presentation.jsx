import "./Presentation.css";
import perfil from "../../../assets/img/perfil.png";

const Presentation = () => {
  return (
    <section 
      className="md:grid md:grid-cols-3 gap-3 grid-cols-1 md:justify-between content-center items-center section max-w-4xl mx-auto p-5" 
      id="presentation"
    >
      <div className="md:col-span-2 col-span-1 text-start md:text-left p-5">
        <div className="text-2xl text-light font-normal flex flex-col gap-10">
        <h1 className="bg-clip-text-custom gradient-bg md:text-6xl text-5xl">
        Software Developer
        </h1>
          <p className="md:text-xl text-base tracking-wide" >With a focus on web application development.<br/> My primary goal is continuous improvement of my skills and knowledge.
          </p>
        </div>
      </div>
      <div className="md:col-span-1 col-span-1 text-start  md:justify-end ">
        <img
          src={perfil}
          alt="perfil"
          className="rounded-full md:w-60 md:h-60 w-40 h-40 drop-shadow-lg profile mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default Presentation;
