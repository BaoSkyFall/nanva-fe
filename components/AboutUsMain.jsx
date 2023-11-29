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
                        <span className="sub-title4">Hạt điều organic là gì?</span>
                        <h2 className="sec-title4">
                            Hạt điều organic hay còn gọi là hạt điều hữu cơ.
                        </h2>
                        <div className="row">
                            <div className="col-xl-10">
                                <p className="sec-text mb-lg-5 pe-lg-3">
                                    Hạt điều hữu cơ được phát triển với mục tiêu “hài hòa lợi ích giữa các thành tố như con người, cây điều, đất trồng và môi trường xung quanh. Hài hòa lợi ích chính là chìa khóa của phát triển bền vững”. Vì vậy điều kiện tiên quyết là cần hạn chế đến mức tối đa sử dụng thuốc trừ sâu, phân bón và các chất tăng trưởng.
                                </p>
                            </div>
                        </div>
                        <div className="block-schedule">
                            <img src="/assets/img/icons/feature-icon-1-1.png" alt="Icon image" />
                            <p className="text">Free Ship Khu Vực Bình Phước - Nội Thành TP.HCM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AboutUsMain;
