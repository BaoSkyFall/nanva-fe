import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        // <footer className="bg-white text-black pt-14 pb-3">
        //     <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        //         {/* LEFT START */}
        //         <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
        //             {/* MENU START */}
        //             <div className="flex flex-col gap-3 shrink-0">
        //                 <div className="font-roboto font-medium uppercase text-sm cursor-pointer">
        //                     Find a store
        //                 </div>
        //                 {/* <div className="font-roboto font-medium uppercase text-sm cursor-pointer">
        //                     become a partner
        //                 </div>
        //                 <div className="font-roboto font-medium uppercase text-sm cursor-pointer">
        //                     sign up for email
        //                 </div>
        //                 <div className="font-roboto font-medium uppercase text-sm cursor-pointer">
        //                     send us feedback
        //                 </div>
        //                 <div className="font-roboto font-medium uppercase text-sm cursor-pointer">
        //                     student discount
        //                 </div> */}
        //             </div>
        //             {/* MENU END */}

        //             {/* NORMAL MENU START */}
        //             <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
        //                 {/* MENU START */}
        //                 <div className="flex flex-col gap-3">
        //                     {/* <div className="font-roboto font-medium uppercase text-sm">
        //                         get help
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Order Status
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Delivery
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Returns
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Payment Options
        //                     </div> */}
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         <Link href="/about">
        //                             About Us</Link>
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         <Link href="/about">
        //                             Contact Us</Link>
        //                     </div>
        //                 </div>
        //                 {/* MENU END */}

        //                 {/* MENU START */}
        //                 {/* <div className="flex flex-col gap-3">
        //                     <div className="font-roboto font-medium uppercase text-sm">
        //                         About Nava Farm
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         News
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Careers
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Investors
        //                     </div>
        //                     <div className="text-sm text-black/[0.5] hover:text-black cursor-pointer">
        //                         Sustainability
        //                     </div>
        //                 </div> */}
        //                 {/* MENU END */}
        //             </div>
        //             {/* NORMAL MENU END */}
        //         </div>
        //         {/* LEFT END */}

        //         {/* RIGHT START */}
        //         <div className="flex gap-4 justify-center md:justify-start">
        //             <div
        //                 onClick={() =>
        //                     window.open("https://www.facebook.com/Nava Farm.limbo", "_blank")
        //                 }
        //                 className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
        //             >
        //                 <FaFacebookF size={20} />
        //             </div>
        //             {/* <Link
        //                 href="https://twitter.com"
        //                 className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
        //             >
        //                 <FaTwitter size={20} />
        //             </Link> */}
        //             {/* <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
        //                 <FaYoutube size={20} />
        //             </div> */}
        //             <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
        //                 onClick={() =>
        //                     window.open("https://www.instagram.com/Nava Farm.official", "_blank")
        //                 }>
        //                 <FaInstagram size={20} />
        //             </div>
        //         </div>
        //         {/* RIGHT END */}
        //     </Wrapper>
        //     <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        //         {/* LEFT START */}
        //         <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer text-center md:text-left">
        //             © 2023 Nava Farm, Inc. All Rights Reserved
        //         </div>
        //         {/* LEFT END */}

        //         {/* RIGHT START */}
        //         <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
        //             <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer">
        //                 Guides
        //             </div>
        //             <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer">
        //                 Terms of Sale
        //             </div>
        //             <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer">
        //                 Terms of Use
        //             </div>
        //             <div className="text-[12px] text-black/[0.5] hover:text-black cursor-pointer">
        //                 Privacy Policy
        //             </div>
        //         </div>
        //         {/* RIGHT END */}
        //     </Wrapper>
        // </footer>
        <footer
            className="footer-wrapper footer-layout2"
            data-bg-src="/assets/img/shape/footer-5-1.jpg"
        >
            <div className="container">
                <div className="widget-area">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="widget  footer-widget">
                                <div className="footer-info-widget">
                                    <div className="footer-info-logo">
                                        <img src="/assets/img/logo-white.svg" alt="Foodano" />
                                    </div>
                                    <div className="footer-info">
                                        <i className="fas fa-phone-alt" />
                                        <a href="tel:+387643932728">+387643932728</a>
                                    </div>
                                    <div className="footer-info">
                                        <i className="fas fa-map-marker-alt" />
                                        Harbour House, 60 Purewell, Christchurch, England
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="widget widget_nav_menu  footer-widget">
                                <h3 className="widget_title">Useful Links</h3>
                                <div className="menu-all-pages-container footer-links">
                                    <ul className="menu">
                                        <li>
                                            <a href="#">Farm &amp; Family</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Butchery</a>
                                        </li>
                                        <li>
                                            <a href="#">Farm Shops</a>
                                        </li>
                                        <li>
                                            <a href="#">Dartmoor Inn</a>
                                        </li>
                                        <li>
                                            <a href="#">Market Garden</a>
                                        </li>
                                        <li>
                                            <a href="#">Farm &amp; Family</a>
                                        </li>
                                        <li>
                                            <a href="#">Our Butchery</a>
                                        </li>
                                        <li>
                                            <a href="#">Farm Shops</a>
                                        </li>
                                        <li>
                                            <a href="#">Dartmoor Inn</a>
                                        </li>
                                        <li>
                                            <a href="#">Market Garden</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram Photos</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <a
                                            className="popup-image"
                                            href="assets/img/gallery/gal-2-1.jpg"
                                        >
                                            <img
                                                src="/assets/img/gallery/gal-2-1.jpg"
                                                alt="Gallery Image"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <a
                                            className="popup-image"
                                            href="assets/img/gallery/gal-2-2.jpg"
                                        >
                                            <img
                                                src="/assets/img/gallery/gal-2-2.jpg"
                                                alt="Gallery Image"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <a
                                            className="popup-image"
                                            href="assets/img/gallery/gal-2-3.jpg"
                                        >
                                            <img
                                                src="/assets/img/gallery/gal-2-3.jpg"
                                                alt="Gallery Image"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <a
                                            className="popup-image"
                                            href="assets/img/gallery/gal-2-4.jpg"
                                        >
                                            <img
                                                src="/assets/img/gallery/gal-2-4.jpg"
                                                alt="Gallery Image"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <a
                                            className="popup-image"
                                            href="assets/img/gallery/gal-2-5.jpg"
                                        >
                                            <img
                                                src="/assets/img/gallery/gal-2-5.jpg"
                                                alt="Gallery Image"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                    <div className="gallery-thumb">
                                        <a
                                            className="popup-image"
                                            href="assets/img/gallery/gal-2-6.jpg"
                                        >
                                            <img
                                                src="/assets/img/gallery/gal-2-6.jpg"
                                                alt="Gallery Image"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area" data-bg-src="/assets/img/shape/footer-5-2.png">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-auto text-center text-lg-start">
                            <div className="copyright">
                                <p className="mb-0 link-inherit">
                                    Copyright © 2022 <a href="index.html">Foodano</a> - All Rights
                                    Reserved by{" "}
                                    <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <div className="copyright-social">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                    Facebook
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                    Twitter
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in" />
                                    Linked In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
