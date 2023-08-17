import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { remove } from '../store/CartSlice'

export default function Cart() {
  const dispatch=useDispatch()
  const products=useSelector(state=> state.cart)

const remFromCart=(id)=>{
    dispatch(remove(id));
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
  <Button variant="primary" onClick={()=>remFromCart(product.id)}>Remove from cart</Button>
  </Card.Footer>
</Card>
</div>
    ))


  return (
    <>
    <h2 style={{marginBottom:"50px"}}>Cart Items</h2>
    <div className='row'>{cards}</div>
    </>
  )
}
