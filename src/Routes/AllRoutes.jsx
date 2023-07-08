import React from 'react'
 import Home from '../Pages/Home'
 import Product from '../Pages/Product'
import  {Route , Routes} from "react-router-dom"
import Login1 from '../Pages/Login1'
import SignUp from '../Pages/Signup'
const AllRoutes = () => {
  return (

    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}  ></Route>
        <Route path='/login' element={<Login1/>}  ></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>

    </div>

  )
}

export default AllRoutes