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
      <h1>Update Dealer </h1>

   <form action="http://localhost/dealer_update.php" onSubmit={submitForm}>

    <MDBContainer className="p-3 my-5 d-flex flex-column w-25" >
      <MDBInput wrapperClass='mb-4' label='Dealer Id' id='form2' type='Dealer_Id' name="Dealer_Id"/>
      <MDBInput wrapperClass='mb-4' label='New Dealer Address' id='form1' type='Dealer_Address' name="Dealer_Address"/>
      <MDBBtn className="mb-4">Update</MDBBtn>
    </MDBContainer>

    
   </form>

   <form action="http://localhost/dealer_update.php" onSubmit={submitForm}>

    <MDBContainer className="p-3 my-5 d-flex flex-column w-25" >
    <MDBInput wrapperClass='mb-4' label='Dealer Id' id='form2' type='Dealer_Id' name="Dealer_Id"/>
    <MDBInput wrapperClass='mb-4' label='New Dealer Phone Number' id='form1' type='Dealer_Phone' name="Dealer_Phone"/>
    <MDBBtn className="mb-4">Update</MDBBtn>
    </MDBContainer>

</form>
    </div>
  );
}

export default App;