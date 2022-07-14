import React, {Component} from "react";//import "../layout/Announcements.css";
import Web3 from 'web3'

import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"
import '../css/payementform.css'

import 'bootstrap'
import '../css/style.css'
import '../css/responsive.css'

import Sliderbg from '../images/slider-bg.jpg'
import Pricingbg from '../images/pricing-bg.jpg'
import w1 from '../images/w1.png'
import w2 from '../images/w2.png'
import w3 from '../images/w3.png'
import aboutimg from '../images/about-img.jpg'
import c1 from '../images/c1.jfif'
import c2 from '../images/c2.jfif'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CryptoPayementForm extends Component {

    componentWillMount() {
        this.loadBlockchainData()
        this.returnAccount()
      }
    
      async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider /*|| "http://localhost:7545"*/)
        const accounts = await web3.eth.requestAccounts()
        this.setState({ account: accounts[0] })
        console.log({ account: accounts[0] });
    
      }
      async returnAccount(){
        document.createTextNode(this.state.account);
      }
      constructor(props) {
        super(props)
        this.state = { account: '' }
      }

    render() {
    return (


        <><div>

            <div class="hero_area">
                <div class="bg-box">
                    <img src={Sliderbg} alt="" />
                </div>
                <header class="header_section">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                                <span>
                                    Lockchain
                                </span>
                            </a>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class=""> </span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav  ">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html"> About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="pricing.html">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="why.html">Why Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="testimonial.html">Testimonial</a>
                                    </li>
                                </ul>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </header>
                <section class="slider_section ">
                    <div class="container">
                        <div class="detail-box col-md-9 mx-auto px-0">
                            <h1>
                                Find Parking Lot ,Buy With Crypto
                            </h1>
                            <p>
                                Your conncected with "{this.state.account}" wallet
                            </p>
                        </div>



                        <div class="find_form_container ">
                        <div class="container d-md-flex  align-items-center">
                <div class="card box1 shadow-sm p-md-5 p-md-5 p-4">
                    <div class="fw-bolder mb-4"><span class="fas fa-dollar-sign"></span><span class="ps-1">599,00</span></div>
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center justify-content-between text"> <span class="">Commission</span> <span class="fas fa-dollar-sign"><span class="ps-1">1.99</span></span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between text mb-4"> <span>Total</span> <span class="fas fa-dollar-sign"><span class="ps-1">600.99</span></span>
                        </div>
                        <div class="border-bottom mb-4"></div>
                        <div class="d-flex flex-column mb-4"> <span class="far fa-file-alt text"><span class="ps-2">payement adress:</span></span> <span class="ps-3">0x92C2B783783a5c0F44922b69382f935F1c6965B2</span> </div>
                        <div class="d-flex flex-column mb-5"> <span class="far fa-calendar-alt text"><span class="ps-2">Next payment:</span></span> <span class="ps-3">22 july,2018</span> </div>
                        <div class="d-flex align-items-center justify-content-between text mt-5">
                        </div>
                    </div>
                </div>
                <div class="card box2 shadow-sm">
                    <div class="d-flex align-items-center justify-content-between p-md-5 p-4"> <span class="h5 fw-bold m-0">Payment methods</span>
                        <div class="btn btn-primary bar"><span class="fas fa-bars"></span></div>
                    </div>
                    <ul class="nav nav-tabs mb-3 px-md-4 px-2">
                        <li class="nav-item"> <a class="nav-link px-2 active" aria-current="page" href="#">Metamask</a> </li>
                        <li class="nav-item"> <a class="nav-link px-2" href="#">Mobile Payment</a> </li>
                        <li class="nav-item ms-auto"> <a class="nav-link px-2" href="#">+ More</a> </li>
                    </ul>
                    <div class="px-md-5 px-4 mb-4 d-flex align-items-center">
                        <div class="btn btn-success me-4"><span class="fas fa-plus"></span></div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                            <label class="btn btn-outline-primary" for="btnradio1"><span class="pe-1">+</span>5949</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                            <label class="btn btn-outline-primary" for="btnradio2"><span class="lpe-1">+</span>3894</label>
                        </div>
                    </div>
                    <form action="">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Wallet adress</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control" type="text" value={this.state.account} /> <span class=""></span> </div>
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Name</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control text-uppercase" type="text" /> <span class="far fa-user"></span> </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-flex flex-column px-md-5 px-4 mb-4"> <span>Numberplate</span>
                                    <div class="inputWithIcon">
                                        <input class="form-control text-uppercase" type="text" /> <span class="far fa-user"></span> </div>
                                </div>
                            </div>
                            <div class="col-12 px-md-5 px-4 mt-3">
                                <div class="btn btn-primary w-100">Pay $599.00</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <section class="pricing_section layout_padding">
                <div class="bg-box">
                    <img src={Pricingbg} alt="" />
                </div>
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Our Pricing
                        </h2>
                    </div>
                    <div class="col-xl-10 px-0 mx-auto">
                        <div class="row">
                            <div class="col-md-6 col-lg-4 mx-auto">
                                <div class="box">
                                    <h4 class="price">
                                        $10
                                    </h4>
                                    <h5 class="name">
                                        Basic
                                    </h5>
                                    <p>
                                        Consequuntur iure, quam vero quidem minima obcaecati veniam, praesentium impedit quod repudiandae tempora amet deserunt rerum accusamus. Commodi qui, illum ad ipsa porro ipsum nostrum magni minus.
                                    </p>
                                    <a href="">
                                        Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mx-auto">
                                <div class="box box-center">
                                    <h4 class="price">
                                        $30
                                    </h4>
                                    <h5 class="name">
                                        Premium
                                    </h5>
                                    <p>
                                        Consequuntur iure, quam vero quidem minima obcaecati veniam, praesentium impedit quod repudiandae tempora amet deserunt rerum accusamus. Commodi qui, illum ad ipsa porro ipsum nostrum magni minus.
                                    </p>
                                    <a href="">
                                        Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mx-auto">
                                <div class="box">
                                    <h4 class="price">
                                        $20
                                    </h4>
                                    <h5 class="name">
                                        Standard
                                    </h5>
                                    <p>
                                        Consequuntur iure, quam vero quidem minima obcaecati veniam, praesentium impedit quod repudiandae tempora amet deserunt rerum accusamus. Commodi qui, illum ad ipsa porro ipsum nostrum magni minus.
                                    </p>
                                    <a href="">
                                        Read More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><section class="info_section ">

                <div class="container">
                    <div class="info_top ">
                        <div class="row ">
                            <div class="col-md-6 col-lg-3 info_col">
                                <div class="info_form">
                                    <h4>
                                        Stay Connected
                                    </h4>
                                    <form action="">
                                        <input type="text" placeholder="Enter Your Email" />
                                        <button type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                    <div class="social_box">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                        </a>
                                        <a href="">
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 info_col ">
                                <div class="info_detail">
                                    <h4>
                                        About Us
                                    </h4>
                                    <p>
                                        Necessitatibus, culpa, totam quod neque cum officiis odio, excepturi magnam incidunt voluptates sed voluptate id expedita sint! Cum veritatis iusto molestiae reiciendis deserunt vel odio incidunt, tenetur itaque. Ullam, iste!
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 info_col ">
                                <div class="info_detail">
                                    <h4>
                                        Online Booking
                                    </h4>
                                    <p>
                                        Accusantium quis architecto, necessitatibus libero nemo facere perferendis obcaecati pariatur magni quod praesentium provident nisi impedit nobis omnis. Assumenda vero impedit dolorum perspiciatis, ipsa quasi corrupti numquam.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 info_col">
                                <h4>
                                    Contact us
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </p>
                                <div class="contact_nav">
                                    <a href="">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Location: Brussels
                                        </span>
                                    </a>

                                    <a href="">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            Email : lockchaindeveloppement@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><footer class="footer_section">
                <div class="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <a href="/"> Lockchain</a>
                    </p>
                </div>
            </footer></div></>
    )
    }
}

export default CryptoPayementForm