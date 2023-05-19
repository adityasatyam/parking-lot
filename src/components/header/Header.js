import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <Link className="btn" to="/">
        View available Parking
      </Link>
      <Link className="btn" to="/book">
        Enter Parking
      </Link>
      <Link className="btn" to="/delete">
        Exit Parking
      </Link>
    </div>
  );
};

export default Header;
