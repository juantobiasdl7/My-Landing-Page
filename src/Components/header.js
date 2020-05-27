import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
//import './header.module.scss';
import headerStyles from './header.module.scss';
import logo from '../../static/logo.jpeg'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)

    return (
        <div className={headerStyles.container}>
        <header className={headerStyles.header}>
            <nav className={headerStyles.menu}>

                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
                    <img src={logo} width="100" height="80" alt="My Pic" className={headerStyles.image}/>
                </Link>

                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">The Podcast</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Header;