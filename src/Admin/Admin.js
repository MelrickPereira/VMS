import React from 'react'
import DealerForm from './AddDealerForm'
import UpdateDealer from './UpdateDealer'
import DeleteDealer from './DeleteDealer'

function Admin() {
  return (
    <div >
   
    <div>
        <h3 style={{textAlign:"left",marginLeft:"15px"}}>Dealer Details</h3>
        <DealerForm/>
        <UpdateDealer/>
        <DeleteDealer/>
    </div>
    <div>
        <h3 style={{textAlign:"left",marginLeft:"15px"}}>Product Details</h3>
        
    </div>
    
    </div>
  )
}

export default Admin
