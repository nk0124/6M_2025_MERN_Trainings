import SpecialSale from "./SpecialSale";

 export default function About(){
   return(
    <>
    
  {/* Carousel Section */}
  <section id="home" className="home pt-5 overflow-hidden">
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
      </div>
      <div className="carousel-inner mt-2">
        <div className="carousel-item active">
          <div className="home-banner home-banner-1 d-flex align-items-center justify-content-center">
            <div className="home-banner-text text-center">
              <h3>Discount Up to 40%</h3>
              <h1>Grand Sale Offer !</h1>
              <a
                href="#"
                className="btn btn-danger text-uppercase mt-3 border rounded-pill"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="home-banner home-banner-2 d-flex align-items-center justify-content-center">
            <div className="home-banner-text text-center">
              <h1>
                Click <span>Cart</span>
              </h1>
              <h2>With Working Card &amp; Pay Pal</h2>
              <a
                href="#"
                className="btn btn-danger text-uppercase mt-3 border rounded-pill"
              >
                Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  {/* offer section */}
  <div className="offers">
    <div className="container">
      <div className="row">
        {/* offer box one */}
        <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
          <a href="#">
            <div className="offer-box text-center position-relative">
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img
                    src="assets/ProjImages/offer1.jpg"
                    alt="offers"
                    className="img-fluid"
                  />
                  <div className="offer-overlay" />
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger text-captialize">Sale 30%</p>
                    <p className="offer-title-1 text-captialize font-weight-bold">
                      Don't Miss This Chance
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-danger text-captialize mt-4"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* offer box two */}
        <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4 d-flex flex-column justify-content-between">
          <a href="#">
            <div className="offer-box text-center position-relative mb-4 mb-sm-0 mb-lg-0">
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img
                    src="assets/ProjImages/offer2.jpg"
                    alt="offers"
                    className="img-fluid"
                  />
                  <div className="offer-overlay" />
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger text-captialize">Sale 70%</p>
                    <p className="offer-title-1 text-captialize font-weight-bold">
                      Don't Miss This Chance
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-danger text-captialize mt-4"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="offer-box text-center position-relative">
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img
                    src="assets/ProjImages/offer3.png "
                    alt="offers"
                    className="img-fluid"
                  />
                  <div className="offer-overlay" />
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger text-captialize">Sale 50%</p>
                    <p className="offer-title-1 text-captialize font-weight-bold">
                      Don't Miss This Chance
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-danger text-captialize mt-4"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* offer box three */}
        <div className="col-sm-6 col-lg-4 mb-lg-0 mb-4">
          <a href="#">
            <div className="offer-box text-center position-relative">
              <div className="offer-inner">
                <div className="offer-image position-relative overflow-hidden">
                  <img
                    src="assets/ProjImages/offer4.jpg"
                    alt="offers"
                    className="img-fluid"
                  />
                  <div className="offer-overlay" />
                </div>
                <div className="offer-info">
                  <div className="offer-info-inner">
                    <p className="heading-bigger text-captialize">Sale 25%</p>
                    <p className="offer-title-1 text-captialize font-weight-bold">
                      Don't Miss This Chance
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-danger text-captialize mt-4"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* product section */}
  <section id="product" className="product">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headline text-center mb-5">
            <h2 className="pb-3 position-relative d-inline-block">
              FEATURED PRODUCTS
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p1.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p3.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">
                &#x20B9;400.00 <del>&#x20B9;580.00</del>
                </p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p1.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p3.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">
                &#x20B9;400.00 <del>&#x20B9;580.00</del>
                </p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* special section */}
  <section id="product" className="product">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headline text-center mb-5">
            <h2 className="pb-3 position-relative d-inline-block h2">
              SPECIAL PRODUCTS
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p1.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p3.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">
                &#x20B9;400.00 <del>&#x20B9;580.00</del>
                </p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p1.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p3.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">
                &#x20B9;400.00 <del>&#x20B9;580.00</del>
                </p>
                <div className="py-1">
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                  <span className="bi bi-star" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-lg-4">
          <a href="#" className="d-block text-center mb-4">
            <div className="product-list">
              <div className="product-image position-relative">
                <span className="sale">Sale</span>
                <img
                  src="assets/ProjImages/p4.jpg"
                  alt="products"
                  className="img-fluid product-image-first"
                />
                <img
                  src="assets/ProjImages/p2.jpg"
                  alt="products"
                  className="img-fluid product-image-second"
                />
              </div>
              <div className="product-name pt-3">
                <h3 className="text-capitalize">
                  Winter Long Sleeve Black White
                </h3>
                <p className="amount">&#x20B9;400.00</p>
                <div className="py-1">
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                  <span className="bi bi-star active" />
                </div>
                <button className="btn btn-outline-primary">ADD TO CART</button>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/*up to 75% section */}
      <div className="overflow-hidden my-5">
        <div className="row">
          <div className="col-sm-12 up_to_off">
            <img
              src="assets/ProjImages/lg.jpg"
              alt="offer"
              className="img-fluid w-100"
            />
            <div className="up_to_content">
              <h2>UP TO 75% OFF SPRINGSALE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* special sale */}
   <SpecialSale/>
  {/* Testimonail section */}
  <section id="testimonial" className="testimonial">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headline text-center mb-5">
            <h2 className="pb-3 position-relative d-inline-block h2">
              Testimonails
            </h2>
          </div>
        </div>
        <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
          <div
            id="carouselExampleIndicatorsTwo"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorsTwo"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicatorsTwo"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
            </div>
            <div className="carousel-inner mt-2">
              <div className="carousel-item active">
                <div className="testimonial-wrapper">
                  <div className="row">
                    <div className="col-sm-12">
                      <img
                        src="../ProjImages/user.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="uername">
                      <h3>Martin Johe, Co-Founder/CEO</h3>
                      <span>Fastcompany Ltd.</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum voluptatum, quasi sapiente harum inventore at
                        adipisci reiciendis quo atque illum asperiores quidem
                        nobis sint cumque, eos dicta nihil quisquam. Ratione
                        pariatur nulla veritatis ducimus consectetur rem
                        voluptatem qui neque? Ullam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-wrapper">
                  <div className="row">
                    <div className="col-sm-12">
                      <img
                        src="assets/ProjImages/user2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="uername">
                      <h3>Martin Johe, Co-Founder/CEO</h3>
                      <span>Fastcompany Ltd.</span>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum voluptatum, quasi sapiente harum inventore at
                        adipisci reiciendis quo atque illum asperiores quidem
                        nobis sint cumque, eos dicta nihil quisquam. Ratione
                        pariatur nulla veritatis ducimus consectetur rem
                        voluptatem qui neque? Ullam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicatorsTwo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicatorsTwo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact section */}
  <section id="contact">
    <div className="contact">
      <div className="container">
        <div className="mb-5 text-center">
          <h5>Let's Start a Conversation</h5>
          <h2 className="fw-bold">Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-5 col-lg-5">
            <h4 className="fw-bold">Contact Info</h4>
            <ul className="info list-unstyled">
              <li className="d-flex align-items-center">
                <span className="pe-3 bi bi-geo-alt-fill fs-5"></span>
                <span>
                  <a href="">Lorem ipsum dolor sit amet , consectetur</a>
                </span>
              </li>
              <li className="d-flex align-items-center">
                <span className="pe-3 bi bi-phone fs-5" />
                <span>
                  <a href="">+91 9999-8756-54</a>
                </span>
              </li>
              <li className="d-flex align-items-center">
                <span className="pe-3 bi bi-envelope fs-5" />
                <span>
                  <a href="">clickcart@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="textarea"
                      name="message"
                      cols={7}
                      rows={4}
                      id="message"
                      placeholder="Enter your message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn btn-danger">
                    <span className="bi bi-rocket pe-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* scroll back to top */}
  <div id="scrollUp" title="Scroll To Top ">
    <a href="#home">
      <span className="bi bi-arrow-up-circle-fill fs-4 text-white" />
    </a>
  </div>
    </>
   )
 }

