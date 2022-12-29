import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Home from '../Home'

const Pages = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Pages;