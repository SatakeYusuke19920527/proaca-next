import type { NextPage } from 'next';
import Layout from '../components/layout';
import Dashboard from '../components/dashboard';

const Home: NextPage = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;
