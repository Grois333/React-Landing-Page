import React from 'react';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container nav-container">

                {/* <Link className="brand-logo" to="/">Logo</Link> */}

                <ul className="">
                    <div className="left-nav">
                        <li><NavLink exact to="/"><img src={logo}/></NavLink></li>
                        <li><NavLink to='/trends'>trends</NavLink></li>
                        <li><NavLink to='/collections'>collections</NavLink></li>
                        <li><NavLink to='/tips-guides'>tips & guides</NavLink></li>
                    </div>
                    <div className='right-nav'>
                        <li><NavLink to='/find-store'>find a store</NavLink></li>
                        <li><NavLink to='/contact'>contact us</NavLink></li>
                        <li><NavLink to='/search'><i class="fa fa-search fa-flip-horizontal"></i></NavLink></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;