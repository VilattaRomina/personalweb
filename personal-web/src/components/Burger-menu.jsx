import { useState } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <div
        onClick={toggleMenu}
        className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:bg-slate-200 transition-all duration-300"
      >
        <div className={`space-y-2 ${isOpen ? 'open' : ''}`}>
          <span
            className={`block h-1 w-6 origin-center rounded-full bg-primary transition-all duration-300 ease-in-out ${
              isOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-1 w-6 origin-center rounded-full bg-secondary transition-all duration-300 ease-in-out ${
              isOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          ></span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-20 top-12 mt-2 w-48 bg-medium rounded-lg shadow-lg text-light">
          <ul className="flex flex-col p-2 items-center gap-6">
            <li className="p-1 hover:underline">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="p-1 hover:underline">
              <Link to="/projectos" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="p-1 hover:underline">
              <Link to="/formulario" onClick={toggleMenu}>Form</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
