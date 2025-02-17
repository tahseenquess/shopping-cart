import React, { useEffect, useState } from 'react'
import Banner from '../component/banner'
import Card from '../component/card'
import axios from 'axios'

interface Product  {
    image: string;
    title: string;
    id: string;
    description: string;
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = function () {
        axios.get(`https://fakestoreapi.com/products`) //constant file
            .then(res => {
                setProducts(res.data);
            }).catch((error)=>{
                console.log(error);
            })
    }
    return (
        <>
            <Banner />
            <div className='d-flex p-5 item-list-wrapper'>
                {products.map((product, index) => (
                    <div key={index}>
                    <Card image={product.image} title={product.title} id={product.id} description={product.description} />
                    </div>
                ))}
            </div>
        </>

    )
}
