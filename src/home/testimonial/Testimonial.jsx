import React from 'react';
import Heading from '../../components/common/Heading'
import { customer } from '../../assets/data/data';

import { ImQuotesRight } from 'react-icons/im'

const Testimonial = () => {
    return (
        <>
            <section className='customer'>
                <Heading title='Top Selling Products' desc='Meet our newbies! The latest templates uploaded to the marketing' />

                <div className="content">
                    {customer.map((item, id) => (
                        <div className="card" key={id}>
                            <button>
                                <ImQuotesRight />
                            </button>
                            <p>"{item.desc}"</p>
                            <h3>{item.name}</h3>
                            <span>{item.post}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Testimonial;