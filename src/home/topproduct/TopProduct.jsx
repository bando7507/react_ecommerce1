import React, { useState } from 'react';
import { topProducts } from '../../assets/data/data';
import Heading from '../../components/common/Heading'
import ProductItem from '../product/ProductItem';

const TopProduct = () => {

    const [data, setData ] = useState(topProducts)
    const allCategory = ["all", ...new Set(data.map((el) => el.category))]
    const [category, setcategory ] = useState(allCategory)

    const handleFilter = (category) =>{
        const newCategory = topProducts.filter((el) => el.category === category)
        setData(newCategory)

        if( category === "all"){
            setData(topProducts)
        }
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="head">
                        <Heading title='Top Selling Products' desc='Meet our newbies! The latest templates uploaded to the marketing' />
                        <div className="category">
                            {category.map((item, id) =>(
                                <button key={id} className='button' onClick={() => handleFilter(item)}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <ProductItem data={data} />
                </div>
            </section>
        </>
    );
};

export default TopProduct;