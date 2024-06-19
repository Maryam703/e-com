import React from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../Data/DataApi'
import './Card.css'

export default function Card() {
    const {id} = useParams()

    const data = Products.find((data) => {
      return  data.id === parseInt(id)
    })
    console.log(data)

    if (!data) (<div>No Data Found!</div>)
  return (
    <>
    <div className='box'>
      <div className='card-box'>
        <div className='img-box'>
        <img className='card-img' src={data.image} alt="Girl in a dress"/>
        </div>
        <div className='card-detail'>
            <div className='titel-box'>{data.titel}</div>
            <div className='cetagory-box'>{data.cetagory}</div>
            <div className='price-box'>{data.Price}</div>
            <div className='desc-box'>{data.description}</div>
            <div className="cart-box">Add to Cart</div>
        </div>
      </div>
    </div>
    </>
  )
}
