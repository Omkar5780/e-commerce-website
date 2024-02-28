import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

import axios, { all } from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Materialicon from './Materialicon'


function Cart() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);



  let navigate = useNavigate()

  let allcount = cart.price * count

  // console.log(cart);
  // console.log(allcount);


  const handleIncrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1)

    }

  }
  const HandleDecrement = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1)

    }

  }



  let { id } = useParams();




  function CartData() {

    axios.get("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data/" + id)
      .then((res) => {
        console.log(res.data);
        setCart(res.data)
      })
  }
  useEffect(() => {
    if (id) {
      CartData();

    }
  }, [])




  let alluserdata = localStorage.getItem("username")



  function HandlePassData() {

    if (alluserdata) {

      let order = {
        title: cart.title,
        category: cart.category,
        price: cart.price,
        mrp: cart.mrp,
        image: cart.image,
        subtotal: allcount,
        quantity: count,
      }
      // console.log(order);
      // alert("hllo")
      // e.preventDefault()
      axios.post("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/CartData", order)
        .then((res) => {
          console.log(res.data);
          setCart(res.data)
        })
      navigate("/order")

    } else {

      navigate("/userLogin")

      let order = {
        title: cart.title,
        category: cart.category,
        price: cart.price,
        mrp: cart.mrp,
        image: cart.image,
        subtotal: allcount,
        quantity: count,
      }
      // console.log(order);
      // alert("hllo")
      // e.preventDefault()
      axios.post("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/CartData", order)
        .then((res) => {
          console.log(res.data);
          setCart(res.data)
        })
    }

  }




  return (
    <>
      <Navbar />
      <div className='d-flex'>
        <h3 className='p-3'>MY SHOPING CART</h3>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <CardMedia
              sx={{ height: 340 }}

              image={cart.image}
            />
          </div>
          <div className="col-lg-5 mt-5">
            <CardContent>
              <h3 style={{ textAlign: "center" }}>  {cart.title} </h3>

              <h5 style={{ textAlign: "center" }} >Price = {allcount} /-</h5>
              <hr />
              {/* <Materialicon/> */}
              {/* <NumberInput aria-label="Quantity Input"  /> */}
              <Box className='d-flex' style={{ marginLeft: "110px" }}>
                <Button variant="contained" onClick={handleIncrement}>-</Button>
                {/* <input type="text" className='form-control w-25' /> */}
                <Box className='form-control text-center w-25'>{count}</Box>
                <Button variant="contained" onClick={HandleDecrement}>+</Button>
              </Box>


              <hr />
            </CardContent>
            <CardActions>
              <Button variant='contained' onClick={((e) => HandlePassData(e))} color='success' sx={{ marginLeft: "170px" }} size="small">Order Now</Button>



              <div>

              </div>
            </CardActions>
          </div>
        </div>
      </div>



    </>
  )
}

export default Cart