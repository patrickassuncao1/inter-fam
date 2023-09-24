import React from "react";
import { listTeam } from "../../utils/constants/lists";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { routeLinks } from "../../utils/constants/routes";

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-around items-center custom-bg-image rounded-md p-4">
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Equipe
        </h1>
        <ul className="max-w-md space-y-1 text-white">
          {listTeam.map((item) => (
            <li
              className="font-semibold text text-2xl md:text-3xl lg:text-4xl"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Link
          to={routeLinks.pageOne.path}
          className="bg-white text-red-800 w-44 h-32 flex items-center justify-center hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm text-center"
        >
          <BsFillPlayFill className="w-32 h-32" />
          <span className="sr-only">Play</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
