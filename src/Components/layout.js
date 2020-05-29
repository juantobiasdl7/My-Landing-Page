import React from 'react';

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss';
import Menu from './menu';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Menu/>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;