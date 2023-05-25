import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  const [product,setProduct]=useState(null);
  let{id}=useParams();
  const getProductDetail=async()=>{
    
    let url=`https://my-json-server.typicode.com/Mongkeyrecoder/2023-05-25http:/products/${id}`;
    let response=await fetch(url);
    let data=await response.json();
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <DropdownButton  id="dropdown-basic-button" title="사이즈 선택" className='drop-btn'>
            <Dropdown.Item href="#/action-2">8</Dropdown.Item>
            <Dropdown.Item href="#/action-3">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">X</Dropdown.Item>
          </DropdownButton>
          <button>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
