import React from 'react';
import {  AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';

const SearchItem = ({ value, products, onSearch}) => {

    return (
        <>
        <section className='searchItems'>
          <div className='product_items'>
            {products.filter((ite) => {
                const searchkey = value.toLowerCase()
                const title = ite.title.toLowerCase()

                return searchkey && title.startsWith(searchkey) && title !== searchkey
            })
              .slice(0, 3)
              .map((item) =>(
                <div className="box" key={item.id}>
                  <div className="img">
                      <img src={item.cover} alt="" />
                      <div className="overlay">
                          <button className="button">
                              <FiShoppingBag />
                          </button>
                          <button className="button">
                              <AiOutlineHeart />
                          </button>
                          <button className="button">
                              {/* <FiSearch onClick={() => onOpenImage(item.cover)} /> */}
                              <FiSearch  />
                          </button>
                      </div>
                  </div>
                  <div className="details">
                      <h3>{item.title}</h3>
                      <p>{item.author}</p>
                      <h4>Price : ${item.price}</h4>
                  </div>
                </div>
              ))
            }  
            </div>
          </section>
        </>
    );
};

export default SearchItem;