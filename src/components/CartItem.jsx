import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({cart, setCart}) => {
  return (
    <>
    <div className="container">
    {
    cart.length===0?(
      <>
      <h1>Your cart is empty</h1>
      <Link to="/" className='btn btn-warning'>Continue Shopping</Link>
      </>
    ):
    cart.map((product)=>{
      return(
        <>
        <div className="card mb-3 my-3" style={{width: '700px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.imgSrc} className="img-fluid rounded-start" alt="Network error"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary">
                        {product.price}$
                      </button>
                      <button
                        className="btn btn-warning mx-3"
                      >
                        Buy Now
                      </button>
          </div>
        </div>
      </div>
    </div>
        </>
      )
    })}
    </div>
    {
      cart.length!=0 &&(
        <div className="box text-center my-5">
      <button className='btn btn-warning mx-5'>Check Out</button>
      <button className='btn btn-danger mx-5' onClick={()=>setCart("")}>Clear Cart</button>
    </div>
      )
    }
    
    </>
  )
}

export default CartItem
