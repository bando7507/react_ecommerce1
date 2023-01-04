import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { navlist } from '../../assets/data/data'
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from  'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import { RiUser3Line } from 'react-icons/ri'
import { BsBagCheck } from 'react-icons/bs'

import { connect, useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const [mobile, setMobile] = useState(false)

    window.addEventListener('scroll', () =>{
        const header = document.querySelector('header')
        if(window.scrollY > 1){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })

    const getdata = useSelector((state) => state.cart)
    console.log(getdata.length);
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
                            <button className='button'>
                                <BsBagCheck className='shop heIcon' />
                                MY CART ({getdata.length})
                            </button>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    );
};

// const mapStateToProps = (state) => {
//     return {
//       amount: state.amount,
//     }
//   }
//   connect(mapStateToProps)(Header)

export default Header;