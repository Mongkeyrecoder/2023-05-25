import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productcard = (props) => {
  const navigate=useNavigate()

  const showDetail=()=>{
    navigate(`/product/${props.item.id}`);
  }
  return (
    <div className='card-list' onClick={()=>{
      showDetail();
    }}>
      <img src={props.item?.img}/>
      <div>{props.item?.choice==true?'concious choice':''}</div>
      <div>{props.item?.title}</div>
      <div>{props.item?.price}</div>
      <div>{props.item?.new==true?'신제품':''}</div>
    </div>
  )
}

export default Productcard
