import React, { FunctionComponent, useState } from 'react';
import { Menu } from 'antd';
import {
  AreaChartOutlined,
  LineChartOutlined,
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import './Sidebar.css';

const { SubMenu } = Menu;

interface SidebarProps {
  title: string;
}

export const Sidebar: FunctionComponent<SidebarProps> = ({ title }) => {
  return (
    <div>
      <div className='user-name'>{title}</div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>

        <SubMenu key='sub1' title='Report' icon={<FileTextOutlined />}>
          <Menu.Item key='2'>Province Calculation Type Report</Menu.Item>
          <Menu.Item key='3'>Province Pay Period Report</Menu.Item>
        </SubMenu>

        <SubMenu key='sub2' title='Chart' icon={<LineChartOutlined />}>
          <Menu.Item key='4'>Province Calculation Type Chart</Menu.Item>
          <Menu.Item key='5'>Province Pay Period Chart</Menu.Item>
        </SubMenu>

        <Menu.Item key='6' icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </div>
  );
};
