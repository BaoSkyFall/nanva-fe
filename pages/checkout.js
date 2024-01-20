import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { CaretRightOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Spin,
  Select,
  Collapse,
  Radio,
  Space,
  theme
} from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'COD',
    children: <p>Thanh Toán Khi Nhận Hàng</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Chuyển Khoản',
    children: <div>
      <p>Chuyển Khoản Trực Tiếp Ngân Hàng</p>
      <div className="flex items-center justify-center">
        <img style={{ maxWidth: "100%" }} src="/assets/img/banking.jpg" alt="Foodano" />

      </div>
    </div>
    ,
    style: panelStyle,
  }
];
const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [shippingType, setShippingType] = useState("1");
  const { cartItems } = useSelector((state) => state.cart);
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total, val) => total + val.price,
      0
    );
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      await form.validateFields();
      const {
        address,
        email,
        name,
        note,
        phone
      } = form.getFieldsValue();

      const res = await makePaymentRequest("/api/orders", {
        data: {
          products: cartItems,
          totalPrice: subTotal,
          paymentMethod: shippingType == '1' ? 'COD' : 'Banking',
          customerName: name,
          email,
          address,
          notes: note,
          phoneNumber: phone
        }


      });
      setLoading(false)
      console.log('res:', res)
      if (res.data) {
        setOrderSuccess(true)
      }
      // await stripe.redirectToCheckout({
      //     sessionId: res.stripeSession.id,
      // });
    } catch (error) {
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      console.log(error);

    }
  };
  return (
    !orderSuccess ?
      (<>

        <div className="w-full md:py-20">
          <Wrapper>


            <div className="vs-checkout-wrapper space-top space-md-bottom">
              <div className="container">
                <form action="#" className="woocommerce-checkout mt-40">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2 className="h4">Chi Tiết Đơn Hàng</h2>
                      <div className="row gx-2">
                        <Form
                          {...formItemLayout}
                          form={form}
                          name="billingDetails"
                          onFinish={onFinish}
                          initialValues={{

                          }}
                          layout="vertical"
                          scrollToFirstError
                        >
                          <Form.Item
                            name="name"
                            label="Họ Tên"
                            // tooltip="What do you want others to call you?"
                            rules={[
                              {
                                required: true,
                                message: 'Vui lòng nhập Họ Tên!'
                              },
                            ]}
                            value="Nguyễn Văn Anh Minh"
                          >
                            <Input size="large" placeholder="Nhập Họ Tên" />
                          </Form.Item>



                          <Form.Item
                            name="phone"
                            label="Số Điện Thoại"
                            rules={[{ required: true, message: 'Vui lòng nhập Số điện thoại!' }]}
                          >
                            <Input size="large" addonBefore="+84" placeholder="Nhập SĐT" style={{ width: '100%' }} />
                          </Form.Item>
                          <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                              {
                                type: 'email',
                                message: 'Định dạng email không hợp lệ',
                              },
                              {
                                required: true,
                                message: 'Vui lòng nhập Email!',
                              },
                            ]}
                            value="35220035"
                          >
                            <Input size="large" placeholder="Nhập Email" />
                          </Form.Item>
                          <Form.Item
                            name="address"
                            label="Địa Chỉ"
                            rules={[{ required: true, message: 'Nhập địa chỉ' }]}
                            value="133 Cộng Hòa, Phường 3, Quận Tân Bình, TP. Hồ Chí Minh"
                          >
                            <Input.TextArea placeholder="Nhập địa chỉ của bạn cho đơn hàng" maxLength={300} />
                          </Form.Item>
                          <Form.Item
                            name="note"
                            label="Ghi Chú"
                            value="Giao giờ hành chính từ 7:00 - 17:00"

                            rules={[{ required: false, message: 'Nhập ghi chú của bạn cho đơn hàng' }]}
                          >
                            <Input.TextArea placeholder="Nhập ghi chú của bạn cho đơn hàng" maxLength={300} />
                          </Form.Item>
                        </Form>
                      </div>
                    </div>

                  </div>
                </form>
                <h4 className="mt-4 pt-lg-2">Đơn Hàng</h4>
                <form action="#" className="woocommerce-cart-form">
                  <table className="cart_table mb-20">
                    <thead>
                      <tr>
                        <th className="cart-col-image">Hình Ảnh</th>
                        <th className="cart-col-productname">Sản Phẩm</th>
                        <th className="cart-col-price">Giá</th>
                        <th className="cart-col-quantity">Số Lượng</th>
                        <th className="cart-col-total">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cartItem, index) => (<tr key={index} className="cart_item">
                        <td data-title="Product">
                          <a className="cart-productimage" href="#">
                            <img
                              width={91}
                              height={91}
                              src={cartItem?.thumbnail?.data?.attributes?.url}
                              alt="Image"
                            />
                          </a>
                        </td>
                        <td data-title="Name">
                          <a className="cart-productname" href="#">
                            {cartItem.name}
                          </a>
                        </td>
                        <td data-title="Price">
                          <span className="amount">
                            <bdi>
                              <span>{cartItem?.oneQuantityPrice?.toLocaleString()}</span>đ
                            </bdi>
                          </span>
                        </td>
                        <td data-title="Quantity">
                          <strong className="product-quantity">{cartItem.quantity}</strong>
                        </td>
                        <td data-title="Total">
                          <span className="amount">
                            <bdi>
                              <span>{(cartItem.price)?.toLocaleString()}</span>đ
                            </bdi>
                          </span>
                        </td>
                      </tr>))}

                    </tbody>
                  </table>
                </form>
                <div className="border ps-2 py-2 border-light">
                  <div className="row  justify-content-lg-end">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                      <table className="checkout-ordertable mb-0">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Tạm Tính</th>
                            <td>
                              <span className="amount">
                                <bdi>
                                  <span>{subTotal.toLocaleString()}</span> đ
                                </bdi>
                              </span>
                            </td>
                          </tr>
                          <tr className="woocommerce-shipping-totals shipping">
                            <th>Phí Vận Chuyển</th>
                            <td data-title="Shipping">
                              <ul className="woocommerce-shipping-methods list-unstyled">
                                <li>
                                  <input
                                    type="radio"
                                    checked
                                    id="free_shipping"
                                    name="shipping_method"
                                    className="shipping_method"
                                  />
                                  <label htmlFor="free_shipping">Miễn Phí</label>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Tổng</th>
                            <td>
                              <strong>
                                <span className="amount">
                                  <bdi>
                                    <span>{subTotal.toLocaleString()}</span> đ
                                  </bdi>
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="pt-10 pt-lg-5 mb-30">
                  <div className="woocommerce-checkout-payment">
                    <h4 className="mt-4 pt-lg-2">Hình Thức Thanh Toán</h4>
                    <Collapse
                      bordered={false}
                      accordion
                      defaultActiveKey={['1']}
                      onChange={(evt) => {
                        setShippingType(evt);
                      }}
                      expandIcon={({ isActive }) => <Radio checked={isActive} />}
                      style={{
                        background: token.colorBgContainer,
                      }}
                      items={getItems(panelStyle)}
                    />
                    <div className="form-row place-order">
                      <button type="submit" className="vs-btn" onClick={() => {
                        handlePayment()
                      }}>
                        Xác Nhận Mua Hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Wrapper>
        </div>
        <Spin spinning={loading} fullscreen indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        } tip="Đang Tải...">
        </Spin>
      </>)
      : (<><section className="vs-error-wrapper space-md-top space-bottom">
        <div className="container">
          <div className="error-content text-center">
            <h2 className="error-title h3 fw-semibold text-uppercase text-body mb-5 pb-1">
              Cảm Ơn bạn đã lựa chọn Nava Farm
            </h2>
            <Link href="/" className="vs-btn ">
              Return To Home
            </Link>{" "}
            <img src="assets/img/thank-you.jpg" alt="Error Image" />
          </div>
        </div>
      </section>
      </>)
  );
};

export default Cart;
