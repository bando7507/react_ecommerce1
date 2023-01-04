import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import SearchItem from './SearchItem';

import { products } from "../../assets/data/data"


const Hero = () => {
    const [value, setValue] = useState('')

    const onChanage = (e) =>{
        setValue(e.target.value)
    }

    const onSearch = (key) =>{
        setValue(key)
    }
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <h1>
                        <label>
                            Over <span>6,500</span> Curated Design
                        </label>
                        <br />
                        <label htmlFor="">
                            Ressources, <span>Graphics & Website</span> Templates
                        </label>
                    </h1>
                    <p>
                        High-quality Design Theme for personal or commercial use contains 6k+ items in 100 categories.
                    </p>
                    <div className="search">
                        <span>All Categories</span>
                        <hr />
                        <input type="text" placeholder='Search Products...' onChange={onChanage} value={value} />
                        <button onClick={() => onSearch(value)}>
                            <BiSearch className='heIcon' />
                        </button>
                    </div>
                <SearchItem products={products}  value={value} onSearch={onSearch} />
                    <p>Example : Mockup, PSD, Theme Design, Image</p>
                </div>
            </section>
        </>
    );
};

export default Hero;