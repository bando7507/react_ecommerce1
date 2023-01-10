import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Home from '../Home'
import Details from '../detail/Details';

const Pages = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart/:id" element={<Details />}></Route>
                        
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Pages;