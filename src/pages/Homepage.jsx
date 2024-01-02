import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-4xl lg:text-4xl dark:text-white">
        Recomenda Cursos Online
      </h1>
      <Link
        className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
        to="/depilacao-profissional"
      >
        1 - Depilação Profissional
      </Link>
      <br />
      <hr />
      <Link
        className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
        to="/sobrancelha-perfeita"
      >
        2 - Sobrancelha Perfeita
      </Link>
      <br />
      <hr />
      <Link
        className="font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline"
        to="/viver-cilios"
      >
        3 - Viver de Cílios
      </Link>
      <br />
      <hr />
    </div>
  );
};

export default Homepage;
