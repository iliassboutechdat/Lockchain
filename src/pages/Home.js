import Web3 from 'web3'
//import './App.css'
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
//import {  } from '@fortawesome/free-solid-svg-icons'


import React, {Component} from "react";//import "../layout/Announcements.css";


class Home extends Component {  
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
          <div>
            
            <div class="hero_area">
                    <div class="bg-box">
                        <img src={Sliderbg} alt=""/>
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
                            <div class="find_form_container">
                                <form action="#">
                                    <div class="form-row">
                                        <div class="col-md-4 px-0">
                                            <div class="form-group">
                                                <label for="">Select Parking</label>
                                                <div class="input-group">
                                                    <select class="form-control">
                                                        <option data-display="Highway Park">Highway Park</option>
                                                        <option value="1">Highway Park</option>
                                                        <option value="2">Highway Park</option>
                                                        <option value="3">Highway Park</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 px-0">
                                            <div class="form-group ">
                                                <label for="">Your Name</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="John doe" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 px-0">
                                            <div class="form-group">
                                                <label for="">Your Number Plate</label>
                                                <div class="input-group ">
                                                    <input type="text" class="form-control" placeholder="1-GMB-242" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn-box">
                                        <button type="submit" class="">
                                            <span>
                                                Search Now
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div><section class="about_section layout_padding">
                    <div class="container  ">
                        <div class="heading_container ">
                            <h2>
                                About Us
                            </h2>
                            <p>
                                Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 ">
                                <div class="img-box">
                                    <img src={aboutimg} alt=""/>
                                    </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="detail-box">
                                    <h3>
                                        We Are Here For Help
                                    </h3>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                        are going to use a passage to be sure there isn't anything
                                        the middle of text.
                                    </p>
                                    <p>
                                        Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><section class="why_section layout_padding-bottom">
                    <div class="container">
                        <div class="col-md-10 px-0">
                            <div class="heading_container">
                                <h2>
                                    Why Choose Us
                                </h2>
                                <p>
                                    Eaque nostrum quis ad aliquam autem odio assumenda accusamus, consequuntur, iste voluptate voluptates quia non dicta hic repellendus similique a facere earum omnis? Repellendus nemo, aspernatur ullam est deserunt officiis.
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 mx-auto">
                                <div class="box">
                                    <div class="img-box">
                                        <img src={w1} alt=""/>
                                        </div>
                                    <div class="detail-box">
                                        <h4>
                                            No Booking Fees
                                        </h4>
                                        <p>
                                            Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mx-auto">
                                <div class="box">
                                    <div class="img-box">
                                        <img src={w2} alt=""/>
                                        </div>
                                    <div class="detail-box">
                                        <h4>
                                            Online Payments
                                        </h4>
                                        <p>
                                            Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mx-auto">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src={w3} alt=""/>
                                        </div>
                                    <div class="detail-box">
                                        <h4>
                                            Simple Booking Process
                                        </h4>
                                        <p>
                                            Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><section class="pricing_section layout_padding">
                    <div class="bg-box">
                        <img src={Pricingbg} alt=""/>
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
                </section><section class="client_section layout_padding">
                    <div class="container">
                        <div class="heading_container col">
                            <h2>
                                What Says Our <span>Client</span>
                            </h2>
                        </div>
                        <div class="client_container">
                            <div class="carousel-wrap ">
                                <div class="owl-carousel client_owl-carousel">
                                    <div class="item">
                                        <div class="box">
                                            <div class="detail-box">
                                                <p>
                                                I have been simping on NFT's for almost 6 months and now that I cashed out in crypto I am happy I can put it to good use!
                                                </p>
                                            </div>
                                            <div class="client_id">
                                                <div class="img-box">
                                                    <img src={c1} alt="" class="img-1"/>
                                                    </div>
                                                <div class="name">
                                                    <h6>
                                                        Yassin Mahouti
                                                    </h6>
                                                    <p>
                                                        Chômage
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="box">
                                            <div class="detail-box">
                                                <p>
                                                    I recently started investing in crypto and I can already put good use of it, I can park my car with digital currency amazing!
                                                </p>
                                            </div>
                                            <div class="client_id">
                                                <div class="img-box">
                                                    <img src={c2} alt="" class="img-1"/>
                                                    </div>
                                                <div class="name">
                                                    <h6>
                                                        Amine Boutechdat
                                                    </h6>
                                                    <p>
                                                        Computacenter
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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
                                            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
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
                </footer></div>
        );
      }
    }
    


export default Home;