import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {

  interface Product {
    image: string;
    title: string;
    id: string;
    description: string;
  }

  const { id } = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetchProduct();
  }, [id])

  const fetchProduct = function () {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
  }
  return (
    <div className='p-5'>
      <div className='row'>
        <div className='col-md-4 text-center'>
          <img src={product?.image} width={'80%'} />
        </div>
        <div className='col-md-8 pt-5 '>
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>


    </div>
  )
}
