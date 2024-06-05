import { Link } from "react-router-dom";
import Balance from "./Balance";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <a href="">Home</a>
        </Link>
        <Link to="/add">
          <a href="">Transaction</a>
        </Link>
      
      </nav>
      <Balance />
    </>
  );
};

export default Navigation;
