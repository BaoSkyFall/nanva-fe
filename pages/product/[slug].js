import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    useEffect(() => {
        // $('document').ready(function () {

        // Calling LayerSlider on your selected element after the document loaded
        // $('.vs-hero-carousel').each(function () {
        //     var vsHslide = $(this);

        //     // return function for dom data
        //     function d(data) {
        //         return vsHslide.data(data)
        //     }

        //     /* Custom Thumb Navigation */
        //     var customNav = '.thumb';
        //     var navDom = 'data-slide-go';

        //     vsHslide.on('sliderDidLoad', function (event, slider) { // On Slide Init
        //         var currentSlide = slider.slides.current.index; // current Slide index 
        //         var i = 1;
        //         // Set Attribute 
        //         vsHslide.find(customNav).each(function () {
        //             $(this).attr(navDom, i)
        //             i++
        //             // On Click Thumb, Change slide
        //             $(this).on('click', function (e) {
        //                 e.preventDefault();
        //                 var target = $(this).attr(navDom);
        //                 vsHslide.layerSlider(parseInt(target));
        //             })
        //         });
        //         // Add class To current Thumb
        //         var currentNav = customNav + '[' + navDom + '="' + currentSlide + '"';
        //         $(currentNav).addClass('active');
        //     }).on('slideChangeDidComplete', function (event, slider) { // On slide Change Start
        //         var currentActive = slider.slides.current.index; // After change Current Index
        //         var currentNav = customNav + '[' + navDom + '="' + currentActive + '"';
        //         $(currentNav).addClass('active') // Add Class on current Nav
        //         $(currentNav).siblings().removeClass('active');
        //     });





        //     /* Custom Responsive Option */
        //     vsHslide.on('sliderWillLoad', function (event, slider) {
        //         // Define Variable
        //         var respLayer = jQuery(this).find('.ls-responsive'),
        //             lsDesktop = 'ls-desktop',
        //             lsLaptop = 'ls-laptop',
        //             lsTablet = 'ls-tablet',
        //             lsMobile = 'ls-mobile',
        //             windowWid = jQuery(window).width(),
        //             lgDevice = 1025,
        //             mdDevice = 993,
        //             smDevice = 768;

        //         // Set Style on each Layer
        //         respLayer.each(function () {
        //             var layer = jQuery(this);

        //             function lsd(data) {
        //                 return (layer.data(data) === '') ? layer.data(null) : layer.data(data);
        //             }
        //             // var respStyle = (windowWid < smDevice) ? ((lsd(lsMobile)) ? lsd(lsMobile) : lsd(lsTablet)) : ((windowWid < mdDevice) ? ((lsd(lsTablet)) ? lsd(lsTablet) : lsd(lsDesktop)) : lsd(lsDesktop)),
        //             var respStyle = (windowWid < smDevice) ? lsd(lsMobile) : ((windowWid < mdDevice ? lsd(lsTablet) : ((windowWid < lgDevice) ? lsd(lsLaptop) : lsd(lsDesktop)))),
        //                 mainStyle = (layer.attr('style') !== undefined) ? layer.attr('style') : ' ';
        //             layer.attr('style', mainStyle + respStyle);
        //         });

        //     });





        //     /* Custom Arrow Navigation */
        //     vsHslide.find('[data-ls-go]').each(function () {
        //         $(this).on('click', function (e) {
        //             e.preventDefault();
        //             var target = $(this).data('ls-go');
        //             vsHslide.layerSlider(target)
        //         });
        //     });

        //     vsHslide.layerSlider({
        //         allowRestartOnResize: true,
        //         globalBGImage: (d('globalbgimage') ? d('globalbgimage') : false),
        //         maxRatio: (d('maxratio') ? d('maxratio') : 1),
        //         type: (d('slidertype') ? d('slidertype') : 'responsive'),
        //         pauseOnHover: (d('pauseonhover') ? true : false),
        //         navPrevNext: (d('navprevnext') ? true : false),
        //         hoverPrevNext: (d('hoverprevnext') ? true : false),
        //         hoverBottomNav: (d('hoverbottomnav') ? true : false),
        //         navStartStop: (d('navstartstop') ? true : false),
        //         navButtons: (d('navbuttons') ? true : false),
        //         loop: ((d('loop') == false) ? false : true),
        //         autostart: (d('autostart') ? true : false),
        //         height: (($(window).width() < 767) ? (d('sm-height') ? d('sm-height') : d('height')) : (d('height') ? d('height') : 1080)),
        //         responsiveUnder: (d('responsiveunder') ? d('responsiveunder') : 1220),
        //         layersContainer: (d('container') ? d('container') : 1220),
        //         showCircleTimer: (d('showcircletimer') ? true : false),
        //         skinsPath: 'layerslider/skins/',
        //         thumbnailNavigation: ((d('thumbnailnavigation') == false) ? false : true)
        //     });
        // });

        // });
        

    }, [])
    return (
        <div className="w-full md:py-20">
            <ToastContainer />
            <Wrapper>
                {/* <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image.data} />
                    </div>

                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {p.name}
                        </div>

                        <div className="text-lg font-semibold mb-5">
                            {p.subtitle}
                        </div>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                {p.price.toLocaleString()} đ
                            </p>
                            {p.original_price && (
                                
                            )}
                        </div>

       

                        <div className="mb-10">
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                      
                            </div>

                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${item.enabled
                                            ? "hover:border-white cursor-pointer"
                                            : "cursor-not-allowed bg-white/[0.1] opacity-50"
                                            } ${selectedSize === item.size
                                                ? "border-white"
                                                : "border-white/[0.2]"
                                            }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>

                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )}
                        </div>
                        <button
                            className="w-full py-4 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document
                                        .getElementById("sizesGrid")
                                        .scrollIntoView({
                                            block: "center",
                                            behavior: "smooth",
                                        });
                                } else {
                                    dispatch(
                                        addToCart({
                                            ...product?.data?.[0],
                                            selectedSize,
                                            oneQuantityPrice: p.price,
                                        })
                                    );
                                    notify();
                                }
                            }}
                        >
                            Add to Cart
                        </button>



                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div> */}
                <section className="vs-shop-wrapper shop-details space-top space-md-bottom">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-6 col-xl-5 mb-30 mb-md-0">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-big-img"
      >
        <SwiperSlide>
        <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-1.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-2.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-3.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-4.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-5.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-big-img"
      >
        <SwiperSlide>
        <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-1.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-2.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-3.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-4.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-5.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
        </SwiperSlide>
      </Swiper>
        {/* <div
          className="product-big-img vs-carousel"
          data-slide-show={1}
          data-lg-slide-show={1}
          data-md-slide-show={1}
          data-sm-slide-show={1}
          data-fade="true"
          data-dots="true"
          data-asnavfor="#thumbproductimg"
          id="bigproductimg"
        >
          <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-1.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
          <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-2.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
          <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-3.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
          <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-4.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
          <div className="product-img">
            <img
              src="/assets/img/shop/shop-details-5.jpg"
              alt="Shop Image"
              className="w-100"
            />
          </div>
        </div> */}
        {/* <div
          className="row gx-2 product-thumb-img pt-10 vs-carousel"
          data-slide-show={4}
          data-md-slide-show={3}
          data-sm-slide-show={3}
          data-xs-slide-show={2}
          data-arrows="true"
          data-next-arrow="far fa-long-arrow-right"
          data-prev-arrow="far fa-long-arrow-left"
          id="thumbproductimg"
          data-asnavfor="#bigproductimg"
        >
          <div className="col-auto">
            <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-1.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-2.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-3.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-4.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="thumb">
              <img
                src="/assets/img/shop/shop-thumb-5.jpg"
                alt="Thumb Image"
                className="w-100"
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="product-content">
          <h3 className="product-title mb-1">Fresh Peach Fruits</h3>
          <span className="price font-theme">
            <strong>$40.00</strong>
          </span>
          <div className="mt-2">
            <div
              className="star-rating"
              role="img"
              aria-label="Rated 5.00 out of 5"
            >
              <span style={{ width: "100%" }}>
                Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
                <span className="rating">1</span> customer rating
              </span>
            </div>
          </div>
          <p className="fs-xs my-4">
            Quot semper vivendo ad vix, qui ad diam lucilius repudiare. Autem
            voluptua ius id. Invenire antiopam qualisque ne per, ei vim legimus
            accusam, tale nulla vim ut
          </p>
          <div className="mt-2 link-inherit fs-xs">
            <p>
              <strong className="text-title me-3 font-theme">
                Availability :
              </strong>
              <a href="#">
                <i className="far fa-check-square me-2 ms-1" />
                In Stock
              </a>
            </p>
          </div>
          <div className="actions mb-4 pb-2">
            <div className="quantity style2 me-4">
              <input
                type="number"
                className="qty-input"
                defaultValue={1}
                min={1}
                max={99}
              />
              <button className="quantity-minus qut-btn">
                <i className="far fa-chevron-down" />
              </button>
              <button className="quantity-plus qut-btn">
                <i className="far fa-chevron-up" />
              </button>
            </div>
            <a href="cart.html" className="vs-btn shadow-none">
              Add To Cart
            </a>
          </div>
          <div className="product_meta">
            <span className="sku_wrapper">
              SKU: <span className="sku">D2300-3-1</span>
            </span>
            <span className="posted_in">
              Category:{" "}
              <a href="#" rel="tag">
                Glassware
              </a>{" "}
              <a href="#" rel="tag">
                Fast Food
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-none d-xl-block">
        <div className="widget   ">
          <h3 className="widget_title">Best Seller</h3>
          <div className="vs-widget-recent-post">
            <div className="recent-post d-flex align-items-center">
              <div className="media-img">
                <img
                  src="/assets/img/widget/recent-1.jpg"
                  width={100}
                  height={73}
                  alt="Recent Post Image"
                />
              </div>
              <div className="media-body pl-30">
                <h4 className="recent-post-title h5 mb-0">
                  <a href="blog.html">100% organic healthy</a>
                </h4>
                <a href="#" className="text-theme fs-12">
                  January 04, 2022
                </a>
              </div>
            </div>
            <div className="recent-post d-flex align-items-center">
              <div className="media-img">
                <img
                  src="/assets/img/widget/recent-2.jpg"
                  width={100}
                  height={73}
                  alt="Recent Post Image"
                />
              </div>
              <div className="media-body pl-30">
                <h4 className="recent-post-title h5 mb-0">
                  <a href="blog.html">Keep Your Fruits frash</a>
                </h4>
                <a href="#" className="text-theme fs-12">
                  March 04, 2022
                </a>
              </div>
            </div>
            <div className="recent-post d-flex align-items-center">
              <div className="media-img">
                <img
                  src="/assets/img/widget/recent-3.jpg"
                  width={100}
                  height={73}
                  alt="Recent Post Image"
                />
              </div>
              <div className="media-body pl-30">
                <h4 className="recent-post-title h5 mb-0">
                  <a href="blog.html">Get natural healthy food</a>
                </h4>
                <a href="#" className="text-theme fs-12">
                  April 04, 2022
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul
      className="nav product-tab-style1 mb-30 justify-content-center mb-4"
      id="productTab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <a
          className="nav-link "
          id="description-tab"
          data-bs-toggle="tab"
          href="#description"
          role="tab"
          aria-controls="description"
          aria-selected="false"
        >
          description
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link active"
          id="reviews-tab"
          data-bs-toggle="tab"
          href="#reviews"
          role="tab"
          aria-controls="reviews"
          aria-selected="true"
        >
          reviews
        </a>
      </li>
    </ul>
    <div className="tab-content mb-30" id="productTabContent">
      <div
        className="tab-pane fade"
        id="description"
        role="tabpanel"
        aria-labelledby="description-tab"
      >
        <p className="fs-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,{" "}
        </p>
        <div className="row mt-30">
          <div className="col-md-6 mb-30">
            <img
              src="/assets/img/shop/shop-desc-1.jpg"
              className="w-100"
              alt="Shop Image"
            />
          </div>
          <div className="col-md-6 mb-30">
            <img
              src="/assets/img/shop/shop-desc-2.jpg"
              className="w-100"
              alt="Shop Image"
            />
          </div>
        </div>
        <div className="product-inner-list mb-4">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Fusce vitae orci id leo pulvinar euismod et placerat diam.</li>
            <li>Etiam pharetra mauris at fringilla laoreet.</li>
            <li>
              Vivamus eu tellus pretium, fringilla justo nec, volutpat sapien.
            </li>
          </ul>
        </div>
        <div className="product-inner-list ">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Fusce vitae orci id leo pulvinar euismod et placerat diam.</li>
            <li>Etiam pharetra mauris at fringilla laoreet.</li>
            <li>
              Vivamus eu tellus pretium, fringilla justo nec, volutpat sapien.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="tab-pane fade show active"
        id="reviews"
        role="tabpanel"
        aria-labelledby="reviews-tab"
      >
        <div className="vs-comment-area list-style-none vs-comments-layout1 pt-3 ">
          <ul className="comment-list">
            <li className="review vs-comment">
              <div className="vs-post-comment">
                <div className="author-img">
                  <img
                    src="/assets/img/blog/comment-author-1.jpg"
                    alt="Comment Author"
                  />
                </div>
                <div className="comment-content">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <h4 className="name h5">Mark Jack</h4>
                  <span className="commented-on">22 April, 2022</span>
                  <p className="text">
                    Progressively procrastinate mission-critical action items
                    before team building ROI. Interactively provide access to
                    cross functional quality vectors for client-centric
                    catalysts for change.
                  </p>
                </div>
              </div>
            </li>
            <li className="review vs-comment">
              <div className="vs-post-comment">
                <div className="author-img">
                  <img
                    src="/assets/img/blog/comment-author-2.jpg"
                    alt="Comment Author"
                  />
                </div>
                <div className="comment-content">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <h4 className="name h5">John Deo</h4>
                  <span className="commented-on">26 April, 2022</span>
                  <p className="text">
                    Competently provide access to fully researched methods of
                    empowerment without sticky models. Credibly morph front-end
                    niche markets whereas 2.0 users. Enthusiastically seize
                    team.
                  </p>
                </div>
              </div>
            </li>
            <li className="review vs-comment">
              <div className="vs-post-comment">
                <div className="author-img">
                  <img
                    src="/assets/img/blog/comment-author-1.jpg"
                    alt="Comment Author"
                  />
                </div>
                <div className="comment-content">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <h4 className="name h5">Tara sing</h4>
                  <span className="commented-on">26 April, 2022</span>
                  <p className="text">
                    Competently provide access to fully researched methods of
                    empowerment without sticky models. Credibly morph front-end
                    niche markets whereas 2.0 users. Enthusiastically seize
                    team.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>{" "}
        {/* Comment Form */}
        <div className="vs-comment-form pt-3">
          <div className="form-title">
            <h3 className="h4 mb-lg-4 pb-lg-1">Add a review</h3>
          </div>
          <div className="row g-2">
            <div className="form-group rating-select d-flex align-items-center">
              <label>Your Rating</label>
              <p className="stars">
                <span>
                  <a className="star-1" href="#">
                    1
                  </a>
                  <a className="star-2" href="#">
                    2
                  </a>
                  <a className="star-3" href="#">
                    3
                  </a>
                  <a className="star-4" href="#">
                    4
                  </a>
                  <a className="star-5" href="#">
                    5
                  </a>
                </span>
              </p>
            </div>
            <div className="col-12 form-group mb-0">
              <textarea
                placeholder="Write a Message"
                className="form-control"
                defaultValue={""}
              />
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="col-md-6 form-group mb-0">
              <input
                type="text"
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group mt-3 mb-1">
              <input id="reviewcheck" name="reviewcheck" type="checkbox" />
              <label htmlFor="reviewcheck">
                Save my name, email, and website in this browser for the next
                time I comment.
                <span className="checkmark" />
              </label>
            </div>
            <div className="col-12 form-group mb-0">
              <button className="vs-btn rounded-1">Post Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

                {/* <RelatedProducts products={products} /> */}
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getServerSidePaths() {
    // const products = await fetchDataFromApi("/api/products?populate=*");
    const products = {data:[]};
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p?.attributes?.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getServerSideProps({ params: { slug } }) {
    // const product = await fetchDataFromApi(
    //     `/api/products?populate=*&filters[slug][$eq]=${slug}`
    // );
    // const products = await fetchDataFromApi(
    //     `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    // );
    const product = null;
    const products = {data:[]};
    return {
        props: {
            product,
            products,
        },
    };
}
