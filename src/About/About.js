import React from 'react'
import Nav_bar from '../Nav_bar/Nbar'
import ImgScroll from '../ImgScroll/ImgScroll'
import Product from '../Product/Product'

function About() {
  return (
    <div>
      <Nav_bar/>
      <ImgScroll/>
      <h1>Top Products</h1>
      <div className='Products'>
      <Product/>
      <Product/>
      </div>
       
        <form action="">
        <h1>Contact Us</h1>
        <p>Email: vmsdbms@gmail.com </p> 
        <p>Phone Number: +91 7507491160</p>
        </form>
      
     
     
     
    </div>
  )
}

export default About
