import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
// for dispatching the action from redux store
import { add } from '../store/CartSlice';

export default function Product() {
    const dispatch=useDispatch();
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

    const addToCart=(product)=>{
        //dispatch an add action
        dispatch(add(product));
    }

    const cards=products.map(product=> 
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
      <Button variant="primary" onClick={()=>addToCart(product)}>Move to cart</Button>
      </Card.Footer>
    </Card>
    </div>
        ))

  return (
    <>
   <h3>Product</h3>
   <div className='row'>
   {cards}
   </div>
    </>
  )
}
