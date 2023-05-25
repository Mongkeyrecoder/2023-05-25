import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
   return props.authenticate==true? <ProductDetail/> : <Navigate to='/login'></Navigate>


}

export default PrivateRoute
