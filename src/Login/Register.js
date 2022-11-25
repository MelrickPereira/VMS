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

      email:"",
      password:""
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
      email: data.email,
      password: data.password,

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
    <div style={{margin:'10%'}}>
      <h1>Registration</h1>

   <form action="http://localhost/insert.php" onSubmit={submitForm}>

    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name="email"/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name="password"/>
     

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Register</MDBBtn>

      <div className="text-center">
        <Link to= "/login"><p>Already a member? <a >Sign in</a></p></Link>
   

      </div>

    </MDBContainer>
    
   </form>
    </div>
  );
}

export default App;