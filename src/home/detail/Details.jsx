import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Details = () => {


    const params = useParams()
    const getData = useSelector((state) => state.cartReducer.carts)

    const [data, setData] = useState([])

    const compare = () =>{
        let compareData = getData.filter((e) => e.id == params.id)
        console.log(compareData);
        setData(compareData)
    }

    useEffect(() =>{
        compare()
    }, [params.id])
    
    return (
        <>
            <div className="details">
                <h2 className="details_title">
                    Product Details pages
                </h2>

            </div>
        </>
    );
};

export default Details;