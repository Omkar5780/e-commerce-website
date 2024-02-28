import { Box, Breadcrumbs, Button, List, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function AddProducts() {
    let navigate = useNavigate()
    let navigate1 = useNavigate();
    let {id} = useParams();

 

    const [data, setData] = useState({
        title: "",
        category: "",
        price: "",
        mrp: "",
        image: "",
    })

    function HandleChange(e) {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function HandleSubmit(e) {
        e.preventDefault()
        // console.log(data);

        if (id===undefined) {
                axios.post("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data", data)
            .then((res) => {
                console.log(res.data);
                setData({
                    title: "",
                    category: "",
                    price: "",
                    mrp: "",
                    image: "",
                })
            })

        navigate("/admin/Products")
        } else {
            axios.put("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data/"+id,data)
            .then((res)=>{
              console.log(res.data);
               navigate1("/admin/Products")
            })
        }

    

    }
    function EditedData() {
        axios.get("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data/" + id)
            .then((res) => {
                console.log(res.data);
                setData({
                    title: res.data.title ,
                    category: res.data.category,
                    price: res.data.price,
                    mrp: res.data.mrp,
                })

            })
    }
    useEffect(() => {
        if (id) {
            EditedData();
            // console.log(id)
        }
    },[])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginTop: "100px",
                                padding: "10px"
                            }}
                        >
                            <TextField value={data.title} name='title' onChange={HandleChange} fullWidth label="Title" id="fullWidth" />
                        </Box>
                    </div>
                    <div className="col-lg-6">
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginTop: "100px",
                                padding: "10px"

                            }}
                        >
                            <TextField  value={data.category} name='category' onChange={HandleChange} fullWidth label="Category" id="fullWidth" />
                        </Box>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                    // marginTop: "100px",
                                    padding: "10px"

                                }}
                            >
                                <TextField  value={data.price} name='price' onChange={HandleChange} fullWidth label="Price" id="fullWidth" />
                            </Box>
                        </div>
                        <div className="col-lg-3">
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                    // marginTop: "100px",
                                    padding: "10px"

                                }}
                            >
                                <TextField  value={data.mrp} name='mrp' onChange={HandleChange} fullWidth label="MRP" id="fullWidth" />
                            </Box>
                        </div>
                        <div className="col-lg-6">
                            <Box
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                    // marginTop: "100px",
                                    padding: "10px",
                                    marginLeft: "13px"

                                }}
                            >
                                <TextField  name='image' value={data.image} onChange={HandleChange} className='form-file' fullWidth label="Image" id="fullWidth"/>
                            </Box>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Box
                                sx={{
                                    width: ' 90%',
                                    maxWidth: '100%',
                                    // marginTop: "100px",
                                    padding: "10px"

                                }}
                            >
                                <TextField onChange={HandleChange} fullWidth label="Description" id="fullWidth" type='textarea' />
                            </Box>
                        </div>
                    </div>
                </div>
                <br />

                <Stack spacing={2} direction="row">

                    <Button className='m-3' variant="contained" onClick={((e) => HandleSubmit(e))}>Submit</Button>

                </Stack>
            </div>



        </>
    )
}

export default AddProducts