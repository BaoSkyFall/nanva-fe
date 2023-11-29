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
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
const ProductDetails = ({ product, products }) => {
  const [isClient, setIsClient] = useState(false)
  const [showError, setShowError] = useState(false);
  const [productData, setProductData] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const p = { id: product?.data?.[0].id, ...product?.data?.[0]?.attributes };
  p.descriptionLines = p?.description?.split('\n');
  useEffect(() => {
    setProductData({ id: product?.data?.[0].id, ...product?.data?.[0]?.attributes, quantity: 1 });
  }, [product]);
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
    setIsClient(true)

  }, [])
  return (
    isClient ?
      <div className="w-full md:py-20">
        <ToastContainer />
        <Wrapper>
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
                    {productData?.image?.data.map(image => (<SwiperSlide>
                      <div className="product-img">
                        <img
                          src={image.attributes.url}
                          alt="Shop Image"
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>))}
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
                    {productData?.image?.data.map(image => (<SwiperSlide>

                      <div className="thumb">
                        <img
                          src={image.attributes.url}
                          alt="Thumb Image"
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="product-content">
                    <h3 className="product-title mb-1">{p.name}</h3>
                    <span className="price font-theme">
                      <strong>{p.price.toLocaleString()} đ</strong>
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
                    <div className="fs-xs my-4">
                      {p.descriptionLines.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-2 link-inherit fs-xs">
                      <p>
                        <strong className="text-title me-3 font-theme">
                          Tình Trạng :
                        </strong>
                        <a>
                          <i className="far fa-check-square me-2 ms-1" />
                          Còn Hàng
                        </a>
                      </p>
                    </div>
                    <div className="actions mb-4 pb-2">
                      <div className="quantity style2 me-4">
                        <input
                          type="number"
                          className="qty-input"
                          defaultValue={1}
                          onChange={($event) => {
                            setProductData({ ...productData, quantity: +$event.target.value })
                          }}
                          value={productData?.quantity}
                          min={1}
                          max={99}
                        />
                        <button className="quantity-minus qut-btn" onClick={() => {
                          setProductData({ ...productData, quantity: --productData.quantity })
                        }}>
                          <i className="far fa-chevron-down" />
                        </button>
                        <button className="quantity-plus qut-btn" onClick={() => {
                          setProductData({ ...productData, quantity: ++productData.quantity })
                        }}>
                          <i className="far fa-chevron-up" />
                        </button>
                      </div>
                      <a className="vs-btn shadow-none cursor-pointer" onClick={() => {
                        dispatch(
                          addToCart({
                            ...productData,
                            oneQuantityPrice: productData.price,
                          })
                        );
                        setProductData({ ...productData, quantity: 1 })
                        notify();
                      }}>
                        Thêm Vào Giỏ Hàng
                      </a>
                    </div>
                    <div className="product_meta">
                      {/* <span className="sku_wrapper">
                      SKU: <span className="sku">D2300-3-1</span>
                    </span> */}
                      <span className="posted_in">
                        Category:{" "}
                        {p.categories.data.map((category, index) => (
                          <Link key={index} href="/" rel="tag">
                            {category.attributes.name}
                          </Link>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 d-none d-xl-block">
                  <div className="widget   ">
                    <h3 className="widget_title">Bạn có thể thích</h3>
                    <div className="vs-widget-recent-post">
                      {products.data.map(product => (
                        <div className="recent-post d-flex align-items-center">
                          <div className="media-img">
                            <img
                              src={product.attributes.thumbnail.data.attributes.url}
                              width={100}
                              height={73}
                              alt="Recent Post Image"
                            />
                          </div>
                          <div className="media-body pl-30">
                            <h4 className="recent-post-title h5 mb-0">
                              <Link href={`/product/${product.attributes.slug}`}>{product.attributes.name}</Link>
                            </h4>
                            <Link href={`/product/${product.attributes.slug}`} className="text-theme fs-12">
                              <strong>{product.attributes.price.toLocaleString()} đ</strong>

                            </Link>
                          </div>
                        </div>
                      ))}
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
                    aria-selected="true"
                  >
                    Mô Tả
                  </a>
                </li>
              </ul>
              <div className="tab-content mb-30" id="productTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  {p.descriptionLines.map((line, index) => (
                    <p className="fs-md" key={index}>{line}</p>
                  ))}
                  {/* <div className="row mt-30">
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
                </div> */}
                </div>
                <div
                  className="tab-pane fade "
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
      </div> : null
  );
};

export default ProductDetails;

export async function getServerSidePaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  // const products = { data: [] };
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
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  console.log('product:', product)
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}&pagination[pageSize]=3`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
