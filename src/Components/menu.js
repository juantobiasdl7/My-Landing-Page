import React from 'react';
import menuStyles from './menu.module.scss'
import bars from '../../static/bars-solid.svg'
import logo from '../../static/logo.jpeg'
import { Link } from 'gatsby'

const Menu = () => {
    return (
        <div className={menuStyles.father}>
            <Link to="/">
                <img src={logo} width="100" height="80" alt="My Pic" className={menuStyles.image}/>
            </Link>
            <button className={menuStyles.container}><img src={bars}/></button>
        </div>
    )
}

export default Menu;