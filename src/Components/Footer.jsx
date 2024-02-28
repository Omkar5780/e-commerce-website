import React from 'react'

function Footer() {
    return (
        <>
            <br />
            <footer>
                <div className="container-fluid bg-dark text-white">

                    <div className="row p-5 ms-5 ">

                        <div className="col-lg-3">
                            <ul className='list-unstyled' >
                                <li ><h3>Support</h3></li>
                                <li ><a href="">Contact us</a></li>
                                <li><a href="">Promotions & Sale</a></li>
                                <li> <a href="">Track Order</a>
                                </li>
                                <li><a href="">Privacy Policy</a></li>
                                <li> <a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className='list-unstyled' >
                                <li className='mt-5'>
                                    <a href="">FAQs</a>  </li>
                                <li>
                                    <a href=""> My Account</a> </li>
                                <li>
                                    <a href=""> Return Policy</a> </li>
                                <li> <a href="">Tech Glossary</a>
                                </li>
                                <li>
                                    <a href=""> Initiate Return</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className='list-unstyled'  >
                                <li className=''><h3>About</h3></li>
                                <li><a href="">Company</a></li>
                                <li><a href="">Corporate News</a></li>
                                <li><a href="">Press Center</a>
                                </li>
                                <li><a href="">Investors</a></li>
                                <li><a href="">Sustainability</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Store Finder</a></li>
                                <li><a href="">PUMA DNA
                                </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className='list-unstyled'  >
                                <li className=''><h3>STAY UP TO DATE</h3></li>
                                <br />
                                <div className='d-flex justify-content-between'>
                                    <i class="fa-brands fa-youtube fa-xl"></i>
                                    <i class="fa-brands fa-twitter fa-xl"></i>
                                    <i class="fa-brands fa-pinterest fa-xl"></i>
                                    <i class="fa-brands fa-instagram fa-xl"></i>
                                    <i class="fa-brands fa-facebook fa-xl"></i>
                                </div>
                                <br />
                                <li className=''><h3>Explore</h3></li>
                                <div className='d-flex justify-content-evenly '>
                                    <img height={"60px"} src="data:image/jpeg;base64,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" alt="" />
                                    <img height={"60px"} src="data:image/jpeg;base64,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" alt="" />
                                </div>

                            </ul>

                        </div>
                        <hr />
                    </div>

                </div>




            </footer>
        </>
    )
}

export default Footer