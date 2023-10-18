'use client'
import React from "react";
import { useState, useEffect } from 'react'
// import $ from "jquery"

import Slider from 'react-slick';
import { BiArrowBack } from 'react-icons/bi'; // Assuming you have the react-icons package installed

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: false, // Disable default arrows
    slidesToShow: 1,
    slidesToScroll: 1,
};
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
const HeroBanner = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        // $('document').ready(function () {

        // Calling LayerSlider on your selected element after the document loaded
        $('.vs-hero-carousel').each(function () {
            var vsHslide = $(this);

            // return function for dom data
            function d(data) {
                return vsHslide.data(data)
            }

            /* Custom Thumb Navigation */
            var customNav = '.thumb';
            var navDom = 'data-slide-go';

            vsHslide.on('sliderDidLoad', function (event, slider) { // On Slide Init
                var currentSlide = slider.slides.current.index; // current Slide index 
                var i = 1;
                // Set Attribute 
                vsHslide.find(customNav).each(function () {
                    $(this).attr(navDom, i)
                    i++
                    // On Click Thumb, Change slide
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        var target = $(this).attr(navDom);
                        vsHslide.layerSlider(parseInt(target));
                    })
                });
                // Add class To current Thumb
                var currentNav = customNav + '[' + navDom + '="' + currentSlide + '"';
                $(currentNav).addClass('active');
            }).on('slideChangeDidComplete', function (event, slider) { // On slide Change Start
                var currentActive = slider.slides.current.index; // After change Current Index
                var currentNav = customNav + '[' + navDom + '="' + currentActive + '"';
                $(currentNav).addClass('active') // Add Class on current Nav
                $(currentNav).siblings().removeClass('active');
            });





            /* Custom Responsive Option */
            vsHslide.on('sliderWillLoad', function (event, slider) {
                // Define Variable
                var respLayer = jQuery(this).find('.ls-responsive'),
                    lsDesktop = 'ls-desktop',
                    lsLaptop = 'ls-laptop',
                    lsTablet = 'ls-tablet',
                    lsMobile = 'ls-mobile',
                    windowWid = jQuery(window).width(),
                    lgDevice = 1025,
                    mdDevice = 993,
                    smDevice = 768;

                // Set Style on each Layer
                respLayer.each(function () {
                    var layer = jQuery(this);

                    function lsd(data) {
                        return (layer.data(data) === '') ? layer.data(null) : layer.data(data);
                    }
                    // var respStyle = (windowWid < smDevice) ? ((lsd(lsMobile)) ? lsd(lsMobile) : lsd(lsTablet)) : ((windowWid < mdDevice) ? ((lsd(lsTablet)) ? lsd(lsTablet) : lsd(lsDesktop)) : lsd(lsDesktop)),
                    var respStyle = (windowWid < smDevice) ? lsd(lsMobile) : ((windowWid < mdDevice ? lsd(lsTablet) : ((windowWid < lgDevice) ? lsd(lsLaptop) : lsd(lsDesktop)))),
                        mainStyle = (layer.attr('style') !== undefined) ? layer.attr('style') : ' ';
                    layer.attr('style', mainStyle + respStyle);
                });

            });





            /* Custom Arrow Navigation */
            vsHslide.find('[data-ls-go]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    var target = $(this).data('ls-go');
                    vsHslide.layerSlider(target)
                });
            });

            vsHslide.layerSlider({
                allowRestartOnResize: true,
                globalBGImage: (d('globalbgimage') ? d('globalbgimage') : false),
                maxRatio: (d('maxratio') ? d('maxratio') : 1),
                type: (d('slidertype') ? d('slidertype') : 'responsive'),
                pauseOnHover: (d('pauseonhover') ? true : false),
                navPrevNext: (d('navprevnext') ? true : false),
                hoverPrevNext: (d('hoverprevnext') ? true : false),
                hoverBottomNav: (d('hoverbottomnav') ? true : false),
                navStartStop: (d('navstartstop') ? true : false),
                navButtons: (d('navbuttons') ? true : false),
                loop: ((d('loop') == false) ? false : true),
                autostart: (d('autostart') ? true : false),
                height: (($(window).width() < 767) ? (d('sm-height') ? d('sm-height') : d('height')) : (d('height') ? d('height') : 1080)),
                responsiveUnder: (d('responsiveunder') ? d('responsiveunder') : 1220),
                layersContainer: (d('container') ? d('container') : 1220),
                showCircleTimer: (d('showcircletimer') ? true : false),
                skinsPath: 'layerslider/skins/',
                thumbnailNavigation: ((d('thumbnailnavigation') == false) ? false : true)
            });
        });

        // });

    }, [])
    // if (!isClient) {
    //     return (<>Banner</>)
    // }
    // else {
    return (
        <section
            className="hero-layout7  "
            data-bg-src="assets/img/hero/hero-shape-7-1.png"
        >
            <div
                className="vs-hero-carousel"
                data-height={830}
                data-container={1900}
                data-slidertype="responsive"
            >
                {/* Slide 1*/}
                <div
                    className="ls-slide"
                    data-ls="duration:12000; transition2d:5; kenburnsscale:1.2;"
                >
                    <img
                        width={1767}
                        height={690}
                        src="assets/img/hero/hero-bg-7-1.jpg"
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        alt="hero bg"
                        style={{
                            top: 0,
                            left: "50%",
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="static:forever;"
                    />
                    <p
                        style={{
                            top: 0,
                            left: 0,
                            backgroundSize: "cover",
                            backgroundPosition: "inherit",
                            fontSize: 24,
                            width: "100%",
                            height: "100%",
                            backgroundImage: 'url("assets/img/hero/hero-bg-7-1.jpg")'
                        }}
                        className="ls-l ls-hide-desktop"
                        data-ls="static:forever;"
                    />
                    <img
                        width={588}
                        height={306}
                        src="assets/img/hero/hero-7-1-1.png"
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        alt="image"
                        style={{
                            top: 119,
                            left: 373,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                    />
                    <h1
                        style={{
                            top: 440,
                            left: 445,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 40,
                            fontFamily: '"Amatic SC", cursive',
                            color: "#fcd55c"
                        }}
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        Organic Plants and 100% Fresh Fruits
                    </h1>
                    <div
                        style={{
                            top: 511,
                            left: 445,
                            textAlign: "center",
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            width: 430
                        }}
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        <a href="shop.html" className="vs-btn style5 ls-btn">
                            Start Shopping
                            <i className="far fa-angle-right" />
                        </a>
                    </div>
                    <img
                        width={633}
                        height={542}
                        src="assets/img/hero/hero-7-1-4.png"
                        className="ls-l ls-hide-phone"
                        alt="image"
                        style={{
                            top: 108,
                            left: 1046,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                    />
                    <img
                        width={145}
                        height={147}
                        src="assets/img/hero/hero-7-1-2.png"
                        className="ls-l ls-hide-phone"
                        alt="image"
                        style={{
                            top: 118,
                            left: 1047,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="offsetxin:-200; offsetyin:top; durationin:1500; delayin:1200; easingin:easeOutQuint; rotatein:-45; offsetxout:-200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:-45;"
                    />
                    <img
                        width={234}
                        height={258}
                        src="assets/img/hero/hero-7-1-3.png"
                        className="ls-l ls-hide-phone"
                        alt="image"
                        style={{
                            top: 376,
                            left: 1487,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="offsetxin:200; durationin:1500; delayin:1400; easingin:easeOutQuint; rotatein:45; offsetxout:200; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                    />
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#prev"
                        target="_self"
                        data-ls="static:forever;"
                    >
                        <span
                            style={{
                                top: 743,
                                left: 376,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 24
                            }}
                            className=""
                        >
                            <span className="ls-prev-custom">
                                <span className="line" />
                                <span className="shape" />
                            </span>
                        </span>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#next"
                        target="_self"
                        data-ls="static:forever;"
                    >
                        <div
                            style={{
                                top: 743,
                                left: 1469,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 24
                            }}
                            className=""
                        >
                            <span className="ls-next-custom">
                                <span className="line" />
                                <span className="shape" />
                            </span>
                        </div>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#1"
                        target="_self"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff;"
                    >
                        <p
                            style={{
                                top: 752,
                                left: 810,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#ffffff",
                                backgroundColor: "#76a713",
                                zIndex: 1000
                            }}
                            className=""
                        >
                            1
                        </p>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#1"
                        target="_self"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff; static:forever;"
                    >
                        <p
                            style={{
                                top: 752,
                                left: 810,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#000000",
                                backgroundColor: "#ffffff"
                            }}
                            className=""
                        >
                            1
                        </p>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#2"
                        target="_self"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff; static:forever;"
                    >
                        <p
                            style={{
                                top: 752,
                                left: 869,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#000000",
                                backgroundColor: "#ffffff"
                            }}
                            className=""
                        >
                            2
                        </p>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#3"
                        target="_self"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff; static:forever;"
                    >
                        <p
                            style={{
                                top: 752,
                                left: "50%",
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#000000",
                                backgroundColor: "#ffffff"
                            }}
                            className=""
                        >
                            3
                        </p>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#4"
                        target="_self"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff; static:forever;"
                    >
                        <p
                            style={{
                                top: 752,
                                left: 990,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#000000",
                                backgroundColor: "#ffffff"
                            }}
                            className=""
                        >
                            4
                        </p>
                    </a>
                    <a
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        href="#5"
                        target="_self"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff; static:forever;"
                    >
                        <p
                            style={{
                                top: 752,
                                left: 1049,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#000000",
                                backgroundColor: "#ffffff"
                            }}
                            className=""
                        >
                            5
                        </p>
                    </a>
                    <img
                        width={588}
                        height={306}
                        src="assets/img/hero/hero-7-1-1.png"
                        className="ls-l ls-hide-desktop ls-hide-phone"
                        alt="image"
                        style={{
                            top: 119,
                            left: 80,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                    />
                    <h1
                        style={{
                            top: 445,
                            left: 80,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 62,
                            fontFamily: '"Amatic SC", cursive',
                            color: "#fcd55c"
                        }}
                        className="ls-l ls-hide-desktop ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        Organic Plants and 100% Fresh Fruits
                    </h1>
                    <span
                        style={{
                            top: 575,
                            left: 78,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            paddingRight: 60,
                            paddingBottom: 30,
                            paddingLeft: 60,
                            fontFamily: '"Lato",sans-serif',
                            fontSize: 30,
                            color: "#fff",
                            borderRadius: 9999,
                            borderTop: "3px solid #fff",
                            borderRight: "3px solid #fff",
                            borderBottom: "3px solid #fff",
                            borderLeft: "3px solid #fff",
                            paddingTop: 30
                        }}
                        className="ls-l ls-hide-desktop ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                    >
                        START SHOPPING
                    </span>
                    <h1
                        style={{
                            top: 72,
                            left: 58,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 160,
                            fontFamily: '"Amatic SC", cursive',
                            color: "#fcd55c",
                            width: 1000,
                            whiteSpace: "normal"
                        }}
                        className="ls-l ls-hide-desktop ls-hide-tablet"
                        data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        Organic Plants and 100% Fresh Fruits
                    </h1>
                    <span
                        style={{
                            top: 528,
                            left: 61,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            paddingRight: 100,
                            paddingBottom: 50,
                            paddingLeft: 100,
                            fontFamily: '"Lato",sans-serif',
                            fontSize: 60,
                            color: "#fff",
                            borderRadius: 9999,
                            borderTop: "3px solid #fff",
                            borderRight: "3px solid #fff",
                            borderBottom: "3px solid #fff",
                            borderLeft: "3px solid #fff",
                            paddingTop: 50
                        }}
                        className="ls-l ls-hide-desktop ls-hide-tablet"
                        data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                    >
                        START SHOPPING
                    </span>
                    <img
                        width={633}
                        height={542}
                        src="assets/img/hero/hero-7-1-4.png"
                        className="ls-l ls-hide-desktop ls-hide-tablet"
                        alt="image"
                        style={{
                            top: 97,
                            left: 1058,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            width: 793,
                            height: 679
                        }}
                        data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                    />
                </div>

                {/* Slide 2*/}
                <div
                    className="ls-slide"
                    data-ls="duration:12000; transition2d:5; kenburnsscale:1.2;"
                >
                    <img
                        width={588}
                        height={306}
                        src="assets/img/hero/hero-7-1-1.png"
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        alt="image"
                        style={{
                            top: 119,
                            left: 373,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                    />
                    <h1
                        style={{
                            top: 440,
                            left: 436,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 40,
                            fontFamily: '"Amatic SC", cursive',
                            color: "#fcd55c"
                        }}
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        Pick words related to Organic food brand
                    </h1>
                    <div
                        style={{
                            top: 511,
                            left: 445,
                            textAlign: "center",
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            width: 430
                        }}
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        <a href="shop.html" className="vs-btn style5 ls-btn">
                            Start Shopping
                            <i className="far fa-angle-right" />
                        </a>
                    </div>
                    <img
                        width={500}
                        height={636}
                        src="assets/img/hero/hero-7-2-4.png"
                        className="ls-l ls-hide-phone"
                        alt="image"
                        style={{
                            top: 5,
                            left: 1135,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            width: 537,
                            height: 683
                        }}
                        data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                    />
                    <img
                        width={145}
                        height={147}
                        src="assets/img/hero/hero-7-1-2.png"
                        className="ls-l ls-hide-phone"
                        alt="image"
                        style={{
                            top: 118,
                            left: 1047,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="offsetxin:-200; offsetyin:top; durationin:1500; delayin:1200; easingin:easeOutQuint; rotatein:-45; offsetxout:-200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:-45;"
                    />
                    <p
                        style={{
                            top: 752,
                            left: 869,
                            textAlign: "center",
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 16,
                            fontFamily: '"Lato", sans-serif',
                            lineHeight: 40,
                            width: 40,
                            height: 40,
                            borderRadius: "100%",
                            color: "#ffffff",
                            backgroundColor: "#76a713",
                            zIndex: 1000
                        }}
                        className="ls-l ls-hide-tablet ls-hide-phone"
                        data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff;"
                    >
                        2
                    </p>
                    <img
                        width={588}
                        height={306}
                        src="assets/img/hero/hero-7-1-1.png"
                        className="ls-l ls-hide-desktop ls-hide-phone"
                        alt="image"
                        style={{
                            top: 119,
                            left: 80,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit"
                        }}
                        data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                    />
                    <h1
                        style={{
                            top: 445,
                            left: 80,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 62,
                            fontFamily: '"Amatic SC", cursive',
                            color: "#fcd55c"
                        }}
                        className="ls-l ls-hide-desktop ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        Pick words related to Organic food brand
                    </h1>
                    <span
                        style={{
                            top: 575,
                            left: 78,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            paddingRight: 60,
                            paddingBottom: 30,
                            paddingLeft: 60,
                            fontFamily: '"Lato",sans-serif',
                            fontSize: 30,
                            color: "#fff",
                            borderRadius: 9999,
                            borderTop: "3px solid #fff",
                            borderRight: "3px solid #fff",
                            borderBottom: "3px solid #fff",
                            borderLeft: "3px solid #fff",
                            paddingTop: 30
                        }}
                        className="ls-l ls-hide-desktop ls-hide-phone"
                        data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                    >
                        START SHOPPING
                    </span>
                    <h1
                        style={{
                            top: 72,
                            left: 58,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            fontSize: 160,
                            fontFamily: '"Amatic SC", cursive',
                            color: "#fcd55c",
                            width: 1000,
                            whiteSpace: "normal"
                        }}
                        className="ls-l ls-hide-desktop ls-hide-tablet"
                        data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                    >
                        Pick words related to Organic food brand
                    </h1>
                    <span
                        style={{
                            top: 528,
                            left: 61,
                            fontWeight: 700,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            paddingRight: 100,
                            paddingBottom: 50,
                            paddingLeft: 100,
                            fontFamily: '"Lato",sans-serif',
                            fontSize: 60,
                            color: "#fff",
                            borderRadius: 9999,
                            borderTop: "3px solid #fff",
                            borderRight: "3px solid #fff",
                            borderBottom: "3px solid #fff",
                            borderLeft: "3px solid #fff",
                            paddingTop: 50
                        }}
                        className="ls-l ls-hide-desktop ls-hide-tablet"
                        data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                    >
                        START SHOPPING
                    </span>
                    <img
                        width={500}
                        height={636}
                        src="assets/img/hero/hero-7-2-4.png"
                        className="ls-l ls-hide-desktop ls-hide-tablet"
                        alt="image"
                        style={{
                            top: 13,
                            left: 1135,
                            backgroundSize: "inherit",
                            backgroundPosition: "inherit",
                            width: 651,
                            height: 828
                        }}
                        data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                    />
                </div>
                {/* Slide 3*/}
                {/* <div
                        className="ls-slide"
                        data-ls="duration:12000; transition2d:5; kenburnsscale:1.2;"
                    >
                        <img
                            width={588}
                            height={306}
                            src="assets/img/hero/hero-7-1-1.png"
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            alt="image"
                            style={{
                                top: 119,
                                left: 373,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                        />
                        <h1
                            style={{
                                top: 440,
                                left: 445,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 40,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c"
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Intermix words alphabets uniqueness
                        </h1>
                        <div
                            style={{
                                top: 511,
                                left: 445,
                                textAlign: "center",
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 430
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            <a href="shop.html" className="vs-btn style5 ls-btn">
                                Start Shopping
                                <i className="far fa-angle-right" />
                            </a>
                        </div>
                        <img
                            width={496}
                            height={618}
                            src="assets/img/hero/hero-7-3-4.png"
                            className="ls-l ls-hide-phone"
                            alt="image"
                            style={{
                                top: 13,
                                left: 1123,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 539,
                                height: 671
                            }}
                            data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                        />
                        <img
                            width={145}
                            height={147}
                            src="assets/img/hero/hero-7-1-2.png"
                            className="ls-l ls-hide-phone"
                            alt="image"
                            style={{
                                top: 118,
                                left: 1047,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="offsetxin:-200; offsetyin:top; durationin:1500; delayin:1200; easingin:easeOutQuint; rotatein:-45; offsetxout:-200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:-45;"
                        />
                        <p
                            style={{
                                top: 752,
                                left: "50%",
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#ffffff",
                                backgroundColor: "#76a713",
                                zIndex: 1000
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff;"
                        >
                            3
                        </p>
                        <img
                            width={588}
                            height={306}
                            src="assets/img/hero/hero-7-1-1.png"
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            alt="image"
                            style={{
                                top: 119,
                                left: 80,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                        />
                        <h1
                            style={{
                                top: 445,
                                left: 80,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 62,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c"
                            }}
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Intermix words alphabets uniqueness
                        </h1>
                        <span
                            style={{
                                top: 575,
                                left: 78,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                paddingRight: 60,
                                paddingBottom: 30,
                                paddingLeft: 60,
                                fontFamily: '"Lato",sans-serif',
                                fontSize: 30,
                                color: "#fff",
                                borderRadius: 9999,
                                borderTop: "3px solid #fff",
                                borderRight: "3px solid #fff",
                                borderBottom: "3px solid #fff",
                                borderLeft: "3px solid #fff",
                                paddingTop: 30
                            }}
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                        >
                            START SHOPPING
                        </span>
                        <h1
                            style={{
                                top: 72,
                                left: 58,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 160,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c",
                                width: 1000,
                                whiteSpace: "normal"
                            }}
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Intermix words alphabets uniqueness
                        </h1>
                        <span
                            style={{
                                top: 528,
                                left: 61,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                paddingRight: 100,
                                paddingBottom: 50,
                                paddingLeft: 100,
                                fontFamily: '"Lato",sans-serif',
                                fontSize: 60,
                                color: "#fff",
                                borderRadius: 9999,
                                borderTop: "3px solid #fff",
                                borderRight: "3px solid #fff",
                                borderBottom: "3px solid #fff",
                                borderLeft: "3px solid #fff",
                                paddingTop: 50
                            }}
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                        >
                            START SHOPPING
                        </span>
                        <img
                            width={496}
                            height={618}
                            src="assets/img/hero/hero-7-3-4.png"
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            alt="image"
                            style={{
                                top: "-1px",
                                left: 1110,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 655,
                                height: 816,
                                fontSize: 16
                            }}
                            data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                        />
                    </div> */}
                {/* Slide 4*/}
                {/* <div
                        className="ls-slide"
                        data-ls="duration:12000; transition2d:5; kenburnsscale:1.2;"
                    >
                        <img
                            width={588}
                            height={306}
                            src="assets/img/hero/hero-7-1-1.png"
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            alt="image"
                            style={{
                                top: 119,
                                left: 373,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                        />
                        <h1
                            style={{
                                top: 440,
                                left: 427,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 40,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c"
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Inspire your ideas from movies &amp; dramas
                        </h1>
                        <div
                            style={{
                                top: 511,
                                left: 445,
                                textAlign: "center",
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 430
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            <a href="shop.html" className="vs-btn style5 ls-btn">
                                Start Shopping
                                <i className="far fa-angle-right" />
                            </a>
                        </div>
                        <img
                            width={494}
                            height={616}
                            src="assets/img/hero/hero-7-4-4.png"
                            className="ls-l ls-hide-phone"
                            alt="image"
                            style={{
                                top: 40,
                                left: 1151,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                        />
                        <img
                            width={145}
                            height={147}
                            src="assets/img/hero/hero-7-1-2.png"
                            className="ls-l ls-hide-phone"
                            alt="image"
                            style={{
                                top: 118,
                                left: 1047,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="offsetxin:-200; offsetyin:top; durationin:1500; delayin:1200; easingin:easeOutQuint; rotatein:-45; offsetxout:-200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:-45;"
                        />
                        <p
                            style={{
                                top: 752,
                                left: 990,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#ffffff",
                                backgroundColor: "#76a713",
                                zIndex: 1000
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff;"
                        >
                            4
                        </p>
                        <img
                            width={588}
                            height={306}
                            src="assets/img/hero/hero-7-1-1.png"
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            alt="image"
                            style={{
                                top: 119,
                                left: 80,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                        />
                        <h1
                            style={{
                                top: 445,
                                left: 80,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 62,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c"
                            }}
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Inspire your ideas from movies &amp; dramas
                        </h1>
                        <span
                            style={{
                                top: 575,
                                left: 78,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                paddingRight: 60,
                                paddingBottom: 30,
                                paddingLeft: 60,
                                fontFamily: '"Lato",sans-serif',
                                fontSize: 30,
                                color: "#fff",
                                borderRadius: 9999,
                                borderTop: "3px solid #fff",
                                borderRight: "3px solid #fff",
                                borderBottom: "3px solid #fff",
                                borderLeft: "3px solid #fff",
                                paddingTop: 30
                            }}
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                        >
                            START SHOPPING
                        </span>
                        <h1
                            style={{
                                top: 72,
                                left: 58,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 160,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c",
                                width: 1000,
                                whiteSpace: "normal"
                            }}
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Inspire your ideas from movies &amp; dramas
                        </h1>
                        <span
                            style={{
                                top: 528,
                                left: 61,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                paddingRight: 100,
                                paddingBottom: 50,
                                paddingLeft: 100,
                                fontFamily: '"Lato",sans-serif',
                                fontSize: 60,
                                color: "#fff",
                                borderRadius: 9999,
                                borderTop: "3px solid #fff",
                                borderRight: "3px solid #fff",
                                borderBottom: "3px solid #fff",
                                borderLeft: "3px solid #fff",
                                paddingTop: 50
                            }}
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                        >
                            START SHOPPING
                        </span>
                        <img
                            width={494}
                            height={616}
                            src="assets/img/hero/hero-7-4-4.png"
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            alt="image"
                            style={{
                                top: 33,
                                left: 1171,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 623,
                                height: 776
                            }}
                            data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                        />
                    </div> */}
                {/* Slide 5*/}
                {/* <div
                        className="ls-slide"
                        data-ls="duration:12000; transition2d:5; kenburnsscale:1.2;"
                    >
                        <img
                            width={588}
                            height={306}
                            src="assets/img/hero/hero-7-1-1.png"
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            alt="image"
                            style={{
                                top: 119,
                                left: 373,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                        />
                        <h1
                            style={{
                                top: 440,
                                left: 445,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 40,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c"
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Before come up with an organic food
                        </h1>
                        <div
                            style={{
                                top: 511,
                                left: 445,
                                textAlign: "center",
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 430
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            <a href="shop.html" className="vs-btn style5 ls-btn">
                                Start Shopping
                                <i className="far fa-angle-right" />
                            </a>
                        </div>
                        <img
                            width={491}
                            height={621}
                            src="assets/img/hero/hero-7-5-4.png"
                            className="ls-l ls-hide-phone"
                            alt="image"
                            style={{
                                top: 34,
                                left: 1142,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                        />
                        <img
                            width={145}
                            height={147}
                            src="assets/img/hero/hero-7-1-2.png"
                            className="ls-l ls-hide-phone"
                            alt="image"
                            style={{
                                top: 118,
                                left: 1047,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="offsetxin:-200; offsetyin:top; durationin:1500; delayin:1200; easingin:easeOutQuint; rotatein:-45; offsetxout:-200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:-45;"
                        />
                        <p
                            style={{
                                top: 752,
                                left: 1049,
                                textAlign: "center",
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 16,
                                fontFamily: '"Lato", sans-serif',
                                lineHeight: 40,
                                width: 40,
                                height: 40,
                                borderRadius: "100%",
                                color: "#ffffff",
                                backgroundColor: "#76a713",
                                zIndex: 1000
                            }}
                            className="ls-l ls-hide-tablet ls-hide-phone"
                            data-ls="hover:true; hoverbgcolor:#76a713; hovercolor:#ffffff;"
                        >
                            5
                        </p>
                        <img
                            width={588}
                            height={306}
                            src="assets/img/hero/hero-7-1-1.png"
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            alt="image"
                            style={{
                                top: 119,
                                left: 80,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit"
                            }}
                            data-ls="durationin:1300; easingin:easeOutQuint; durationout:1300; easingout:easeOutQuint;"
                        />
                        <h1
                            style={{
                                top: 445,
                                left: 80,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 62,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c"
                            }}
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Before come up with an organic food
                        </h1>
                        <span
                            style={{
                                top: 575,
                                left: 78,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                paddingRight: 60,
                                paddingBottom: 30,
                                paddingLeft: 60,
                                fontFamily: '"Lato",sans-serif',
                                fontSize: 30,
                                color: "#fff",
                                borderRadius: 9999,
                                borderTop: "3px solid #fff",
                                borderRight: "3px solid #fff",
                                borderBottom: "3px solid #fff",
                                borderLeft: "3px solid #fff",
                                paddingTop: 30
                            }}
                            className="ls-l ls-hide-desktop ls-hide-phone"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                        >
                            START SHOPPING
                        </span>
                        <h1
                            style={{
                                top: 72,
                                left: 58,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                fontSize: 160,
                                fontFamily: '"Amatic SC", cursive',
                                color: "#fcd55c",
                                width: 1000,
                                whiteSpace: "normal"
                            }}
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            data-ls="offsetyin:200; durationin:1500; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint;"
                        >
                            Before come up with an organic food
                        </h1>
                        <span
                            style={{
                                top: 528,
                                left: 61,
                                fontWeight: 700,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                paddingRight: 100,
                                paddingBottom: 50,
                                paddingLeft: 100,
                                fontFamily: '"Lato",sans-serif',
                                fontSize: 60,
                                color: "#fff",
                                borderRadius: 9999,
                                borderTop: "3px solid #fff",
                                borderRight: "3px solid #fff",
                                borderBottom: "3px solid #fff",
                                borderLeft: "3px solid #fff",
                                paddingTop: 50
                            }}
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            data-ls="offsetyin:200; durationin:1500; delayin:400; easingin:easeOutQuint; offsetyout:200; durationout:1500; easingout:easeOutQuint; hover:true; hovereasingin:easeOutQuint; hoverbgcolor:#ffffff; hovercolor:#76a713;"
                        >
                            START SHOPPING
                        </span>
                        <img
                            width={491}
                            height={621}
                            src="assets/img/hero/hero-7-5-4.png"
                            className="ls-l ls-hide-desktop ls-hide-tablet"
                            alt="image"
                            style={{
                                top: 15,
                                left: 1160,
                                backgroundSize: "inherit",
                                backgroundPosition: "inherit",
                                width: 633,
                                height: 801
                            }}
                            data-ls="offsetxin:200; offsetyin:top; durationin:1500; delayin:400; easingin:easeOutQuint; rotatein:45; offsetxout:200; offsetyout:top; durationout:1500; easingout:easeOutQuint; rotateout:45;"
                        />
                    </div> */}
            </div>
        </section>


    );
    // }

};

export default HeroBanner;
