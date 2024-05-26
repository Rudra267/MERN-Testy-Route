import React, { useEffect,useState } from 'react';
import Foods from '../components/Swipers/Food';
import Round from '../components/Swipers/Round';
import Helmet from '../components/Helmet/Helmet';
import axios from "axios";
// import Navbar from '../Nav/nav';
import { toast } from 'react-toastify';

const Home = () => {

  const [currLocation, setCurrLocation] = useState();
  const [Local,setLocal] = useState("")

    useEffect(() => {
        console.log("render Home..");
    }, []);



    const locationSearch = async() =>{

      const location = await axios.get("https://ipapi.co/json");
      setCurrLocation(location.data);
      
      
    }

   
 const search = (e) =>{
  e.preventDefault()
  alert(Local)
 }
  return (
  <Helmet title="Resturants With grate offers">
  
  <main class="main" id="top" >

{/* <Navbar/> */}
    <section className="py-6 mt-6 overflow-hidden bg-primary" id="home">
      <div className="container ml-24">
        <div className="row flex-center">
          <div className="col-md-5 col-lg-6 order-0 order-md-1 mt-6 mt-md-0">
            <a className="img-landing-banner" href="#!">
              <img className="img-fluid hero" src="assets/img/gallery/main-img.png" alt="hero-header" />
            </a>
          </div>
          <div className="col-md-7 col-lg-6 py-8 text-md-start text-center">
            <h1 className="display-1 py-4 fs-md-5 fs-lg-6 fs-xl-8 text-light">Are you starving?</h1>
            <h1 className="text-800 mb-5 fs-4">Within a few clicks, find meals that<br className="d-none d-xxl-block" />are accessible near you</h1>
            <div className="card w-xxl-75">
              <div className="card-body">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active mb-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fas fa-motorcycle me-2"></i>Delivery</button>
                  </div>
                </nav>
                <div className="tab-content mt-3" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <form className="row gx-2 gy-2 align-items-center">
                      <div className="col">
                        <div className="input-group-icon">
                          <i className="fas fa-map-marker-alt cursor-pointer text-danger input-box-icon" onClick={locationSearch}></i>
                          <label className="visually-hidden" htmlFor="inputDelivery">Address</label>
                          <input onChange = {(e)=>{setLocal(e.target.value)}} className="form-control  input-box form-foodwagon-control" value={currLocation?`${currLocation.city}, ${currLocation.region}`:Local} id="inputDelivery" type="text" placeholder="Enter Your Address" />
                        </div>
                      </div>
                      <div className="d-grid gap-3 col-sm-auto">
                        <button className="btn btn-danger" type="submit" onClick={search}>Find Food</button>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <form className="row gx-4 gy-2 align-items-center">
                      <div className="col">
                        <div className="input-group-icon">
                          <i className="fas fa-map-marker-alt text-danger input-box-icon"></i>
                          <label className="visually-hidden" htmlFor="inputPickup">Address</label>
                          <input className="form-control input-box form-foodwagon-control" id="inputPickup"  type="text" placeholder="Enter Your Address" />
                        </div>
                      </div>
                      <div className="d-grid gap-3 col-sm-auto">
                        <button className="btn btn-danger" type="submit" >Find Food</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-0">
      <div className="container">
        <div className="row h-100 gx-2 mt-7">
          <div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
            <div className="card card-span h-100">
              <div className="position-relative">
                <img className="img-fluid rounded-3 w-100" src="assets/img/gallery/discount-item-1.png" alt="..." />
                <div className="card-actions">
                  <div className="badge badge-foodwagon bg-primary p-4">
                    <div className="d-flex flex-between-center">
                      <div className="text-white fs-7">15</div>
                      <div className="d-block text-white fs-2">% <br />
                        <div className="fw-normal fs-1 mt-2">Off</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0">
                <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                <span className="badge bg-soft-danger py-2 px-3"><span className="fs-1 text-danger">6 days Remaining</span></span>
              </div>
              <a className="stretched-link" href="#"></a>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div class="card card-span h-100">
                <div class="position-relative"> <img class="img-fluid rounded-3 w-100" src="assets/img/gallery/discount-item-2.png" alt="..." />
                  <div class="card-actions">
                    <div class="badge badge-foodwagon bg-primary p-4">
                      <div class="d-flex flex-between-center">
                        <div class="text-white fs-7">10</div>
                        <div class="d-block text-white fs-2">% <br />
                          <div class="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0">
                  <h5 class="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                </div><a class="stretched-link" href="#"></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div class="card card-span h-100">
                <div class="position-relative"> <img class="img-fluid rounded-3 w-100" src="assets/img/gallery/discount-item-3.png" alt="..." />
                  <div class="card-actions">
                    <div class="badge badge-foodwagon bg-primary p-4">
                      <div class="d-flex flex-between-center">
                        <div class="text-white fs-7">25</div>
                        <div class="d-block text-white fs-2">% <br />
                          <div class="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0">
                  <h5 class="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                </div><a class="stretched-link" href="#"></a>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div class="card card-span h-100">
                <div class="position-relative"> <img class="img-fluid rounded-3 w-100" src="assets/img/gallery/discount-item-4.png" alt="..." />
                  <div class="card-actions">
                    <div class="badge badge-foodwagon bg-primary p-4">
                      <div class="d-flex flex-between-center">
                        <div class="text-white fs-7">20</div>
                        <div class="d-block text-white fs-2">% <br />
                          <div class="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0">
                  <h5 class="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
                </div><a class="stretched-link" href="#"></a>
              </div>
            </div>
        </div>
      </div>
    </section>
      





    <section className="py-0 bg-primary-gradient">
      <div className="container">
        <div className="row justify-content-center g-0">
          <div className="col-xl-9">
            <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
              <h5 className="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">How does it work</h5>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img className="shadow-icon ml-20" src="assets/img/gallery/location.png" height="112" alt="..." />
                  <h5 className="mt-4 fw-bold">Select location</h5>
                  <p className="mb-md-0">Choose the location where your food will be delivered.</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-6 ">
                <div className="text-center">
                  <img className="shadow-icon ml-20" src="assets/img/gallery/order.png" height="112" alt="..." />
                  <h5 className="mt-4 fw-bold">Choose order</h5>
                  <p className="mb-md-0">Check over hundreds of menus to pick your favorite food</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img className="shadow-icon ml-20" src="assets/img/gallery/pay.png" height="112" alt="..." />
                  <h5 className="mt-4 fw-bold">Pay advanced</h5>
                  <p className="mb-md-0">It's quick, safe, and simple. Select several methods of payment</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-6">
                <div className="text-center">
                  <img className="shadow-icon ml-20" src="assets/img/gallery/meals.png" height="112" alt="..." />
                  <h5 className="mt-4 fw-bold">Enjoy meals</h5>
                  <p className="mb-md-0">Food is made and delivered directly to your home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  
      <section className="px-20 py-30 ">

        <div className="container">
          <div className="row h-80">
            <div className="col-lg-7 mx-auto text-center mb-5">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Popular items</h5>
            </div>
            <div className="col-12">
              <Foods/>
            </div>
            
          </div>
        </div>

      </section>

    

      <section className='px-20 mt-44' id="testimonial">
        <div class="container">
          <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Featured Restaurants</h5>
            </div>
          </div>
          <div class="row gx-2">
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/food-world.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">20% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/food-world-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Food world</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">46</span>
                    </div>
                  </div><span class="badge bg-soft-danger p-2"><span class="fw-bold fs-1 text-danger">Opens Tomorrow</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/pizza-hub.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/pizzahub-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Pizza hub</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">40</span>
                    </div>
                  </div><span class="badge bg-soft-danger p-2"><span class="fw-bold fs-1 text-danger">Opens Tomorrow</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/donuts-hut.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">15% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/donuts-hut-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Donuts hut</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">20</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/donuthut.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">15% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/donut-hut-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Donuts hut</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/ruby-tuesday.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/ruby-tuesday-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Ruby tuesday</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/kuakata.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/kuakata-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Kuakata Fried Chicken</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/red-square.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/red-square-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Kuakata Fried Chicken</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/taco-bell.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="assets/img/gallery/taco-bell-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Taco bell</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center mt-5"> <a class="btn btn-lg btn-primary" href="/show-case">View All <i class="fas fa-chevron-right ms-2"> </i></a></div>
          </div>
        </div>
      </section>



      <section className="px-20 overflow-hidden">

        <div class="container" style={{  height: "22rem" ,marginTop: "-50px"}}>
          <div class="row flex-center mb-6">
            <div class="col-lg-7">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">Search by Food</h5>
            </div>
            <div class="col-lg-4 text-lg-end text-center"><a class="btn btn-lg text-800 me-2" href="#" role="button">VIEW ALL <i class="fas fa-chevron-right ms-2"></i></a></div>
          </div>
          <div class="row flex-center">
            <div class="col-12 h-41">
             <Round/>
            </div>
          </div>
        </div>

      </section>
     
      <section class="pb-5">

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                  <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1"><img class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0" src="assets/img/gallery/crispy-sandwiches.png" alt="..." /></div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 class="card-title mt-xl-5 mb-4">Best deals <span class="text-primary"> Crispy Sandwiches</span></h1>
                      <p class="fs-1">Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                      <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    
    
      <section class="py-0">

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                  <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-md-0"><img class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-start rounded-md-top-0" src="assets/img/gallery/fried-chicken.png" alt="..." /></div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 class="card-title mt-xl-5 mb-4">Celebrate parties with <span class="text-primary">Fried Chicken</span></h1>
                      <p class="fs-1">Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.</p>
                      <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    


     
      <section class="pt-5">

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                  <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1"><img class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0" src="assets/img/gallery/pizza.png" alt="..." /></div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 class="card-title mt-xl-5 mb-4">Wanna eat hot & <span class="text-primary">spicy Pizza?</span></h1>
                      <p class="fs-1">Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
                      <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
     

      <section class="py-0">
      <div className="bg-holder" style={{backgroundImage: "url(assets/img/gallery/cta-two-bg.png)", backgroundPosition: "center", backgroundSize: "cover"}}>
        </div>
      

        <div class="container">
          <div class="row flex-center">
            <div class="col-xxl-9 py-7 text-center">
              <h1 class="fw-bold mb-4 text-white fs-6">Are you ready to order <br />with the best deals? </h1><a class="btn btn-danger" href="#"> PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </section>


     
{/*      
      <section class="py-0 pt-7 bg-1000">

        <div class="container text-capitalize text-center">
          <div class="row justify-content-lg-between">
            <h5 class="lh-lg fw-bold text-white">OUR TOP CITIES</h5>
            <div class="col-5 fw-normal col-md-4 col-lg-auto mb-3">
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Delhi</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Mumbai</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Kolkata</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Hyderabad</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Jaipur</a></li>

              </ul>
            </div>
            <div class="col-5 col-md-4 col-lg-auto mb-3">
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Agra</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Pune</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Ahmedabad</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Kochi</a></li>

              </ul>
            </div>
            <div class="col-5 col-md-4 col-lg-auto mb-3">
              <ul class="list-unstyled mb-md-4 mb-lg-0">
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Lucknow</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Varanasi</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Goa</a></li>

              </ul>
            </div>
            <div class="col-5 col-md-4 col-lg-auto mb-3">
              <ul class="list-unstyled mb-md-4 mb-lg-0">
              <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Udaipur</a></li>
              <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Chennai</a></li>
                <li class="lh-lg"><a class="text-200 text-decoration-none" href="#!">Bangalore</a></li>
              </ul>
            </div>
           
          </div>
          <hr class="text-900" />
          <div class="row d-flex align-items-center justify-content-evenly flex-row-reverse ">
           
            
            <div class="w-full  d-flex align-items-center justify-content-evenly flex-row-reverse">
              <div>
                <h5 class="lh-lg fw-bold text-500">FOLLOW US</h5>
             <div className='w-full d-flex m-3 align-items-center justify-center'>
                  <a href="#" className='pr-6' style={{color: "#3B5998"}}><i class="fab fa-2xl fa-facebook-f" ></i></a>
                  <a href="#" className='pr-6' style={{color:"#55ACEE"}}><i class="fab fa-2xl fa-twitter" ></i></a>
                  <a href="#" className="pr-6" style={{color: "pink"}}><i className="fab fa-instagram fa-2xl"></i></a>
                  <a href="#" className='pr-6' style={{color:"red"}}><i class="fa-regular fa-envelope fa-2xl"></i></a>
             </div>

             <div>
             <h3 class="text-500 my-4">Receive exclusive offers and <br />discounts in your mailbox</h3>
              <div class="row input-group-icon mb-5">
                <div class="col-auto"><i class="fas fa-envelope input-box-icon text-500 ms-3"></i>
                  <input class="form-control input-box h-12 bg-800 border-0" type="email" placeholder="Enter Email" aria-label="email" />
                </div>
                <div class="col-auto">
                  <button class="btn btn-primary" type="submit">Subscribe</button>
                </div>
             </div>
              </div>
              
                
              </div>
            </div>
          </div>
          <hr class="border border-800" />
         
        </div>

      </section> */}
    
    </main>
  
  </Helmet>
    
  );
};

export default Home;
