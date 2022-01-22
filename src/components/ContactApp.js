import React from 'react';
import { useNavigate } from 'react-router-dom';



function ContactApp() {
    const navigate = useNavigate()

    const navigateToMyContacts = ()=>{
    navigate('/show')
}
  return <div>
      <div className="containner text-center mt-5">
          <h1>My Contact App</h1>
          <h6>(React-Redux-App)</h6>
          <button onClick={navigateToMyContacts} className="btn btn-info text-white mt-3"><b>show my contacts</b></button>
      </div>
  </div>;
}

export default ContactApp;
