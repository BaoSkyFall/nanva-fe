'use server'
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";


import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    const { cartItems, totalItems } = useSelector((state) => state.cart);
    const router = useRouter();

    const isActive = (pathnameList) => {
        // Check if the current route matches the provided pathname
        return pathnameList.includes(router.pathname);
    };
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const { data } = await fetchDataFromApi("/api/categories?populate=*");
        setCategories(data);
    };

    return (
        // <header
        //     className={`w-full h-[50px] md:h-[80px] bg-black text-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
        // >
        //     <Wrapper className="h-[60px] flex justify-between items-center">
        //         <Link href="/">
        //             <div className="flex items-center">
        //                 <img src="/logo.svg" className="w-[80px] md:w-[100px]" /> <span className="tracking-[.2em] text-white text-3xl font-semibold">Nava Farm</span>

        //             </div>
        //         </Link>

        //         <Menu
        //             showCatMenu={showCatMenu}
        //             setShowCatMenu={setShowCatMenu}
        //             categories={categories}
        //         />

        //         {mobileMenu && (
        //             <MenuMobile
        //                 showCatMenu={showCatMenu}
        //                 setShowCatMenu={setShowCatMenu}
        //                 setMobileMenu={setMobileMenu}
        //                 categories={categories}
        //             />
        //         )}

        //         <div className="flex items-center gap-2 text-white">
        //             {/* Icon start */}
        //             {/* <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
        //                 <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
        //                 <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">

        //                 </div>
        //             </div> */}
        //             {/* Icon end */}

        //             {/* Icon start */}
        //             <Link href="/cart">
        //                 <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-white/[0.05] cursor-pointer relative">
        //                     <BsCart className="text-[15px] md:text-[20px]" />
        //                     {totalItems > 0 && (
        //                         <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
        //                             {totalItems}
        //                         </div>
        //                     )}
        //                 </div>
        //             </Link>
        //             {/* Icon end */}

        //             {/* Mobile icon start */}
        //             <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-white/[0.05] cursor-pointer relative -mr-2">
        //                 {mobileMenu ? (
        //                     <VscChromeClose
        //                         className="text-[16px]"
        //                         onClick={() => setMobileMenu(false)}
        //                     />
        //                 ) : (
        //                     <BiMenuAltRight
        //                         className="text-[20px]"
        //                         onClick={() => setMobileMenu(true)}
        //                     />
        //                 )}
        //             </div>
        //             {/* Mobile icon end */}
        //         </div>
        //     </Wrapper>
        // </header>
        <header className="header-wrapper header-layout6">
            {/* <div class="header-top">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto d-none d-lg-block">
                        <div class="header-infos">
                            <p class="info"><img src="/assets/img/icons/info-icon-2.png" alt="icon">Free exress international delevery + Easy returens</p>
                        </div>
                    </div>
                    <div class="col-lg-auto text-center text-lg-end">
                        <div class="header-infos">
                            <p class="info"><i class="fas fa-phone-alt"></i>Phone:<a href="tel:02073885619">020 7388 5619</a></p>
                            <p class="info d-none d-md-inline-block"><i class="fas fa-envelope"></i>Email:<a href="mailto:info@username.com.uk">info@username.com.uk</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            <div className="container">
                <div className="menu-area">
                    <div className="row align-items-center justify-content-between">
                        <div className="col col-lg-auto">
                            <div className="header-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo.png" alt="Foodano" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            <nav className="main-menu mobile-menu-active menu-style2">
                                <ul>
                                    <li>
                                        <Link href="/" className={isActive(['/']) ? 'active' : ''}>
                                            Trang Chủ
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href="/shop" className={isActive(['/shop', '/product/[slug]', '/cart', '/checkout']) ? 'active' : ''}>
                                            Cửa Hàng
                                        </Link>
                                        {/* <ul className="sub-menu">
                                            <li>
                                                <a href="shop.html">Shop</a>
                                            </li>
                                            <li>
                                                <a href="shop-list.html">Shop List</a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html">Shop Details</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Shopping Cart</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Check Out</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="login-register.html">Login &amp; Register</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <a href="blog.html">Blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="blog-list.html">Blog List</a>
                                            </li>
                                            <li>
                                                <a href="blog-grid.html">Blog Grid</a>
                                            </li>
                                            <li>
                                                <a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog-masonry.html">Blog Masonry</a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="mega-menu-wrap menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul className="mega-menu">
                                            <li>
                                                <a href="shop.html">Pagelist 1</a>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">Home Style 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Home Style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Home Style 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Home Style 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Home Style 5</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-6.html">Home Style 6</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-7.html">Home Style 7</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Pagelist 2</a>
                                                <ul>
                                                    <li>
                                                        <a href="index-8.html">Home Style 8</a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="team.html">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">FAQ Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Pagelist 3</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list.html">Blog List</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid.html">Blog Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-masonry.html">Blog Masonry</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="error.html">Error Page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Pagelist 4</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop.html">Shop</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-list.html">Shop List</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-details.html">Shop Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">Shopping Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Check Out</a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="login-register.html">Login / Register</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <Link href="/contact">Liên Hệ Với Chúng Tôi</Link>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-auto d-none d-sm-block">
                            <div className="header-buttons">
                                {/* <button type="button" className="searchBoxTggler">
                                    <i className="far fa-search" />
                                </button>
                                <a href="wishlist.html">
                                    <i className="fal fa-heart" />
                                </a> */}
                                <Link className=" d-lg-none" href="/">
                                    Home
                                </Link>
                                <Link className=" d-lg-none" href="/shop">
                                    Shop
                                </Link>
                                {/* <Link className=" d-lg-none" href="/contact">Contact Us</Link> */}

                                <Link className="active" href="/cart" >

                                    <i className="fal fa-shopping-cart" />
                                    <span className="badge">{totalItems}</span>
                                </Link>


                            </div>
                        </div>
                        {/* <div className="col-auto d-block d-lg-none">
                            <button type="button" className="vs-menu-toggle ">
                                <i className="far fa-bars" />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>


    );
};

export default Header;
