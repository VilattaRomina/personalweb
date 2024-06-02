import experience from "../../../assets/experience.json";
import Card from "../../../components/Card";
import useIntersection from "../../../hooks/UseIntersection";

const Experiences = () => {
  const [elementoRef, isIntersecting] = useIntersection({ threshold: 0.5 });

  return (
    <section className="flex md:flex-row md:flex-wrap flex-col justify-center items-center gap-5 section " id="experiences">
      {experience.map((exp, index) => (
        <div key={exp.id} ref={index === 0 ? elementoRef : null}>
          <Card
            title={exp.title}
            location={exp.location}
            time={exp.time}
            description={exp.description}
            isVisible={isIntersecting}
          />
        </div>
      ))}
    </section>
  );
};

export default Experiences;
