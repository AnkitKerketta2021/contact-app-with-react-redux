import { Link } from "react-router-dom";

function Navbar() {
return <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
         <Link to="/" className="navbar-brand ms-2 ml-5">React Redux Contact App <ion-icon name="contacts"/></Link>
         <Link to="/add" className="navbar-brand ms-4 ml-5"><button className="btn btn-outline-primary">Add New Contact</button></Link>
         <Link to="/show" className="navbar-brand ms-2 ml-5"><button className="btn btn-outline-primary">My Contacts</button></Link>
  </nav>;
}
export default Navbar;
