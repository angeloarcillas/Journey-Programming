import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">About Page</h2>
      <Link to="/" className="text-sm">
        Home
      </Link>
    </div>
  );
};

export default About;
