import React from 'react';
import { price } from '../../assets/data/data';
import Heading from '../../components/common/Heading';

const Price = () => {
    return (
        <>
            <section className='price'>
                <Heading title='Choose The Plans' desc='Meet our newbies! The latest templates uploaded to the markeplace' />

                <div className="content">
                    {price.map((item, id) => (
                        <div className="box" key={item.id}>
                            <h3>{item.name}</h3>
                            <h1>
                                <span>$</span>
                                {item.price}
                                <label htmlFor="">/user per month</label>
                            </h1>
                            <p>{item.desc}</p>
                            <button className="button">GET STARTED</button>

                            <ul>
                                {item.list.map((list, id) => (
                                    <li key={id}>
                                        <i>{list.icon}</i>
                                        <span>{list.para}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Price;