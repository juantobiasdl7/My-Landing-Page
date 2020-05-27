import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Components/layout';
import Head from '../Components/head';

const AboutMe = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <h2>Hello everyone I'm Tobías</h2>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutMe;