import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";

const FeatureProducts = ({ products }) => {

  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- Popular Products -</h3>
        {/* <h1 className="text-center section-heading">Tranding food</h1> */}
      </div>
      <div className="container">
        <Swiper
          activeIndex={0}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={
            {
              el: '.swiper-pagination',
              clickable: true,
            }
          }
          navigation={
            {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          }
          modules={[EffectCoverflow, Pagination, Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="tranding-slider"
        >
          {products?.data?.map((product) =>
            <SwiperSlide key={product.id} className="tranding-slide">
              <div className="vs-product-box4">
                <div className="product-img">
                  <a href="shop-details.html">
                    <img
                      src={product.attributes.thumbnail.data.attributes.url}
                      alt="Product Image"
                      className="w-100"
                    />
                  </a>
                  {/* <span className="product-tag1">Hot</span> */}
                  {/* <div className="product-rating-box">
                    5.0
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: "100%" }}>
                        Rated <strong className="rating">5.00</strong> out of 5
                      </span>
                    </div>
                  </div> */}
                  <div className="actions-btn">
                    <a
                      href="assets/img/shop/product-4-1.png"
                      className="icon-btn popup-image"
                    >
                      <i className="far fa-search" />
                    </a>
                    <a href="wishlist.html" className="icon-btn">
                      <i className="fal fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="product-content">
                  <h4 className="product-title">
                    <a href="shop-details.html">{product.attributes.name}</a>
                  </h4>
                  <div className="product-quantity">
                    Size: <span className="text">{product.attributes.size.map((size, index) => (
                      <span key={size}>
                        {size}
                        {index < product.attributes.size.length - 1 ? " / " : ""}
                      </span>
                    ))}</span>
                  </div>
                  <span className="price">
                    <strong>{product.attributes.price.toLocaleString()} đ</strong>
                    {/* <del>$36.00</del> */}
                  </span>
                  {/* <span className="product-discount">(78% off)</span> */}
                </div>
                <Link href="/" className="product-cart-btn">
                  Add to Cart
                  <i className="fal fa-cart-plus" />
                </Link>
              </div>

            </SwiperSlide>
          )}


          {/* <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-1.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-2.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-3.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-4.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-5.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-6.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src="/assets/img/shop/product-4-7.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">

                  </div>
                </h3>
              </div>
            </div>
            
          </SwiperSlide> */}

        </Swiper>

      </div>
    </section>

  );
};

export default FeatureProducts;
