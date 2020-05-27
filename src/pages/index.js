import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Components/layout';
import Head from '../Components/head';

import indexStyles from './index.module.scss';

const IndexPage = () => {
  return (
      <Layout>
        <Head title="Home"/>
        <h1>Tobías CA</h1>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
  )
}

export default IndexPage;