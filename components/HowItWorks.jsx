import React from "react";

const HowItWorks = () => {
  return (
    <section className="  space-top">
      <div
        className="shape-mockup jump-reverse d-none d-xl-block"
        data-right="5%"
        data-bottom="14%"
      >
        <img src="/assets/img/shape/shape-8879.png" alt="shape" />
      </div>
      <div
        className="shape-mockup jump d-none d-xl-block"
        data-right="11.5%"
        data-top="18%"
      >
        <img src="/assets/img/shape/shape-7636.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row gx-80">
          <div className="col-lg-6 col-xl-6 mb-30">
            <div className="img-box6">
              <div className="img-1">
                <img src="/assets/img/about/ab-10-1.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 mb-30">
            <span className="sub-title4">Khám Phá Sức Khỏe</span>
            <h2 className="sec-title4 mb-4 pb-1">
              Hạt Điều Tự Nhiên Organic
            </h2>
            <h3 className="text-theme h4 mb-4 pb-1">
              Tận hưởng hương vị độc đáo và thơm ngon từ hạt điều tự nhiên, một nguồn dinh dưỡng giàu chất xơ và khoáng chất.
            </h3>
            <div className="block-step-list">
              <ol>
                {/* <li>Hạt Điều Đen Tự Nhiên, Hạt Điều Rang Muối Hồng Himalaya, Hạt Điều Hữu Cơ Sấy Khô, Hạt Điều Vị Caramel Đặc Biệt</li> */}
                <li>Free Ship Tận Nơi (Khu Vực TPHCM) Cho Đơn Hàng 200k</li>
                <li>Đổi Trả Hàng Linh Hoạt Trong Vòng 24 Giờ</li>
                <li>Ưu Đãi Cho Đơn Hàng Đầu Tiên</li>
                <li>Quà Tặng Kèm Đơn Hàng Lớn</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HowItWorks;
