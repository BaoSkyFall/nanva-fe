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
                {cartItems?.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Check Out
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
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
                            {/* CART ITEMS START */}
                            <div className="flex-[1] flex flex-col ">
                                <div className="">
                                    <div className="text-lg font-bold">
                                        Cart Items
                                    </div>
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} data={item} width={75} width={75} />
                                    ))}
                                </div>
                                {/* CART ITEMS END */}

                                {/* SUMMARY START */}
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

                                    {/* BUTTON START */}
                                    <button
                                        className="w-full py-4 rounded-full border bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                                        onClick={handlePayment}
                                    >
                                        Checkout
                                        {loading && <img src="/spinner.svg" />}
                                    </button>
                                    {/* BUTTON END */}
                                </div>
                            </div>

                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
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
                )}
            </Wrapper>
        </div>
    );
};

export default Cart;
