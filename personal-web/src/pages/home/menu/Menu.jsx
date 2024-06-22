import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="section flex justify-center items-center " id="menu">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10 md:h-96 max-w-4xl p-10">
        <div className="flex flex-col md:pr-10 md:border-r-2 md:border-r-light h-full justify-between gap-8">
          <h1 className="md:text-5xl text-xl text-light text-primary text-start">
            Check out my most recent work!
          </h1>
          <p className="text-light md:text-2xl text-lg text-start">
            Open source projects, web apps and experiments.
          </p>
          <Link to="/projectos">
            <Button text="Projects" />
          </Link>
        </div>
        <div className="flex flex-col md:pl-10 h-full justify-between gap-8">
          <h1 className="md:text-5xl text-xl text-light text-primary text-start">
            Send me a message!
          </h1>
          <p className="text-light md:text-2xl text-lg text-start">
            If you have any questions or want to contact me.
          </p>
          <Link to="/formulario">
            <Button text="Contact me" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
