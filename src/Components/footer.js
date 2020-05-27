import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyle from './footer.module.scss';


const Footer = () => {
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
        <footer className={footerStyle.container}>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2020</p>
        </footer>
    )
}

export default Footer;