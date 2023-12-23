'use client'

import React from "react";
import { useState, useEffect } from 'react'

// const CustomArrowPrev = ({ onClick }) => (
//     <div
//         onClick={onClick}
//         className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
//     >
//         <BiArrowBack className="text-sm md:text-lg" />
//     </div>
// );

// const CustomArrowNext = ({ onClick }) => (
//     <div
//         onClick={onClick}
//         className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
//     >
//         <BiArrowBack className="rotate-180 text-sm md:text-lg" />
//     </div>
// );
const CategoryMain = () => {
    useEffect(() => {

    }, [])


    return (
        <section
            className=" space-md-bottom"
            data-bg-src="/assets/img/shape/cat-bg-656.png"
        >
            <div className="container">
                <div className="section-title text-center mt-5 mb-5">
                    <div className="sec-icon">
                        <img src="/assets/img/icons/sec-icon-2.png" alt="icon" />
                    </div>
                    <span className="sub-title4">What We Offer</span>
                    <h2 className="sec-title3">Popular Categories</h2>
                </div>
                <div
                    className="row justify-content-center dots-style2"

                >
                    <div className="col-auto cat-style1">
                        <div className="cat-body">
                            <div className="cat-shape" />
                            <div className="cat-img">
                                <img src="/assets/img/icons/cat-icon-1-1.png" alt="icon" />
                            </div>
                            <h3 className="cat-title">Bakery</h3>
                            <p className="cat-text">10 Products</p>
                        </div>
                    </div>
                    <div className="col-auto cat-style1">
                        <div className="cat-body">
                            <div className="cat-shape" />
                            <div className="cat-img">
                                <img src="/assets/img/icons/cat-icon-1-2.png" alt="icon" />
                            </div>
                            <h3 className="cat-title">Fresh Fruits</h3>
                            <p className="cat-text">78 Products</p>
                        </div>
                    </div>
                    <div className="col-auto cat-style1">
                        <div className="cat-body">
                            <div className="cat-shape" />
                            <div className="cat-img">
                                <img src="/assets/img/icons/cat-icon-1-3.png" alt="icon" />
                            </div>
                            <h3 className="cat-title">Tea &amp; Coffee</h3>
                            <p className="cat-text">7 Products</p>
                        </div>
                    </div>
                    <div className="col-auto cat-style1">
                        <div className="cat-body">
                            <div className="cat-shape" />
                            <div className="cat-img">
                                <img src="/assets/img/icons/cat-icon-1-4.png" alt="icon" />
                            </div>
                            <h3 className="cat-title">Vegetables</h3>
                            <p className="cat-text">10 Products</p>
                        </div>
                    </div>
                    <div className="col-auto cat-style1">
                        <div className="cat-body">
                            <div className="cat-shape" />
                            <div className="cat-img">
                                <img src="/assets/img/icons/cat-icon-1-5.png" alt="icon" />
                            </div>
                            <h3 className="cat-title">Baby Food</h3>
                            <p className="cat-text">50 Products</p>
                        </div>
                    </div>
                    <div className="col-auto cat-style1">
                        <div className="cat-body">
                            <div className="cat-shape" />
                            <div className="cat-img">
                                <img src="/assets/img/icons/cat-icon-1-1.png" alt="icon" />
                            </div>
                            <h3 className="cat-title">Organic Meet</h3>
                            <p className="cat-text">18 Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    );
};

export default CategoryMain;
