import React, { FunctionComponent, useState } from 'react';
import { Menu, Col, Row } from 'antd';
import { Route, Link } from 'react-router-dom';

// interface SidebarProps {
//   title:string;
// }

export const ContentHeader: FunctionComponent<{}> = (props) => {
  return (
    <>
      <Row
        style={{ height: '100%', background: 'white', textAlign: 'center' }}
        align='middle'
        gutter={[16, 16]}
      >
        <Col xs={24} xl={3}>
          {/* <Route> */}
            <Link to='/home' style={{ color:'darkgray', textDecoration: 'none' }}>Home</Link>
          {/* </Route> */}
        </Col>

        <Col xs={24} xl={3}>
          {/* <Route> */}
            <Link to='/home' style={{ color:'darkgray', textDecoration: 'none' }}>Home</Link>
          {/* </Route> */}
        </Col>
      </Row>
    </>
  );
};
