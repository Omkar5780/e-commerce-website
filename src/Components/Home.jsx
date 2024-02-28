import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';


function Home() {

    const [image, setImage] = useState([])

    function Carddata() {
        axios.get("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data")
            .then((res) => {
                console.log(res.data);
                setImage(res.data);
            })
        console.log(setImage);
    }
    // function HandleAdd(eachdat) {
    //     // alert(id)
    //     console.log(eachdat);
    //   localStorage.setItem("name",JSON.stringify(eachdat));

    // }

    function HandleAdd(eachdat) {
        var existingData = localStorage.getItem("name1");
        if (existingData) {
            existingData = JSON.parse(existingData);
    
            let isProductAlreadyAdded = false;
    
            for (let i = 0; i < existingData.length; i++) {
                if (existingData[i].id === eachdat.id) {
                    isProductAlreadyAdded = true;
                    break;
                }
            }
    
            if (isProductAlreadyAdded) {
                alert("Product is already added to the cart!");
            } else {
                existingData.push(eachdat);
    
                localStorage.setItem("name1", JSON.stringify(existingData));
    
                console.log(JSON.parse(localStorage.getItem("name1")));
            }
        } else {
            localStorage.setItem("name1", JSON.stringify([eachdat]));
    
            console.log(JSON.parse(localStorage.getItem("name1")));
        }
        location.reload();

        
    }

    

    useEffect(() => {
        Carddata();
    }, [])
    return (

        <>
            <Navbar />
            <div className=''>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img height={"500px"} src="https://s3images.coroflot.com/user_files/individual_files/494449_LngVoXEJTXlVmBD0BVeVbLJwZ.jpg" class="d-block w-100 " alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img height={"500px"} src="https://i.pinimg.com/originals/6e/5b/12/6e5b120d74a2e1ee41497b14045e8ae6.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img height={"500px"} src="https://img.freepik.com/premium-psd/sport-shoes-sale-social-media-post-facebook-banner-web-banner-template_70055-845.jpg" class="d-block w-100" alt="..." />
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <br />

            <h1>Products</h1>
            <br />

            <div className="container">
                <div className="col-lg-12">
                    <div className="row">
                        {
                            image.map((eachdat) => {
                                return (
                                    <div className="col-lg-4 col-sm-6  mt-5">



                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={eachdat.image}

                                            />
                                            <CardContent>
                                                <h5 style={{ textAlign: "center" }}> {eachdat.title} </h5>



                                                <h6 style={{ textAlign: "center" }} >Price = {eachdat.price} /-</h6>


                                            </CardContent>
                                            <CardActions>
                                                <Button variant='contained' onClick={((e) => HandleAdd(eachdat))} color='success' sx={{ marginLeft: "70px" }} size="small">Add To Cart</Button>

                                                <Link to={"/Cart/" + eachdat.id}>
                                                    <Button variant='contained' color='success' sx={{ marginLeft: "0px" }} size="small">Buy</Button>
                                                </Link>

                                                {/* <Button size="small">Learn More</Button> */}
                                            </CardActions>
                                        </Card>


                                    </div>
                                )
                            })
                        }

                    </div>

                </div>



            </div>


            <Footer />
        </>
    )
}

export default Home