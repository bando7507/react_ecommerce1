import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdStarRate } from 'react-icons/md';
import { ADD, DELETE, DELETE__ITEM } from '../../controller/action'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Details = () => {


    const params = useParams()
    const getData = useSelector((state) => state.cartReducer.carts)

    const [data, setData] = useState([])

    const compare = () =>{
        let compareData = getData.filter((e) => e.id === params.id)
        setData(compareData)
    }


    useEffect(() =>{
        compare()
    }, [params.id])


    const dispatch = useDispatch()

    const incre = (e) =>{
        dispatch(ADD(e))
    } 

    const decre = (e) =>{
        dispatch(DELETE__ITEM(e))
    } 

    const history = useNavigate()

    const redirect = (id) =>{
        dispatch(DELETE(id))
        history('/');
    } 
    

    return (
        <>
            <div className="details">
                <h2 className="details_title">
                    Product Details pages
                </h2>
                {data.map((item) =>(
                    <div className="details__content">

                        <div className="details__content_img">
                            <img src={item.cover} alt="" />
                        </div>

                        <div className="details__content_detail">
                            <h1>{item.title}</h1>
                            <div className="rating">
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <MdStarRate />
                                <label htmlFor="">(1 custumer review)</label>
                            </div>


                            <h3>$<span>{item.price * item.qty}</span></h3>
                            <p>{item.author}</p>

                            <div className="qty">
                                <div className="count">
                                    <button onClick={() => incre(item)}>
                                        <AiOutlinePlus />
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={ item.qty < 1 ? () => redirect(item.id)  : () => decre(item)}>
                                        <AiOutlineMinus />
                                    </button>
                                </div>
                                <button className='button'>Add To Cart</button>
                            </div>
                            
                            <div className="desc">
                                <h4>PRODUCT DESCRITION</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sed eveniet unde. Harum quis nostrum accusantium molestias? Qui tenetur quos excepturi vero illo? Modi reiciendis labore fugit tenetur deserunt minus.</p>

                                <h4>PRODUCT DESCRITION</h4>
                                <ul>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti doloremque neque mo</p>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti doloremque neque mo</p>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti doloremque neque mo</p>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti doloremque neque mo</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Details;