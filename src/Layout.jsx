import React from 'react';
import Layout, { Content } from 'antd/es/layout/layout';
import { Breadcrumb, Button, Divider, Input, Menu } from 'antd';
import './assets/css/style.css';
import logo from './logo.svg';
import {
  HomeOutlined,
  LogoutOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { getItem } from './utils/helper';
import Sider from 'antd/es/layout/Sider';
const items = [
  getItem('Discover', 'sub1', <HomeOutlined />),
  getItem('LeaderBoard', 'sub2', <HomeOutlined />),
  getItem('My Content', 'sub3', <HomeOutlined />),
  getItem('Browse Channels', 'sub4', <HomeOutlined />),
  getItem('Website', 'sub5', <HomeOutlined />),
  getItem('Community', 'sub6', null, [
    getItem('Option 5', '5', <HomeOutlined />),
    getItem('Option 6', '6', <HomeOutlined />),
  ]),
  {
    type: 'divider',
  },
  getItem('Learning Path', 'sub7', null, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Learning Path', 'sub8', null, [
    getItem('Option 9', '13'),
    getItem('Option 10', '14'),
    getItem('Option 11', '15'),
    getItem('Option 12', '16'),
  ]),
];
const AppLayout = () => {
  return (
    <>
      <Layout>
        <Sider
          width={200}
          style={{ height: '100vh', backgroundColor: 'white' }}
        >
          <div>
            <img
              src={logo}
              //   className="App-logo"
              alt="logo"
              style={{ width: '100%', height: '10vh' }}
            />
          </div>
          <div>
            <Input
              placeholder="Search"
              style={{ marginInline: '0.4rem', width: '90%' }}
              prefix={<SearchOutlined style={{ color: '#1890ff' }} />}
            />
          </div>
          <Menu
            items={items}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          ></Menu>

          <div style={{ position: 'relative', left: 0, bottom: -25 }}>
            <div
              style={{
                display: 'flex',
                height: '10%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                className="a__imgContainer"
                style={{
                  width: '20%',
                  height: '10vh',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img src={logo} alt="logo" />
              </div>
              <div className="a__usernames">
                <p style={{ fontSize: '0.7rem' }}>username</p>
                <p style={{ fontSize: '0.7rem' }}>user@gmail.com</p>
              </div>
              <div className="a__btn">
                <Button icon={<LogoutOutlined />}></Button>
              </div>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: 'white' }}>
            <Breadcrumb
              className="a__breadcrumb"
              items={[
                { title: 'Home' },
                { title: 'Community' },
                { title: 'Add Users' },
              ]}
              separator=">"
            />
            <Divider
              style={{ marginBottom: '1rem !important', marginTop: 0 }}
            ></Divider>
            <ul className="a__toast">
              <li className="a__toast__header">
                Invite Members to your Community
              </li>
              <li>Requirements</li>
              <li>Email ,username, firstname and lastname are required</li>
            </ul>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
