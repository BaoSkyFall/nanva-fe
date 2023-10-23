import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const router = useRouter()
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
            // const res = await makePaymentRequest("/api/orders", {
            //     products: cartItems,
            // });
            router.push('/checkout')
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
                                Shopping Cart
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            <div className="flex-[2] ">
                                <div className="text-lg font-bold">
                                    Cart Items
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                            <div className="flex-[1]">
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
                    </>
                )} */}

                {/* This is empty screen */}
                {/* {cartItems?.length < 1 && (
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
                <div className="vs-cart-wrapper  space-top space-md-bottom">
  <div className="container">
    <div className="woocommerce-notices-wrapper">
      <div className="woocommerce-message">Shipping costs updated.</div>
    </div>
    <form action="#" className="woocommerce-cart-form">
      <table className="cart_table">
        <thead>
          <tr>
            <th className="cart-col-image">Image</th>
            <th className="cart-col-productname">Product Name</th>
            <th className="cart-col-price">Price</th>
            <th className="cart-col-quantity">Quantity</th>
            <th className="cart-col-total">Total</th>
            <th className="cart-col-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cart_item">
            <td data-title="Product">
              <a className="cart-productimage" href="shop-details.html">
                <img
                  width={91}
                  height={91}
                  src="assets/img/cart/cat-img-1.png"
                  alt="Image"
                />
              </a>
            </td>
            <td data-title="Name">
              <a className="cart-productname" href="shop-details.html">
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
              <div className="quantity">
                <button className="quantity-minus qut-btn">
                  <i className="far fa-minus" />
                </button>
                <input
                  type="number"
                  className="qty-input"
                  defaultValue={1}
                  min={1}
                  max={99}
                />
                <button className="quantity-plus qut-btn">
                  <i className="far fa-plus" />
                </button>
              </div>
            </td>
            <td data-title="Total">
              <span className="amount">
                <bdi>
                  <span>$</span>18
                </bdi>
              </span>
            </td>
            <td data-title="Remove">
              <a href="shop-details.html" className="remove">
                <i className="fal fa-trash-alt" />
              </a>
            </td>
          </tr>
          <tr className="cart_item">
            <td data-title="Product">
              <a className="cart-productimage" href="shop-details.html">
                <img
                  width={91}
                  height={91}
                  src="assets/img/cart/cat-img-2.png"
                  alt="Image"
                />
              </a>
            </td>
            <td data-title="Name">
              <a className="cart-productname" href="shop-details.html">
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
              <div className="quantity">
                <button className="quantity-minus qut-btn">
                  <i className="far fa-minus" />
                </button>
                <input
                  type="number"
                  className="qty-input"
                  defaultValue={1}
                  min={1}
                  max={99}
                />
                <button className="quantity-plus qut-btn">
                  <i className="far fa-plus" />
                </button>
              </div>
            </td>
            <td data-title="Total">
              <span className="amount">
                <bdi>
                  <span>$</span>18
                </bdi>
              </span>
            </td>
            <td data-title="Remove">
              <a href="shop-details.html" className="remove">
                <i className="fal fa-trash-alt" />
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="actions">
              <div className="vs-cart-coupon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code..."
                />
                <button type="submit" className="vs-btn rounded-1 shadow-none">
                  Apply Coupon
                </button>
              </div>
              <button
                type="submit"
                className="vs-btn style2 rounded-1 shadow-none"
              >
                Update cart
              </button>
              <a
                href="shop-details.html"
                className="vs-btn rounded-1 shadow-none"
              >
                Continue Shopping
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    <div className="row justify-content-end">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <h2 className="h4 summary-title">Cart Totals</h2>
        <table className="cart_totals">
          <tbody>
            <tr>
              <td>Cart Subtotal</td>
              <td data-title="Cart Subtotal">
                <span className="amount">
                  <bdi>
                    <span>$</span>47
                  </bdi>
                </span>
              </td>
            </tr>
            <tr className="shipping">
              <th>Shipping and Handling</th>
              <td data-title="Shipping and Handling">
                <ul className="woocommerce-shipping-methods list-unstyled">
                  <li>
                    <input
                      type="radio"
                      id="free_shipping"
                      name="shipping_method"
                      className="shipping_method"
                    />
                    <label htmlFor="free_shipping">Free shipping</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="flat_rate"
                      name="shipping_method"
                      className="shipping_method"
                      defaultChecked="checked"
                    />
                    <label htmlFor="flat_rate">Flat rate</label>
                  </li>
                </ul>
                <p className="woocommerce-shipping-destination">
                  Shipping options will be updated during checkout.
                </p>
                <form action="#" method="post">
                  <a
                    href="shop-details.html"
                    className="shipping-calculator-button"
                  >
                    Change address
                  </a>
                  <div className="shipping-calculator-form">
                    <p className="form-row">
                      <select className="form-select">
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="BD" selected="selected">
                          Bangladesh
                        </option>
                      </select>
                    </p>
                    <p>
                      <select className="form-select">
                        <option value="">Select an option…</option>
                        <option value="BD-05">Bagerhat</option>
                        <option value="BD-01">Bandarban</option>
                        <option value="BD-02">Barguna</option>
                        <option value="BD-06">Barishal</option>
                      </select>
                    </p>
                    <p className="form-row">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Town / City"
                      />
                    </p>
                    <p className="form-row">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode / ZIP"
                      />
                    </p>
                    <p>
                      <button className="vs-btn shadow-none rounded-1">
                        Update
                      </button>
                    </p>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="order-total">
              <td>Order Total</td>
              <td data-title="Total">
                <strong>
                  <span className="amount">
                    <bdi>
                      <span>$</span>47
                    </bdi>
                  </span>
                </strong>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="wc-proceed-to-checkout mb-30">
          <a href="shop-details.html" className="vs-btn rounded-1 shadow-none">
            Proceed to checkout
          </a>
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
