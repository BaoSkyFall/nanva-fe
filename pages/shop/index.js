import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";

import Link from "next/link";
import { LoadingOutlined } from '@ant-design/icons';
import {
  Spin,

} from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const minHeightStyle = {
  minHeight: '50vh', // Set the desired min-height value
};
const Shop = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("*");

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, categoryFilter);
  const notify = () => {
    toast.success("Thêm vào giỏ hàng Thành Công! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    // fetchProducts();
    fetchCategories();
  }, []);
  const fetchProducts = async () => {
    try {
      let filterCategory = '';
      if (categoryFilter.toString() != "*") {
        filterCategory = `&filters[categories][id]=${categoryFilter}`
      }
      const url = `/api/products?sort[0]=createdAt:DESC&populate=*&pagination[pageSize]=100`
      const products = await fetchDataFromApi(url + filterCategory);
      setProducts(products)
    }
    catch (error) {
      // Handle validation errors
      console.error('Form validation failed:', error);
    } finally {
      setLoading(false);
    }

  };
  const fetchCategories = async () => {
    try {
      const categories = await fetchDataFromApi(`/api/categories?populate=*`);
      setCategories(categories?.data || [])
    }
    catch (error) {
      // Handle validation errors
      console.error('Form validation failed:', error);
    } finally {
      // setLoading(false);
    }

  };
  return (
    <>
      <Spin spinning={loading} indicator={
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      } tip="Đang Tải...">
        <section style={minHeightStyle} className="vs-shop-wrapper position-relative space-top space-md-bottom">
          <div className="container">
            <div className="row flex-row-reverse ">
              <div className="col-lg-12 col-xl-12 ">
                <div className="sticky-top overflow-hidden">
                  <div className="vs-sort-bar row justify-content-center justify-content-sm-between align-items-center pb-3 pb-lg-5 mb-1 ">
                    <div className="col-auto mb-3 mb-sm-0">
                      <div className="nav" role="tablist">
                        <a
                          href="shop.html"
                          className="icon-btn style3 active  me-2"
                          id="tab-shop-grid"
                          data-bs-toggle="tab"
                          data-bs-target="#tab-grid"
                          role="tab"
                          aria-controls="tab-grid"
                          aria-selected="true"
                        >
                          <i className="fas fa-th" />
                        </a>
                        <a
                          href="shop-list.html"
                          className="icon-btn  style3  "
                          id="tab-shop-list"
                          data-bs-toggle="tab"
                          data-bs-target="#tab-list"
                          role="tab"
                          aria-controls="tab-grid"
                          aria-selected="false"
                        >
                          <i className="far fa-bars" />
                        </a>
                      </div>
                    </div>
                    <div className="col d-none d-md-block">
                      <div className="border-top" />
                    </div>
                    <div className="col-sm-9 col-md-7 col-lg-8 col-xl-6">
                      <div className="row justify-content-center justify-content-sm-between">
                        <div className="col-auto d-flex align-items-center mb-3 mb-sm-0">
                          <label className="text-body2" htmlFor="sortBy">
                            Thể Loại
                          </label>
                          <select name="sortBy" id="sortBy" className="form-select" onChange={(e) => {
                            setCategoryFilter(e.target.value);

                          }}>
                            <option value="*">Tất Cả</option>
                            {categories?.map(category => (<option key={category.id} value={category.id}>{category.attributes.name}</option>))}
                            {/* <option value="productName">Sorted Product Name</option>
                            <option value="productName">Sorted Product New</option>
                            <option value="productName">Sorted Product Popular</option> */}
                          </select>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                          {/* <label className="text-body2" htmlFor="showTotal">
                            Show
                          </label> */}
                          {/* <select
                            name="showTotal"
                            id="showTotal"
                            className="form-select"
                          >
                            <option value="productName">01</option>
                            <option value="productName">02</option>
                            <option value="productName">03</option>
                            <option value="productName">04</option>
                            <option value="productName">05</option>
                          </select> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="tab-grid"
                      role="tabpanel"
                      aria-labelledby="tab-shop-grid"
                    >
                      <div className="row">
                        {products?.data?.map(product => (
                          <div className="col-sm-6 col-xl-4">
                            <div className="vs-product-box1 thumb_swap">
                              <div className="product-tag1">Tết</div>
                              <div className="product-img">
                                <Link href={`product/${product.attributes.slug}`}>
                                  <Image
                                    src={product?.attributes?.thumbnail?.data?.attributes?.url}
                                    alt="Product Image"
                                    width={250}
                                    height={250}
                                    className=" w-100  transition transition-opacity opacity-0 duration-[2s]"
                                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                  />
                                </Link>
                                <Link href={`product/${product.attributes.slug}`}>
                                  <Image
                                    src={product?.attributes?.thumbnail?.data?.attributes?.url}
                                    alt="Product Image"
                                    width={250}
                                    height={250}
                                    className=" w-100 img_swap transition transition-opacity opacity-0 duration-[2s]"
                                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                  />
                                </Link>
                              </div>
                              <div className="product-content d-flex flex-column gap-3 align-items-center">
                                <div className="actions-btn">
                                  <a
                                    href="assets/img/shop/product-1-1.png"
                                    className="popup-image"
                                  >
                                    <i className="far fa-search" />
                                  </a>
                                </div>
                                <h4 className="product-title h5 mb-0">
                                  <Link href={`product/${product.attributes.slug}`}>{product.attributes.name}</Link>
                                </h4>
                                <div>
                                  <span className="price font-theme">
                                    <strong>{product.attributes.price.toLocaleString()} đ</strong>
                                    {product.attributes.original_price && <del style={{ textDecoration: 'line-through', fontSize: '14px', marginLeft: '0.5rem' }} className="ml-2 align-super text-base font-bold text-gray-600">{product.attributes.original_price?.toLocaleString()} đ</del>}
                                  </span>
                                </div>

                                <a className="vs-btn shadow-none cursor-pointer w-70" onClick={() => {
                                  dispatch(
                                    addToCart({
                                      ...product,
                                      oneQuantityPrice: product.price,
                                      quantity: 1
                                    })
                                  );
                                  notify();
                                }}>
                                  <i className="fal fa-cart-plus me-2" />
                                  Thêm Vào Giỏ Hàng
                                </a>
                                {/* <p className="m-0 rating fs-xs text-theme lh-base">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </p> */}
                              </div>
                            </div>
                          </div>
                        ))}


                      </div>
                    </div>
                    <div
                      className="tab-pane fade "
                      id="tab-list"
                      role="tabpanel"
                      aria-labelledby="tab-shop-list"
                    >
                      <div className="row ">
                        {products?.data?.map(product => (
                          <div key={product.id} className="col-sm-6 col-lg-6 col-xl-6">
                            <div className="vs-product-box2 d-xl-flex has-border thumb_swap">
                              <div className="product-img">
                                <Link href={`product/${product.attributes.slug}`}>
                                  <Image
                                    src={product?.attributes?.thumbnail?.data?.attributes?.url}
                                    alt="Product Image"
                                    width={250}
                                    height={250}
                                    className="w-100 transition transition-opacity opacity-0 duration-[2s]"
                                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                  />
                                </Link>
                                <Link href={`product/${product.attributes.slug}`}>
                                  <Image
                                    src={product?.attributes?.thumbnail?.data?.attributes?.url}
                                    alt="Product Image"
                                    width={250}
                                    height={250}
                                    className=" w-100 img_swap transition transition-opacity opacity-0 duration-[2s]"
                                    onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                  />
                                </Link>
                              </div>
                              <div className="product-content d-xl-flex">
                                <div className="d-flex flex-column gap-2">
                                  <h4 className="product-title h5 mb-1">
                                    <a href={`product/${product.attributes.slug}`}>{product.attributes.name}</a>
                                  </h4>
                                  <div className="price font-theme">
                                    <strong>{product.attributes.price.toLocaleString()} đ</strong>
                                    {product.attributes.original_price && <del style={{ textDecoration: 'line-through', fontSize: '14px', marginLeft: '0.5rem' }} className="ml-2 align-super text-base font-bold text-gray-600">{product.attributes.original_price?.toLocaleString()} đ</del>}
                                  </div>
                                  <a className="vs-btn shadow-none cursor-pointer w-70" onClick={() => {
                                    dispatch(
                                      addToCart({
                                        ...product,
                                        oneQuantityPrice: product.price,
                                        quantity: 1
                                      })
                                    );
                                    notify();
                                  }}>
                                    Thêm Vào Giỏ Hàng
                                  </a>
                                  {/* <p className="m-0 rating fs-xs text-theme lh-base">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="pagination-layout1 list-style-none text-center text-lg-end mt-0 mt-lg-4 mb-30">
                <ul>
                  <li>
                    <a href="#">Prev</a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div> */}
                </div>
              </div>
              {/* <div className="col-lg-4 col-xl-3">
            <aside className="sidebar-area">
              <div className="widget  ">
                <h3 className="widget_title">Filter By</h3>
                <div className="range-slider-area">
                  <strong className="fs-xs">Price</strong>
                  <div id="slider-range" />
                  <div className="price-amount">
                    <span id="minAmount" />
                    <span id="maxAmount" />
                  </div>
                </div>
              </div>
              <div className="widget widget_categories   ">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <a href="#">Juice</a>
                    <span>(06)</span>
                  </li>
                  <li>
                    <a href="#">Fresh</a>
                    <span>(10)</span>
                  </li>
                  <li>
                    <a href="#">Smoothie</a>
                    <span>(06)</span>
                  </li>
                </ul>
              </div>
              <div className="widget widget_categories   ">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <input type="checkbox" name="juice" id="juice" />
                    <label htmlFor="juice">Juice</label>
                    <span>(06)</span>
                  </li>
                  <li>
                    <input type="checkbox" name="Fresh" id="Fresh" />
                    <label htmlFor="Fresh">Fresh</label>
                    <span>(06)</span>
                  </li>
                  <li>
                    <input type="checkbox" name="Smoothie" id="Smoothie" />
                    <label htmlFor="Smoothie">Smoothie</label>
                    <span>(06)</span>
                  </li>
                </ul>
              </div>
              <div className="widget widget_search   ">
                <h3 className="widget_title">Product Name</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_tag_cloud   ">
                <h3 className="widget_title">Size</h3>
                <div className="tagcloud">
                  <a href="shop.html">300G</a>
                  <a href="shop.html">450G</a>
                  <a href="shop.html">1000G</a>
                  <a href="shop.html">500G</a>
                  <a href="shop.html">1200G</a>
                </div>
              </div>
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
            </aside>
          </div> */}
            </div>
          </div>
        </section>

      </Spin >
    </>

  );
}
export default Shop