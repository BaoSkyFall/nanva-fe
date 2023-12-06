import React from "react";
import Link from "next/link";

const CTAWrapper = () => {
  return (
    <section
      className=" space-top sec-bg7"
      style={{ backgroundImage: `url("/assets/img/bg/cat-bg-4584.jpg")` }}
      data-bg-src="/assets/img/bg/cat-bg-4584.jpg"
    >
      <div className="container text-center">
        <span className="sub-title4 text-white">Đảm Bảo 100% Organic</span>
        <h2 className="sec-title3 text-color2">Sản Phẩm Của Chúng Tôi</h2>
        <div className="row justify-content-center mb-xl-4 pb-1">
          <div className="col-md-9 col-lg-8 col-xl-6">
            <p className="sec-text text-white">
              Cam kết cung cấp hạt điều tự nhiên 100% không chất bảo quản. Tốt cho sức khỏe người tiêu dùng. Vận chuyển miễn phí cho khu vực Bình Phước, TP. HCM
            </p>
          </div>
        </div>
        <div className="row justify-content-center gy-3 pt-2">
          <div className="col-auto">
            <Link href="/shop" className="vs-btn style5">
              Mua Ngay
              <i className="fas fa-angle-right" />
            </Link>
          </div>
          <div className="col-auto">
            <a href="tel:+84985087708" className="vs-btn style4">
              <i className="fas fa-phone-alt" />
              +84985087708
            </a>
          </div>
        </div>
      </div>
    </section>

  );
};

export default CTAWrapper;
