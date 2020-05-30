import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Components/layout';
import Head from '../Components/head';

const podcast = () => {
    return (
        <Layout>
            <Head title="Podcast"/>
            <h1>The podcasts episodes</h1>
            <h2>This is a list of my podcast episodes</h2>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default podcast;