import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const ProductDetail = ({cart, setCart}) => {
  const {id} = useParams();


  const [product, setProduct] = useState({});
  const [realtedproducts, setRealtedProduct] = useState([]);



  useEffect(()=>{
    const filterProduct = items.filter((product)=>product.id==id)
    // console.log(filterProduct);
    setProduct(filterProduct[0])

    const realtedproducts = items.filter((productre)=>productre.category===product.category)
    // console.log(Realtedproducts);
    setRealtedProduct(realtedproducts)
  },[id, product.category])
  return (
    <>
    <div className="container">
      <div className="img">
        <img src={product.imgSrc} alt="Poor Connection" />
      </div>
      <div className="box">
        <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">
                      {product.description}
                    </p>
                    <button  className="btn btn-primary">
                      {product.price}$
                    </button>
                    <button  className="btn btn-warning mx-3">
                      ADD To Cart
                    </button>
      </div>
    </div>
    <h2 className='text-center'>Related Products</h2>
    <Product cart={cart} setCart={setCart} items={realtedproducts}/>
    </>
  )
}

export default ProductDetail
