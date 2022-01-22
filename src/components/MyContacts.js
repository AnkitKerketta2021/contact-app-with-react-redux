import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const contacts = useSelector(state => state);
  const dispatch = useDispatch()

//?=========================== Dispatch deleteContact =======================
  const deleteContact = (id)=>{
    const isDeleted = window.confirm("Are you really want to delete this contact ")
    if(isDeleted === true){
      dispatch({type:"DELETE_CONTACT",payload:id})
      // alert("Contact Deleted Successfully")
    }
    else{
      return null
    }
  }
  
  return <div>
      <div className="col-md-5 m-5 mx-auto">

      <table className="table table-hover">
        <thead className="text-white bg-dark text-center">
          <tr>
            <th scope="col">#Sl.no</th>
            <th scope="col">#Name</th>
            <th scope="col">#Number</th>
            <th scope="col">#Edit</th>
            <th scope="col">#Delete</th>
          </tr>
        </thead>

        <tbody>
          {
            contacts.map((contact,id)=>{
            return <tr key={id}>
              <td>{id+1}</td>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td><Link 
              to={`/edit/${contact.id}`}
               className="btn btn-primary">
                 <ion-icon name="create"/>
               </Link></td>
              <td><button type="button" className="btn btn-danger" onClick={()=>deleteContact(contact.id)}><ion-icon name="trash"/></button></td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
      </div>
}
export default Home;
