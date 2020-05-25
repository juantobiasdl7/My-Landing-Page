import React from 'react';
import { Link } from 'gatsby';
import Layout from '../Components/layout';

const AboutMe = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <h2>Hello everyone I'm Tobías</h2>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutMe;