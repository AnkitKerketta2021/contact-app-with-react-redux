import { ToastContainer } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactApp from "./components/ContactApp";
import EditContact from "./components/EditContact";
import Home from "./components/MyContacts";
import Navbar from "./components/Navbar";

const App = () => {
  return <div className="App">
  <ToastContainer/>
  <Navbar/>
  <Routes>
  <Route path="/" element={<ContactApp/>}></Route>
  <Route path="/show" element={<Home/>}>
  </Route>
  <Route path="/add" element={<AddContact/>}>
  </Route>
  <Route path="/edit/:id" element={<EditContact/>}>
  </Route>
  </Routes>
  </div>;
};
export default App;
