import React from 'react';
import Blog from './blog/Blog';
import Bnner from './bnner/Bnner';
import Card from './hero/Card';
import Hero from './hero/Hero';
import Price from './price/Price';
import Product from './product/Product';
import Testimonial from './testimonial/Testimonial';
import TopProduct from './topproduct/TopProduct';

const Home = () => {
    return (
        <>
            <Hero />
            <Card />
            <Product />
            <Bnner />
            <TopProduct />
            <Price />
            <Testimonial />
            <Blog />
        </>
    );
};

export default Home;