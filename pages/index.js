import AboutUsMain from "@/components/AboutUsMain";
import CTAWrapper from "@/components/CTAWrapper";
import FeatureProducts from "@/components/FeatureProducts";

import HowItWorks from "@/components/HowItWorks";
import MenuWrapper from "@/components/MenuWrapper";

import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from "react";

const HeroComponent = dynamic(() => import('@/components/HeroBanner'), { ssr: true })

export default function Home() {
    const [products, setProducts] = useState(null);


    useEffect(() => {
        console.log('i fire once');
        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        const products = await fetchDataFromApi("/api/products?populate=*");
        setProducts(products)
    };
    return (
        <main className="">
            <HeroComponent />
            <AboutUsMain />
            <FeatureProducts products={products} />
            <HowItWorks />
            <CTAWrapper />
            <MenuWrapper />

        </main>
    );
}



