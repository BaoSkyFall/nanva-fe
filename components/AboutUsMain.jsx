import React from "react";

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
const AboutUsMain = () => {
    return (
        <div
            className="sec-bg10  space-top space-md-bottom"
            data-bg-src="/assets/img/bg/ab-bg-5465.png"
        >
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="img-box5">
                            <div className="img-1">
                                <img src="/assets/img/about/ab-9-1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                        <span className="sub-title4">What is organic farming?</span>
                        <h2 className="sec-title4">
                            Organic Food is Farmed in Harmony with Nature
                        </h2>
                        <div className="row">
                            <div className="col-xl-10">
                                <p className="sec-text mb-lg-5 pe-lg-3">
                                    Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                                    nihil is in mei. Mei an periculaeuripidis, hincartem ei est.
                                    Alienum phaed is in mei. Mei an periculaeuripidis, hincarte
                                    periculaeuripidm ei est.
                                </p>
                            </div>
                        </div>
                        <div className="block-schedule">
                            <img src="/assets/img/icons/ab-icon-0088.png" alt="Icon image" />
                            <p className="text">Monday - Saturday: 9:00 - 24:00 Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AboutUsMain;
