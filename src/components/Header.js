import { Link } from "react-router-dom";
import './styles/Header.css';

function Header() {
  return (
    <header>
      <h1>FreshMenu</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
