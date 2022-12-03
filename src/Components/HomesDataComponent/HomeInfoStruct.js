import React from 'react';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import CartButtons from './CartButtons';

const HomeInfoStruct = ({ product }) => {

   const HomeInfo = product.state;

   return (


         <div className="container-fluid">
            <div className="head">
               <div className="row"><div className="col-sm-6">
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                     </div>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <img src="imgg.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                           <img src="imgg1.jpg" className="d-block w-100" alt="..." />
                        </div>

                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                     </button>
                  </div></div>


                  <div className="col-sm-6">
                     <strong className="display-2"><b>{HomeInfo.name}</b></strong>
                     <h4 className="text-primary m-sm-4">
                        {HomeInfo.landmrk} - <strong>{HomeInfo.state , HomeInfo.city}</strong>-
                        <p className="pretty">pinCode -{HomeInfo.pincode}</p>
                     </h4>

                     <div className="cardd">
                        <p>
                           Choose Check-in date
                           <input
                              type="date"
                              value="2017-01-01"
                              min="2005-01-01"
                              max="2019-01-01"
                           ></input>
                        </p>
                        <span>
                        Choose Check-out date
                        <input
                        type ="date"
                        value="2017-01-01"
                        min="2005-01-01"
                        max="2019-01-01"
                        ></input>
                        </span>
                        <br/><br/>
                        <span>
                        Number of Guests
                        <input type ="text" />
                        </span>
                        <br/><br/>
                        </div>
                        <button className="btn btn-warning">
                        View Contact no.
                        </button>
                        <button className="btn btn-primary" data-bs-toggle="button"autocomplete="off">
                        Contact Owner
                        </button>
                        </div>
                        </div>
                     </div>


                     <div className="Amenities-Card">
                        <div>
                           <h1 className="props">Amenities</h1>
                        </div>
                        <i className="fi-xnsuxl-bar-chart-solid"></i>
                        <span className="Icons">wifi</span>
                        <i className="fi-snluxl-dot-parking"></i>
                        <span className="Icons"> Parking</span>
                        <i className="fi-xwluxl-tv-wide"></i>
                        <span className="Icons">Television</span>
                        <i className="fi-xnsuxl-computer-desktop-solid"></i>
                        <span className="Icons">Computer</span>
                        <i className="fi-onsrxl-plug"></i>
                        <span className="Icons">Plug-ins</span>
                        <i className="fi-xnsuxl-lock-solid"></i>
                        <span className="Icons">Security</span>
                     </div>
                     <div className="House-rulecard">
                        <h1 className="props">House Rules</h1>
                        <div>
                           <i className="fi-xnluxl-calendar-clock"></i>
                           <span className="Icons">Notice period 15 Days</span>
                           <i className="fi-ctlrhl-clock-thin"></i>
                           <span className="Icons">Gate Closing Time -</span>
                           <i className="fi-ctpdhl-gamepad-solid"></i>
                           <span className="Icons">Gaming Not Allowed</span>
                        </div>
                     </div>
                     <div className="ResonsLandmark-card">
                        <div>
                           <h1 className="props">Reasons to stay in our house Mannat</h1>
                        </div>
                        <ul>
                           <li>You get authentic home cooked food</li>
                           <li>You don't feel like a loner in a new place.</li>
                           <li>You will get to know about our culture and tradition.</li>
                           <li>Our house also has seaview.</li>
                        </ul>
                        <div>
                           <h1 className="props">NearBy Lanmarks</h1>
                           <p> Mukta A2 Cinemas |
                              Nagar Nigam Road | Rajwadi Cafe | Behind Bus-stop</p>
                        </div>
                     </div>
                  </div>
               
);

}

export default HomeInfoStruct;