import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <nav className="navbar">
            <Link to="/" className="link"> Start </Link>
            <Link to="/p1" className="link"> Articles </Link>
            <Link to="/p2" className="link"> To Do List </Link>
        </nav>
    );

}