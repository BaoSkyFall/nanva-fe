import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);

    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);

    const handlePayment = async () => {
        try {
            setLoading(true);
            // const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems,
            });
            // await stripe.redirectToCheckout({
            //     sessionId: res.stripeSession.id,
            // });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* {cartItems?.length > 0 && (
                    <>
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Check Out
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            <div className="flex-[2] bg-black text-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
                                <div className="mb-4 flex justify-between">
                                    <div className="w-1/2 mr-2">
                                        <label className="block text-gray-300 text-sm font-bold mb-2" for="first-name">First Name</label>
                                        <input
                                            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
                                            type="text" id="first-name" placeholder="First Name" />
                                    </div>
                                    <div className="w-1/2 ml-2">
                                        <label className="block text-gray-300 text-sm font-bold mb-2" for="last-name">Last Name</label>
                                        <input
                                            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
                                            type="text" id="last-name" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300 text-sm font-bold mb-2" for="address">Address</label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
                                        id="address" rows="4" placeholder="Address"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300 text-sm font-bold mb-2" for="phone-number">Phone Number</label>
                                    <input
                                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
                                        type="text" id="phone-number" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="flex-[1] flex flex-col ">
                                <div className="">
                                    <div className="text-lg font-bold">
                                        Cart Items
                                    </div>
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} data={item} width={75} width={75} />
                                    ))}
                                </div>

                                <div className="">
                                    <div className="text-lg font-bold">Summary</div>

                                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl ">
                                        <div className="flex justify-between">
                                            <div className="uppercase text-md md:text-lg font-medium text-white">
                                                Subtotal
                                            </div>
                                            <div className="text-md md:text-lg font-medium text-white">
                                                {subTotal.toLocaleString()} đ
                                            </div>
                                        </div>
                                        <div className="text-sm md:text-md py-5 border-t mt-5">
                                            The subtotal reflects the total price of
                                            your order, including duties and taxes,
                                            before any applicable discounts. It does
                                            not include delivery costs and
                                            international transaction fees.
                                        </div>
                                    </div>

                                    <button
                                        className="w-full py-4 rounded-full border bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                        onClick={handlePayment}
                                    >
                                        Checkout
                                        {loading && <img src="/spinner.svg" />}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </>
                )}

                {cartItems?.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your cart is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your cart.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )} */}
                <div className="vs-checkout-wrapper space-top space-md-bottom">
  <div className="container">
    <div className="woocommerce-form-login-toggle">
      <div className="woocommerce-info">
        Returning customer?{" "}
        <a href="#" className="showlogin">
          Click here to login
        </a>{" "}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <form action="#" className="woocommerce-form-login">
          <div className="form-group">
            <label>Username or email *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username or email"
            />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <div className="custom-checkbox">
              <input type="checkbox" id="remembermylogin" />
              <label htmlFor="remembermylogin">Remember Me</label>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="vs-btn shadow-none">
              Login
            </button>
            <p className="fs-xs mt-2 mb-0">
              <a className="text-reset" href="#">
                Lost your password?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    <div className="woocommerce-form-coupon-toggle">
      <div className="woocommerce-info">
        Have a coupon?{" "}
        <a href="#" className="showcoupon">
          Click here to enter your code
        </a>{" "}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <form action="#" className="woocommerce-form-coupon">
          <div className="form-group">
            <label>Coupon code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Write your coupon code"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="vs-btn shadow-none">
              Apply coupon
            </button>
          </div>
        </form>
      </div>
    </div>
    <form action="#" className="woocommerce-checkout mt-40">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="h4">Billing Details</h2>
          <div className="row gx-2">
            <div className="col-12 form-group">
              <label>Country *</label>
              <select className="form-select">
                <option>United Kingdom (UK)</option>
                <option>United State (US)</option>
                <option>Equatorial Guinea (GQ)</option>
                <option>Australia (AU)</option>
                <option>Germany (DE)</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              <label>First Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="col-12 form-group">
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Company Name"
              />
            </div>
            <div className="col-12 form-group">
              <label>Address *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Street Address"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </div>
            <div className="col-12 form-group">
              <label>Town / City *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Town / City"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Country *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Postcode / Zip *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Postcode / Zip"
              />
            </div>
            <div className="col-12 form-group">
              <label>Contact Info *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="col-12 form-group">
              <input type="checkbox" id="accountNewCreate" />
              <label htmlFor="accountNewCreate">Creat An Account?</label>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <p id="ship-to-different-address">
            <input
              id="ship-to-different-address-checkbox"
              type="checkbox"
              name="ship_to_different_address"
              defaultValue={1}
            />
            <label htmlFor="ship-to-different-address-checkbox">
              Ship to a different address?
              <span className="checkmark" />
            </label>
          </p>
          <div className="shipping_address">
            <div className="row gx-2">
              <div className="col-12 form-group">
                <label>Country *</label>
                <select className="form-select">
                  <option>United Kingdom (UK)</option>
                  <option>United State (US)</option>
                  <option>Equatorial Guinea (GQ)</option>
                  <option>Australia (AU)</option>
                  <option>Germany (DE)</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-12 form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Company Name"
                />
              </div>
              <div className="col-12 form-group">
                <label>Address *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>
              <div className="col-12 form-group">
                <label>Town / City *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Town / City"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Country *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Postcode / Zip *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postcode / Zip"
                />
              </div>
              <div className="col-12 form-group">
                <label>Contact Info *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
          <div className="col-12 form-group">
            <label>Other Note</label>
            <textarea
              cols={20}
              rows={5}
              className="form-control"
              placeholder="Notes about your order, e.g. special notes for delivery."
              defaultValue={""}
            />
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
          <tr className="cart_item">
            <td data-title="Product">
              <a className="cart-productimage" href="#">
                <img
                  width={91}
                  height={91}
                  src="assets/img/cart/cat-img-1.png"
                  alt="Image"
                />
              </a>
            </td>
            <td data-title="Name">
              <a className="cart-productname" href="#">
                Parmesan Vegetable
              </a>
            </td>
            <td data-title="Price">
              <span className="amount">
                <bdi>
                  <span>$</span>18
                </bdi>
              </span>
            </td>
            <td data-title="Quantity">
              <strong className="product-quantity">01</strong>
            </td>
            <td data-title="Total">
              <span className="amount">
                <bdi>
                  <span>$</span>18
                </bdi>
              </span>
            </td>
          </tr>
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
                      <span>$</span>47
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
                        type="checkbox"
                        name="shipping_method"
                        className="shipping_method"
                        defaultChecked="checked"
                      />
                      <label>Flat rate</label>
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
                        <span>$</span>47
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
        <ul className="wc_payment_methods payment_methods methods">
          <li className="wc_payment_method payment_method_bacs">
            <input
              id="payment_method_bacs"
              type="radio"
              className="input-radio"
              name="payment_method"
              defaultValue="bacs"
              defaultChecked="checked"
            />
            <label htmlFor="payment_method_bacs">Direct bank transfer</label>
            <div className="payment_box payment_method_bacs">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          </li>
          <li className="wc_payment_method payment_method_cheque">
            <input
              id="payment_method_cheque"
              type="radio"
              className="input-radio"
              name="payment_method"
              defaultValue="cheque"
            />
            <label htmlFor="payment_method_cheque">Cheque Payment</label>
            <div className="payment_box payment_method_cheque">
              <p>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
          </li>
          <li className="wc_payment_method payment_method_cod">
            <input
              id="payment_method_cod"
              type="radio"
              className="input-radio"
              name="payment_method"
            />
            <label htmlFor="payment_method_cod">
              Credit Cart <img src="assets/img/card/all.jpg" alt="image" />
            </label>
            <div className="payment_box payment_method_cod">
              <p>Pay with cash upon delivery.</p>
            </div>
          </li>
          <li className="wc_payment_method payment_method_paypal">
            <input
              id="payment_method_paypal"
              type="radio"
              className="input-radio"
              name="payment_method"
              defaultValue="paypal"
            />
            <label htmlFor="payment_method_paypal">
              Paypal
              <img
                src="assets/img/card/paypal.jpg"
                alt="PayPal acceptance mark"
              />
            </label>
            <div className="payment_box payment_method_paypal">
              <p>
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </p>
            </div>
          </li>
        </ul>
        <div className="form-row place-order">
          <button type="submit" className="vs-btn">
            Place order
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
