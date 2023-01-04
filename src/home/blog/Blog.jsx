import React from 'react';
import Heading from '../../components/common/Heading'
import { blog } from '../../assets/data/data';

const Blog = () => {
    return (
        <>
            <section className='blog'>
            <Heading title='Top Selling Products' desc='Meet our newbies! The latest templates uploaded to the marketing' />

            <div className="posts">
                {blog.slice(0, 3).map((item, id) => (
                    <div className="post" key={id}>
                        <div className="content">
                            <div className="img">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                        <div className="text">
                            <button className='button'>{item.category}</button>
                            <p>
                                Post Date : <span>{item.date}</span>
                            </p>
                            <h3>{item.title.slice(0, 35)}...</h3>
                        </div>
                    </div>
                ))}
            </div>
            </section>
        </>
    );
};

export default Blog;