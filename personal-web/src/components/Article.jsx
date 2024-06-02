import "./Article.css";

const Article = ({ image, name, link }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <p>{name}</p>
          </div>
          <div className="back">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
      <div className="link">
        <a href={link} target="_blank">
          {link}
        </a>
      </div>
    </div>
  );
};

export default Article;
