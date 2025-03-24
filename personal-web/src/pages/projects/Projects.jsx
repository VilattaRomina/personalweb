import { projects } from "../../assets/projects";
import Article from "../../components/Article";

const Proyects = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-6 pt-10 w-full px-4 md:px-10">
      <h1 className="text-light text-4xl font-bold">/.Work</h1>
      <p className="text-light text-sm text-center max-w-2xl">
        Selected work I have taken on in the past.
      </p>

      <div className="flex justify-center items-center flex-wrap gap-4 w-full max-w-6xl">
        {projects.filter(p => p.img).map((project) => (
          <Article
            key={project.id}
            name={project.name}
            image={project.img}
            link={project.link}
          />
        ))}
      </div>

      {projects.some(p => !p.img) && (
        <div className="w-full max-w-4xl mt-6">
          <h2 className="text-light text-2xl font-semibold mb-4 text-center">Other Projects</h2>
          {projects.filter(p => !p.img).map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg shadow-md hover:bg-zinc-800 transition mb-4"
            >
              <h3 className="text-light text-lg font-medium border-b border-zinc-700 pb-2 mb-2">{project.name}</h3>
              <ul className="space-y-2">
                {project.description.split('\n').map((line, index) => {
                  const [title, desc] = line.replace('- **', '').replace('**:', ':').split(': ');
                  return (
                    <li key={index} className="flex justify-between text-gray-400 text-sm">
                      <span className="font-medium text-light">{title}</span>
                      <span className="text-gray-300">{desc}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Proyects;