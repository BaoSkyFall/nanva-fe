import HeroBanner from "@/components/HeroBanner";
import AboutUsMain from "@/components/AboutUsMain";
import CategoryMain from "@/components/CategoryMain";
import FeatureProducts from "@/components/FeatureProducts";

import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import dynamic from 'next/dynamic'
const ServerComponent = dynamic(() => import('@/components/HeroBanner'), { ssr: true })

export default function Home({ products }) {
    return (
        <main className="">
            <ServerComponent />
            <AboutUsMain />
            {/* <CategoryMain /> */}
            <FeatureProducts />
            <Wrapper className="">
                {/* heading and paragaph start */}
                {/* <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nava Farm midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div> */}
                {/* heading and paragaph end */}

                {/* products grid start */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div> */}
                {/* products grid end */}
                {/* <section
                    className=" vs-shop-wrapper  space-bottom sec-bg5"
                    data-bg-src="assets/img/shape/bg-9754.png"
                >
                    <div className="section-title text-center">
                        <div className="sec-icon">
                            <img src="assets/img/icons/sec-icon-2.png" alt="icon" />
                        </div>
                        <span className="sub-title4">100% Organic Food</span>
                        <h2 className="sec-title3">Featured Products</h2>
                    </div>
                    <div
                        className="nav filter-menu3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="horizontal"
                    >
                        <button
                            className="nav-link active"
                            id="v-pills-Trending-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-Trending"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-Trending"
                            aria-selected="true"
                        >
                            <i className="fas fa-fire-alt" />
                            Trending
                        </button>
                        <button
                            className="nav-link"
                            id="v-pills-Newest-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-Newest"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-Newest"
                            aria-selected="false"
                        >
                            <i className="far fa-plus" />
                            Newest
                        </button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-Trending"
                            role="tabpanel"
                            aria-labelledby="v-pills-Trending-tab"
                        >
                            <div className="container">
                                <div
                                    className="row vs-carousel dots-style2"
                                    data-slide-show={4}
                                    data-sm-slide-show={1}
                                    data-dots="true"
                                >
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-1.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
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
                                                    <a href="shop-details.html">Organic Apple Juice</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">9kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$89.00</strong>
                                                    <del>$36.00</del>
                                                </span>
                                                <span className="product-discount">(78% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-2.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-2.png"
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
                                                    <a href="shop-details.html">Organic Choice Herbal</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">7kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$78.00</strong>
                                                </span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-3.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-3.png"
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
                                                    <a href="shop-details.html">Orchid Organic Chartein</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">9kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$75.00</strong>
                                                    <del>$96.00</del>
                                                </span>
                                                <span className="product-discount">(5% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-4.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-4.png"
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
                                                    <a href="shop-details.html">Balance Bounty Juice</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">1kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$78.00</strong>
                                                    <del>$99.00</del>
                                                </span>
                                                <span className="product-discount">(4% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-5.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-5.png"
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
                                                    <a href="shop-details.html">True Organics Brighter</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">1kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$78.00</strong>
                                                    <del>$96.00</del>
                                                </span>
                                                <span className="product-discount">(5% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-Newest"
                            role="tabpanel"
                            aria-labelledby="v-pills-Newest-tab"
                        >
                            <div className="container">
                                <div
                                    className="row vs-carousel dots-style2"
                                    data-slide-show={4}
                                    data-sm-slide-show={1}
                                    data-dots="true"
                                >
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-6.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-6.png"
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
                                                    <a href="shop-details.html">Nature State Organic</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">7kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$75.00</strong>
                                                    <del>$99.00</del>
                                                </span>
                                                <span className="product-discount">(48% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-7.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-7.png"
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
                                                    <a href="shop-details.html">Original Organics</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">3kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$15.00</strong>
                                                    <del>$78.00</del>
                                                </span>
                                                <span className="product-discount">(12% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-8.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-8.png"
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
                                                    <a href="shop-details.html">Eco Indulgence</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">8kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$96.00</strong>
                                                </span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-9.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-9.png"
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
                                                    <a href="shop-details.html">Eco Indulgence</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">3kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$59.00</strong>
                                                    <del>$99.00</del>
                                                </span>
                                                <span className="product-discount">(78% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="vs-product-box4">
                                            <div className="product-img">
                                                <a href="shop-details.html">
                                                    <img
                                                        src="assets/img/shop/product-4-10.png"
                                                        alt="Product Image"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <span className="product-tag1">Hot</span>
                                                <div className="product-rating-box">
                                                    5.0
                                                    <div
                                                        className="star-rating"
                                                        role="img"
                                                        aria-label="Rated 5.00 out of 5"
                                                    >
                                                        <span style={{ width: "100%" }}>
                                                            Rated <strong className="rating">5.00</strong> out of 5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="actions-btn">
                                                    <a
                                                        href="assets/img/shop/product-4-10.png"
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
                                                    <a href="shop-details.html">Organic Roots</a>
                                                </h4>
                                                <div className="product-quantity">
                                                    Weight: <span className="text">5kg</span>
                                                </div>
                                                <span className="price">
                                                    <strong>$19.00</strong>
                                                    <del>$29.00</del>
                                                </span>
                                                <span className="product-discount">(18% off)</span>
                                            </div>
                                            <a href="cart.html" className="product-cart-btn">
                                                Add to Basket
                                                <i className="fal fa-cart-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </Wrapper>
        </main>
    );
}

export async function getServerSideProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    console.log('products getServerSideProps:', products)
    return {
        props: { products },
    };
}

