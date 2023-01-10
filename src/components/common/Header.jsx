import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.svg'
import Cart from '../../assets/images/cart.png'
import { Link } from 'react-router-dom';
import { navlist } from '../../assets/data/data'
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from  'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import { RiUser3Line } from 'react-icons/ri'
import { BsBagCheck } from 'react-icons/bs'
import { DELETE } from '../../controller/action';

import { connect, useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const [mobile, setMobile] = useState(false)
    const [cartList, setCartList] = useState(false)

    const handleClose = () => {
        setCartList(null)
      }


    window.addEventListener('scroll', () =>{
        const header = document.querySelector('header')
        if(window.scrollY > 1){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })

    // CONTROLLER
    const getdata = useSelector((state) => state.cartReducer.carts)
    const dispatch = useDispatch()
    // console.log(getdata);

    // // CONTROLLER 2
    // const getdata = useSelector((state) => state.cart)
    // const dispatch = useDispatch()
    // // console.log(getdata);

    const [price, setPrice] = useState([])

    const total = (e, i) =>{
        let price = 0
        getdata.map((e) =>{
            price = parseFloat(e.price) * e.qty + e.price;
        })
        setPrice(price)
    }

    useEffect(()=> {
        total()
    }, [total])

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="toggle" onClick={() => setMobile(true)}>
                            <button>
                                <AiOutlineMenu />
                            </button>
                        </div>
                        <div className="left">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="center">
                            <ul className={!mobile ? 'menu' : 'mobile-nav'}>
                                {navlist.map((nav, id) => (
                                    <li key={id}>
                                        <Link to={nav.path}>
                                            {nav.text}
                                        </Link>
                                    </li>
                                ))}
                                <AiOutlineClose onClick={() => setMobile(false)} />
                            </ul>
                        </div>
                    </nav>
                    <div className="right">

                        <div className="right__search">
                            <input type="text" className='popo' placeholder='Search Produsts..' />
                            <BiSearch className='searchIcon heIcon' />
                        </div>

                        <div className="right_user">
                            <RiUser3Line className='searchIcon heIcon' />
                            <AiOutlineHeart className='searchIcon heIcon' />
                        </div>

                        <div className="right_card">
                            <button className='button' onClick={() => { setCartList(!cartList)}}>
                                <BsBagCheck className='shop heIcon' />
                                MY CART ({getdata.length})
                            </button>

                            <div className={cartList ? "showCart" : "hideCart"}>
                                <section className="detail">
                                    {/* {getdata.length ? (
                                        <div>d</div>
                                    ) : (
                                        <div>empty</div>
                                    )} */}
                                    
                                    {getdata.length> 0 && 
                                        <div className='flex'>
                                            <div className='details_title'>
                                                    <h3>Photo</h3>
                                                    <p>Product Name</p>
                                                </div>
                                                {getdata.map((e, id) => (
                                                    <div className="details__content"  key={id}>
                                                        <div className="details__content-img">
                                                            <Link to={`cart/${e.id}`}  onClick={() => handleClose()}>
                                                                <img src={e.cover} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="details__content_detail">
                                                            <p>{e.title.slice(0, 12)}...</p>
                                                            <p>Price: {e.price}</p>
                                                            <p>Quantity: {e.qty}</p>
                                                        </div>

                                                        <div className='details__content_detail_icon'>
                                                            <i>
                                                                <AiOutlineDelete onClick={() => dispatch(DELETE(e.id))}/>
                                                            </i>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div>
                                                    Price: {price}$
                                                </div>
                                        </div>
                                    }
                                </section>
                                    {getdata.length === 0 && 
                                        <div className='empty'>
                                            <p>Your cart is empty</p>
                                            <img src={Cart} alt="" />
                                        </div>
                                    }
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
      amount: state.amount,
    }
  }
  connect(mapStateToProps)(Header)

export default Header;