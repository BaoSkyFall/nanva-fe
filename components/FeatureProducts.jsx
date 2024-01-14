import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Link from "next/link";

const FeatureProducts = ({ products }) => {

  return (
    <section id="tranding" style={{ backgroundImage: `url("assets/img/shape/bg-9754.png")` }}
    >
      <div className="section-title text-center mb-2">
        <div className="sec-icon pt-5">
          <img src="assets/img/icons/sec-icon-2.png" alt="icon" />
        </div>
        <span className="sub-title4">100% Organic Food</span>
        <h2 className="sec-title3 mt-2">Sản Phẩm Mới</h2>
      </div>


      <div className="container">
        {/* <Swiper
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
            <SwiperSlide key={product.id} className="tranding-slide" >
              <div className="vs-product-box4" style={{ backgroundImage: `url("assets/img/shape/bg-9754.png")` }}>
                <div className="product-img" >
                  <Link href={`product/${product.attributes.slug}`}>
                    <Image
                      src={product?.attributes?.thumbnail?.data?.attributes?.url}
                      alt="Product Image"
                      width={500}
                      height={500}
                      className="transition transition-opacity opacity-0 duration-[2s]"
                      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                    />
                  </Link>
                  <div className="actions-btn">
                  </div>
                </div>
                <div className="product-content cursor-pointer">
                  <h1 className="product-title cursor-pointer ">
                    <Link className="fs-1" href={`product/${product.attributes.slug}`}>{product.attributes.name}</Link>
                  </h1>
                  <span className="price cursor-pointer mt-2 fs-2" >
                    <strong className="cursor-pointer">{product.attributes.price.toLocaleString()} đ</strong>
                    {product.attributes.original_price && <del style={{ textDecoration: 'line-through', fontSize: '30px', marginLeft: '0.5rem' }} className="ml-2 align-super text-base font-bold text-gray-600">{product.attributes.original_price?.toLocaleString()} đ</del>}

                  </span>
                </div>
                <Link href={`product/${product.attributes.slug}`} className="product-cart-btn cursor-pointer">
                  Xem Chi Tiết
                </Link>
              </div>

            </SwiperSlide>
          )}

        </Swiper> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {products?.data?.map((product) =>
            <SwiperSlide key={product.id} className="tranding-slide" >
              <div className="vs-product-box4" style={{ backgroundImage: `url("assets/img/shape/bg-9754.png")` }}>
                <div className="product-img" >
                  <Link href={`product/${product.attributes.slug}`}>
                    <Image
                      src={product?.attributes?.thumbnail?.data?.attributes?.url}
                      alt="Product Image"
                      width={500}
                      height={500}
                      className="transition transition-opacity opacity-0 duration-[2s]"
                      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                    />
                  </Link>
                  <div className="actions-btn">
                  </div>
                </div>
                <div className="product-content cursor-pointer">
                  <h1 className="product-title cursor-pointer ">
                    <Link className="fs-1" href={`product/${product.attributes.slug}`}>{product.attributes.name}</Link>
                  </h1>
                  <Link className="fs-1" href={`product/${product.attributes.slug}`}>
                    <span className="price cursor-pointer mt-2 fs-2" >
                      <strong className="cursor-pointer">{product.attributes.price.toLocaleString()} đ</strong>
                      {product.attributes.original_price && <del style={{ textDecoration: 'line-through', fontSize: '30px', marginLeft: '0.5rem' }} className="ml-2 align-super text-base font-bold text-gray-600">{product.attributes.original_price?.toLocaleString()} đ</del>}

                    </span>
                  </Link>
                </div>
                {/* <Link href={`product/${product.attributes.slug}`} className="product-cart-btn cursor-pointer">
                  Xem Chi Tiết
                </Link> */}
              </div>

            </SwiperSlide>
          )}
        </Swiper>

      </div>
    </section>

  );
};

export default FeatureProducts;
