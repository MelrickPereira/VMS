import React from 'react'
import './Showroom.css'
import brand2 from './Brands/ford.png'
import brand1 from './Brands/alfa-romeo-logo.png'
import brand3 from './Brands/aston-martin-logo.png'
import brand4 from './Brands/audi-logo.png'
import brand5 from './Brands/bentley-logo.png'
import brand6 from './Brands/bmw-logo.png'
import brand7 from './Brands/cadillac-logo.png'
import brand8 from './Brands/chevrolet-logo.png'
import brand9 from './Brands/ferrari-logo.png'
import brand10 from './Brands/jaguar-logo.png'
import brand11 from './Brands/lamborghini-logo.png'
import brand12 from './Brands/lexus-logo.png'
import brand13 from './Brands/lincoln-logo.png'
import brand14 from './Brands/mazda-logo.png'
import brand15 from './Brands/suzuki-logo.png'
import brand16 from './Brands/mercedes-benz-logo.png'
import brand17 from './Brands/peugeot-logo.png'
import brand18 from './Brands/rolls-royce-logo.png'
import brand19 from './Brands/toyota-logo.png'
import brand20 from './Brands/volkswagen-logo.png'
import brand21 from './Brands/volvo-logo.png'
import Product from "../Product/Product"
import {Link} from 'react-router-dom';
function Showroom() {
  return (
    <div >
      <h1 style={{margin:'20px',fontSize:"60px" }}>Showroom</h1>
      
        <div className='brand-list'>
        <img className = "brand" src={brand1} alt="d" />
        <img className = "brand" src={brand2} alt="d" />
        <img className = "brand" src={brand3} alt="d" />
        <img className = "brand" src={brand4} alt="d" />
        <img className = "brand" src={brand5} alt="d" />
        <Link to = "/showroom/bmw"><img className = "brand" src={brand6} alt="d" /></Link>
        <img className = "brand" src={brand7} alt="d" />
        <img className = "brand" src={brand8} alt="d" />
        <img className = "brand" src={brand9} alt="d" />
        <img className = "brand" src={brand10} alt="d" />
        <img className = "brand" src={brand11} alt="d" />
        <img className = "brand" src={brand12} alt="d" />
        <img className = "brand" src={brand13} alt="d" />
        <img className = "brand" src={brand14} alt="d" />
        <img className = "brand" src={brand15} alt="d" />
        <img className = "brand" src={brand16} alt="d" />
        <img className = "brand" src={brand17} alt="d" />
        <img className = "brand" src={brand18} alt="d" />
        <img className = "brand" src={brand19} alt="d" />
        <img className = "brand" src={brand20} alt="d" />
        <img className = "brand" src={brand21} alt="d" />
        
        </div>
      <h1>Recomended Brand Products</h1>
        <div className='Products'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
  )
}

export default Showroom
