import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Orderitem() {
    const [orderedData, setOrderdData] = useState([])

    function gettingData() {
        axios.get("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/CartData" )
            .then((res) => {
                console.log(res.data);
                setOrderdData(res.data)
            })
    }
    function ItemDelete(e,id) {
        e.preventDefault()
        axios.delete("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/CartData/"+id)
        .then((res)=>{
          console.log(res.data);
          gettingData();
        })
    }

    useEffect(()=>{
        gettingData();
    },[])
    return (
        <>

            <Navbar />

            <TableContainer >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            {/* <TableCell >Image</TableCell> */}

                            <TableCell>Title</TableCell>
                            <TableCell >Category</TableCell>
                            <TableCell >Quantity</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >MRP</TableCell>
                            <TableCell >Image</TableCell>
                            <TableCell  >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderedData.map((eachdat, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell >{eachdat.title}</TableCell>
                                        <TableCell >{eachdat.category}</TableCell>
                                        <TableCell >{eachdat.quantity}</TableCell>
                                        <TableCell >{eachdat.subtotal}</TableCell>
                                        <TableCell >{eachdat.mrp}</TableCell>
                                        <TableCell ><img src={eachdat.image} style={{ width: "90px" }} /> </TableCell>

                                       

                                        <TableCell  ><Button variant="contained" onClick={((e) => ItemDelete(e, eachdat.id))}>Delete</Button></TableCell>
                                        {/* <TableCell ><img src="{eachdata.image}" alt="d" srcset="" /></TableCell> */}
                                    </TableRow>
                                    



                                )
                            })
                        }

                    </TableBody>
                </Table>
             <Link to={"/bill"}><Button variant="contained" sx={{marginTop:"30px", marginLeft:"10px"}}>Bill</Button></Link>

            </TableContainer>

        </>
    )
}

export default Orderitem