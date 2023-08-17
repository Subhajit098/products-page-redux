import React from 'react'

export default function DisplayData({props}) {
  return (
    {props.map(element=>(
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
    ))}
  )
}
