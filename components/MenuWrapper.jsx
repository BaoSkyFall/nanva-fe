import React from "react";
import Link from "next/link";

const MenuWrapper = ({ children, className }) => {
  return (
    <section className=" sec-bg8">
      <div className="container vs-container_style2">
        <div
          className="row gx-0 "

        >
          <div className="col-lg-4">
            <div className="cat-style2 no-1">
              <div className="cat-body">
                <h3 className="cat-title">Hạt Điều Đen Tự Nhiên</h3>
                <Link href="/shop" className="cat-link">
                  Mua Ngay
                </Link>
                <div className="cat-shape">
                  <img src="/assets/img/icons/cat-shape-1-1.png" alt="Shape" />
                </div>
                <div className="cat-img">
                  <img src="/assets/img/category/cat-749-1.jpg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="cat-style2"
              style={{ backgroundImage: `url("/assets/img/shape/cat-bg-794.jpg")` }}
              data-bg-src="/assets/img/shape/cat-bg-794.jpg"
            >
              <div className="cat-body">
                <h3 className="cat-title text-white">
                  Hạt Điều Rang Muối
                </h3>
                <Link href="/shop" className="cat-link">
                  Mua Ngay
                </Link>
                <div className="cat-shape">
                  <img src="/assets/img/icons/cat-shape-1-2.png" alt="Shape" />
                </div>
                <div className="cat-img">
                  <img src="/assets/img/category/cat-749-2.jpg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cat-style2 no-3">
              <div className="cat-body">
                <h3 className="cat-title">
                  Hạt Điều Hữu Cơ Sấy Khô
                </h3>
                <Link href="/shop" className="cat-link">
                  Mua Ngay
                </Link>
                <div className="cat-shape">
                  <img src="/assets/img/icons/cat-shape-1-3.png" alt="Shape" />
                </div>
                <div className="cat-img">
                  <img src="/assets/img/category/cat-749-3.jpg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default MenuWrapper;
