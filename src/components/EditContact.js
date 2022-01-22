import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditContact() {
  const {id} = useParams();
  const [name, setname] = useState("");
  const [number, setnumber] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const contacts = useSelector((state)=>state)
    const currentContact =contacts.find(contact=>(contact.id === parseInt(id)))

useEffect(() => {
  if(currentContact){

    setname(currentContact.name)
    setnumber(currentContact.number)
  }
}, [currentContact])

//!=========================== Validation on Edit Button =======================
const handleSubmit=(e)=>{
e.preventDefault()
const checkName = contacts.find(contact=>(contact.id!==parseInt(id) && contact.name === name));
const checkNumber = contacts.find(contact=>(contact.id!==parseInt(id) && contact.number === Number(number)) && number);
if(!name || !number){
    // return toast.warning("Please fill all the fields")
    return alert("Please fill all the fields")
}
else if(checkName){
  // return toast.error("This name already exist!")
  return alert('This name is already exists!')
}
else if(checkNumber){
  // return toast.error("This number already exist!")
  return alert('This number is already exists!')
}
 
const contactData = {
  id: parseInt(id),
  name,
  number,
}

//?=========================== Dispatch editContact =======================
dispatch({type: "EDIT_CONTACT",payload:contactData})
alert(`Contact "${contactData.name}" Updated`)
navigate('/show')
}

 return (
    <div>      
    {currentContact?(<>
      <h1>
       <header  className="text-center m-2">
         Edit Contact {id}
       </header>
     </h1>
     <div className="col-md-4 shadow m-auto p-5">
     <form onSubmit={handleSubmit}>
         <div className="form-group">
             <input type="text" placeholder="Name" value={name} onChange={e=>setname(e.target.value)}  className="form-control mb-3"/>
         </div>
         <div className="form-group">
             <input type="number" placeholder="Number" value={number} onChange={e=>setnumber(e.target.value)} className="form-control mb-3" />
         </div>
         <div className="form-group">
             <Link to="/" className="btn btn-secondary me-3">Cancel</Link>
             <input type="submit" value={"Edit"} className="btn btn-success" />
         </div>
     </form>
     </div>
   </>  
    ):<div><h2 className="text-center m-5">Student contact with id <b>"{id}"</b> not present</h2></div>}
    </div>    
  );
}
export default EditContact;
