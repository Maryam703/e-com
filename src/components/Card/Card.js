import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './Card.css'

export default function Card() {
    const {id} = useParams()
    const [product, setProducts] = useState({})
    const [loader, setLoader] = useState(true)

    useEffect(() => {
      const fetchingData = async() => {
        try {
          let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
          setProducts(res.data);
          setLoader(false);
          
        } catch (error) {
          console.log(error);
          setLoader(false);
        }
      }
      fetchingData();
    }, [id])

    const btnHandler = (Id) => {
     console.log(product)
    
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      
       if(product){
        cart.push({...product, quantity:1});
       }
    
       localStorage.setItem("cart", JSON.stringify(cart))
    
      }

    if (loader) {
      return <Loader />
    }

  return (
    <>
    <div className='box'>
      <div className='card-box'>
        <div className='img-box'>
        <img className='card-img' src={product.image} alt="product image"/>
        </div>
        <div className='card-detail'>
            <div className='titel-box'>{product.title}</div>
            <div className='cetagory-box'>{product.category}</div>
            <div className='price-box'>${product.price}</div>
            <div className='desc-box'>{product.description}</div>
            <button onClick={btnHandler} className="cart-box" >Add to cart</button >
        </div>
      </div>
    </div>
    </>
  )
}
