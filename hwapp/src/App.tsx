import React, { useState } from 'react';
import { Button, Layout, Grid, Col } from 'antd';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ContentPage } from './components/ContentPage/ContentPage';

import './App.css';
import { Content } from 'antd/lib/layout/layout';
const { Header, Sider } = Layout;


function App() {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}

      <Layout hasSider className='mainlayout'>
        <Sider collapsible collapsed={collapse} onCollapse={()=> setCollapse(!collapse)} width='300px' className='sider'>
          <Sidebar title='Admin'></Sidebar>
        </Sider>
        <Content>
          <ContentPage></ContentPage>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
