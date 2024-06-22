import { projects } from "../../assets/projects";
import Article from "../../components/Article";


const Proyects = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-4 pt-5 " >  
    <h1 className="text-light text-4xl">/.Work</h1>
    <p className="text-light text-xs">Selected work I have taken on in the past.</p>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {projects.map((proyect) => (
          <Article
            key={proyect.id}
            name={proyect.name}
            image={proyect.img}
            link={proyect.link}
          />
        ))}
      </div>
    </main>
  )
};

export default Proyects;