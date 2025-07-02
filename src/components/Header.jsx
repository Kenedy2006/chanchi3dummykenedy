import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Tienda</Link>
        
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/list">Catálogo</Link>
          <Link className="nav-link" to="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;