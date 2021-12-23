import React, { FunctionComponent } from 'react';
import { Card, PageHeader, Layout, Grid, Row, Col } from 'antd';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import './ContentPage.css';

const { Header, Content, Footer, Sider } = Layout;

export const ContentPage: FunctionComponent<{}> = (props) => {
  return (
    <Layout>
      <Header
        className='header'
        style={{ height: '100%', background: 'white' }}
      >
        <ContentHeader></ContentHeader>
      </Header>
      <Content
        className='content'
        style={{ background: 'none', padding: 0, margin: 12 }}
      >
        <PageHeader
          style={{margin: '20px'}}
          title='Notifications'
        />

        <Row gutter={[24,24]}>
          <Col xs={1} xl={12}>

              <Card bodyStyle={{height:'100px'}} hoverable title='Team Updates'></Card>

          </Col>
          <Col xs={1} xl={12}>
            <Card bodyStyle={{height:'100px'}} hoverable title='Pending Requests'></Card>
          </Col>
        </Row>

        {/* <Row>
            <Col span='16'>
              <div className='main-left'>
                <PanelMain />
              </div>
              <div className='main-left'>
                <PanelLint />
              </div>
              <div className='main-left'>
                <PanelAutoTest />
              </div>
            </Col>
            <Col span='8' className='cloumn'>
              <div className='main-right'>
                <PanelCommit />
              </div>
              <div className='main-right'>
                <PanelCodeReview />
              </div>
              <div className='main-right'>
                <PanelMember />
              </div>
            </Col>
          </Row> */}
      </Content>
    </Layout>
  );
};
