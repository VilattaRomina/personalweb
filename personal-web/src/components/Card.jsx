    import './Card.css'
    
    const Card = ({ title, location, time, description, isVisible }) => {
      return (
        <div className={`card ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-bold md:text-xl text-sm md:mb-2">{title}</h2>
            <div>
            <span className="text-secondary md:text-base text-xs">{location}</span> <span className="text-primary md:text-base text-xs">| {time}</span>
            </div>
            <p className='pt-2 md:text-sm text-xs'>{description}</p>
        </div>
      );
    };

    export default Card;
