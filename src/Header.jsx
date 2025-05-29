import { Link } from "react-router-dom";
import "./Header.css"; // Import custom CSS

const Header = ({ style, title }) => {
  return (
    <header className="header-container" style={{ ...style }}>
      <div className="d-flex justify-content-between align-items-center">
        <Link className="btn btn-outline-light back-btn" to={-1}>
          Back
        </Link>
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
