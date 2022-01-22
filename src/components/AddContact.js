import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

function AddContact() {
    const [name, setname] = useState("");
    const [number, setnumber] = useState("")

    const contacts = useSelector((state)=>state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

//!=========================== Validation on Add Button =======================
    const handleSubmit=(e)=>{
    e.preventDefault()
    const checkName = contacts.find(contact=>(contact.name === name) && name);
    const checkNumber = contacts.find(contact=>(contact.number === Number(number)) && number);
    if(!name || !number){
    // return toast.warning("Please fill all the fields")
    return alert("Please fill all the fields")
}
else if(checkName){
  // return toast.error("This name already exist!")
  return alert('This name is already exist!')
}
else if(checkNumber){
  // return toast.error("This number already exist!")
  return alert('This number is already exist!')
}
 
const contactData = {
  id: contacts[contacts.length -1].id +1,
  name,
  number,
}

//?=========================== Dispatch addContact =======================
dispatch({type: "ADD_CONTACT",payload:contactData})
alert(`New Contact "${contactData.name}" added`)
navigate('/show')
}

  return (
    <div>
      <h1>
        <header  className="text-center m-2">
          Add Contact
        </header>
      </h1>
      <div className="col-sm-4 shadow m-auto p-5">
      <form onSubmit={handleSubmit}>
          <div className="form-group">
              <input type="text" placeholder="Name"  className="form-control mb-3" value={name} onChange={e=>setname(e.target.value)}/>
          </div>
          <div className="form-group">
              <input type="number" placeholder="Number" className="form-control mb-3" value={number} onChange={e=>setnumber(e.target.value)} />
          </div>
          <div className="form-group">
              <Link to="/" type="submit" className="btn btn-secondary me-3">Cancel</Link>
              <input type="submit" value={"Add"} className="btn btn-primary" />
          </div>
      </form>
      </div>
    </div>
  );
}
export default AddContact;
