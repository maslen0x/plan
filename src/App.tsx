import { ConfigProvider } from 'antd';
import { PlanProvider } from '@/context/plan';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

const App = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#d56f21', fontFamily: 'Gilroy' } }}>
    <PlanProvider>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </PlanProvider>
  </ConfigProvider>
);

export default App;
