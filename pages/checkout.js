import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { CaretRightOutlined } from '@ant-design/icons';

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
  Row,
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
    children: <p>Chuyển Khoản Trực Tiếp Ngân Hàng</p>,
    style: panelStyle,
  }
];
const Cart = () => {
  const [loading, setLoading] = useState(false);
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
  return (
    <div className="w-full md:py-20">
      <Wrapper>


        <div className="vs-checkout-wrapper space-top space-md-bottom">
          <div className="container">
            <form action="#" className="woocommerce-checkout mt-40">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="h4">Billing Details</h2>
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
                      >
                        <Input size="large" placeholder="Nhập Email" />
                      </Form.Item>
                      <Form.Item
                        name="address"
                        label="Địa Chỉ"
                        rules={[{ required: true, message: 'Nhập địa chỉ' }]}
                      >
                        <Input.TextArea placeholder="Nhập địa chỉ của bạn cho đơn hàng" maxLength={300} />
                      </Form.Item>
                      <Form.Item
                        name="note"
                        label="Ghi Chú"

                        rules={[{ required: false, message: 'Nhập ghi chú của bạn cho đơn hàng' }]}
                      >
                        <Input.TextArea placeholder="Nhập ghi chú của bạn cho đơn hàng" maxLength={300} />
                      </Form.Item>
                    </Form>
                  </div>
                </div>

              </div>
            </form>
            <h4 className="mt-4 pt-lg-2">Your Order</h4>
            <form action="#" className="woocommerce-cart-form">
              <table className="cart_table mb-20">
                <thead>
                  <tr>
                    <th className="cart-col-image">Image</th>
                    <th className="cart-col-productname">Product Name</th>
                    <th className="cart-col-price">Price</th>
                    <th className="cart-col-quantity">Quantity</th>
                    <th className="cart-col-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem, index) => (<tr key={index} className="cart_item">
                    <td data-title="Product">
                      <a className="cart-productimage" href="#">
                        <img
                          width={91}
                          height={91}
                          src={cartItem.thumbnail.data.attributes.url}
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
                          <span>{cartItem.oneQuantityPrice.toLocaleString()}</span>đ
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
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount">
                            <bdi>
                              <span>{subTotal.toLocaleString()}</span> đ
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="woocommerce-shipping-totals shipping">
                        <th>Shipping and Handling</th>
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
                              <label htmlFor="free_shipping">Free shipping</label>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
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
                  <button type="submit" className="vs-btn">
                    Thanh Toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Wrapper>
    </div>
  );
};

export default Cart;
