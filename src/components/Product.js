import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product() {
    const [products,setProducts]=useState([]);
    const URL="https://fakestoreapi.com/products"
    useEffect(()=>{
        const getProducts=async()=>{
            const response=await fetch(URL);
            const data=await response.json();
            setProducts(data);
        }
        getProducts();
    },[])

    const card=products.map(product=> 
        (
        <div className='col-md-3'>
        <Card style={{ width: '18rem' }} key={product.id} className='h-100'>
        <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{width:"100px",height:"150px"}}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
      </Card.Body>
      </div>
      <Card.Footer>
      <Button variant="primary">Move to cart</Button>
      </Card.Footer>
    </Card>
    </div>
        ))

  return (
    <>
   <h3>Product</h3>
   <div className='row'>
   {card}
   </div>
    </>
  )
}
