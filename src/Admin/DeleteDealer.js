import { useState } from "react";
import $ from "jquery";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function App() {

  // Form requirements
  const [data,setData] = useState(
    {

      D_name:"",
      D_id:"",
      D_address:"",
      D_phone:"",

    }
  )

  const handleChange=(e)=>
  {
    setData({...data,[e.target.name]: e.target.value});
  }
   const submitForm=(e)=>
   {
    e.preventdefault();
    const form = $(e.target);
    const send_data = 
    {
      D_name: data.Dealer_Name,
      D_id: data.Dealer_Id,
      D_address: data.Dealer_Address,
      D_phone: data.Phone_Number,

    }
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
          
      },
  });
   }


  return (
    <div >
      <h1>Add Dealer </h1>

   <form action="http://localhost/dealer_delete.php" onSubmit={submitForm}>

    <MDBContainer className="p-3 my-5 d-flex flex-column w-25" >

      <MDBInput wrapperClass='mb-4' label='Dealer Id' id='form2' type='Dealer_Id' name="Dealer_Id"/>
    
    

      <MDBBtn className="mb-4">Delete</MDBBtn>

      

    </MDBContainer>
    
   </form>
    </div>
  );
}

export default App;