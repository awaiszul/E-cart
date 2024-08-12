import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


const SearchItem = ({cart, setCart}) => {
  const {term} = useParams();
  const [filterproduct, setFilterProduct] = useState([]);

  useEffect(()=>{
    const filterproduct = ()=>{
      const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
      // console.log(data);
      setFilterProduct(data);
      // console.log(setFilterProduct);
    }
    filterproduct();
  },[term])
  return (
  <>
  <Product cart={cart} setCart={setCart} items={filterproduct}/>
  </>
  )
}

export default SearchItem
