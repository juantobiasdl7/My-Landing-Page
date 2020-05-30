import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Components/layout';
import Head from '../Components/head';

const portfolio = () => {
    return (
        <Layout>
            <Head title="Portfolio"/>
            <h1>Projects</h1>
            <h2>This is a list of my personal projects</h2>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default portfolio;