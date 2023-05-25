import React, { useEffect, useState } from 'react'
import Productcard from '../component/Productcard';
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = (props) => {

  const [productList ,setProductlist]=useState([]);
  const [query,setQuery]=useSearchParams();

  const getProdcuts=async()=>{
    let searchQuery=query.get('q') || "";
    console.log("쿼리값은",searchQuery);
    let url=`https://my-json-server.typicode.com/Mongkeyrecoder/2023-05-25http:/products?q=${searchQuery}`;
    let response= await fetch(url);
    let data= await response.json();
    setProductlist(data)
  }
  useEffect(()=>{
    getProdcuts();
  },[query]);
  return (
    <div>
      <Container>
        <Row>
          {
            productList.map((menu)=>{
              return <Col lg={3} key={menu.id}><Productcard   item={menu}/></Col>
            })
          }
        </Row>
      </Container>
       
    </div>
  )
}

export default ProductAll
