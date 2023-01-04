import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingBag, FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector  } from 'react-redux';
import { ADD } from '../../controller/action';
// import { addCart } from '../../controller2/reducer';

const ProductItem = ({ data }) => {
    const [openItem, setOpenItem] = useState(false)
    const [img, setImg] = useState('')

    const onOpenImage = (src) =>{
        setImg(src)
        setOpenItem(true)
    }
    //CONTROLLER 
    const dispatch = useDispatch()

    const addCart = (item)=>{
        dispatch(ADD(item))
    }

    //CONTROLLER 2
    // const getSata = useSelector((state) => state.cart)
    // console.log(getSata);
    // const dispatch = useDispatch()
    return (
        <>
            <div className="product__items">
                {data.map((item) =>(
                    <div className="box" key={item.id}>
                        <div className="img">
                            <img src={item.cover} alt="" />
                            <div className="overlay">
                                <button className="button">
                                    <FiShoppingBag onClick={() => addCart(item)} />
                                </button>
                                <button className="button">
                                    <AiOutlineHeart />
                                </button>
                                <button className="button">
                                    <FiSearch onClick={() => onOpenImage(item.cover)} />
                                </button>
                            </div>
                        </div>
                        <div className="details">
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <h4>Price : ${item.price}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className={openItem ? "modelOpen" : "modelClose"}>
                <div className="onClickImage">
                    <img src={img} alt="" />
                    <button className='button' onClick={() => setOpenItem(false)}>
                        <AiOutlineClose />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductItem;