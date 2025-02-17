import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({image, title, id}: any) {

  const navigate = useNavigate();

  return (
    <div className="card" style={{"width": "18rem"}} onClick={()=>{navigate(`product-detail/${id}`)}}>
      <div className='card-image-wrapper'>
      <img src={image} className="card-img-top" alt="..."></img>

      </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Add To Cart</a>
    </div>
  </div>
  )
}
