import React, { useState } from 'react';
import Layout, { Content } from 'antd/es/layout/layout';
import {
  Breadcrumb,
  Button,
  Divider,
  Dropdown,
  Input,
  Menu,
  Pagination,
  Select,
  Space,
  Table,
  message,
} from 'antd';
import './assets/css/style.css';
import logo from './logo.svg';
import {
  HomeOutlined,
  LogoutOutlined,
  MailOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { getItem } from './utils/helper';
import Sider from 'antd/es/layout/Sider';
import { data, roles } from './assets/data/table-data';

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
  const tableColumns = [
    {
      key: 'sno',
      title: 'SI no',
      dataIndex: 'sno',
    },
    {
      key: 'mail',
      title: (
        <span>
          <MailOutlined /> Email
        </span>
      ),
      dataIndex: 'mail',
    },
    {
      key: 'lastname',
      title: (
        <span>
          <UserOutlined /> Last Name
        </span>
      ),
      dataIndex: 'lastname',
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      render: (text, record) => (
        <Select
          value={roles[0]}
          style={{ width: 120 }}
          options={roles}
        ></Select>
      ),
    },
    {
      key: 'group',
      title: 'Group',
      dataIndex: 'group',
      render: (text, record) => (
        <Select
          value={roles[0]}
          style={{ width: 120 }}
          options={roles}
        ></Select>
      ),
    },
  ];
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const itemsProps = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const [title, setTitle] = useState('kishore');
  return (
    <>
      <Layout>
        <Sider
          width={200}
          style={{
            height: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
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

          <div style={{ position: 'relative', left: 0, bottom: -40 }}>
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
        <Layout style={{ height: '100vh' }}>
          <Content style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Breadcrumb
                className="a__breadcrumb"
                items={[
                  { title: 'Home' },
                  { title: 'Community' },
                  { title: 'Add Users' },
                ]}
                separator=">"
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingInline: '1rem',
                }}
              >
                <Dropdown menu={itemsProps}>
                  <Button>
                    <Space>
                      Button
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
            <Divider
              style={{ marginBottom: '1rem !important', marginTop: 0 }}
            ></Divider>
            <div className="a__toast">
              <span className="a__toast__info">
                Invite Members to your Community
              </span>
              <span className="a__toast__info">Requirements</span>
              <ol className="a__toast">
                <li>Email ,username, firstname and lastname are required</li>
                <li>
                  For Organisation and Reseller, the organisation name is
                  required. If the user is a Guet, both start and end dates are
                  necessary.
                </li>
                <li>
                  You can download template to understand and create the right
                  structure
                </li>
              </ol>
              <span className="a__toast__info">
                Create multiple users by uploading a CSV
              </span>
            </div>

            <div
              style={{
                paddingBlock: '0.5rem',
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '98%',
                borderRadius: '1rem',
                boxShadow: '0 0 10px #bbb',
                margin: '0 auto',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  paddingInline: '1rem',
                  paddingBlock: '0.25rem',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                {title ? (
                  <div>
                    <span className="a__user__table">{title} </span>
                    <Button
                      style={{
                        borderRadius: '1rem',
                        color: 'white',
                      }}
                      type="primary"
                    >
                      {title}
                    </Button>
                  </div>
                ) : null}
                <div
                  style={{
                    display: 'flex',
                    marginRight: '18px',
                    justifyContent: 'end',
                  }}
                >
                  <Button icon={<UserAddOutlined />} primary type="default">
                    Add
                  </Button>
                  <Button type="primary" disabled={true}>
                    submit
                  </Button>
                </div>
              </div>
              <Table
                columns={tableColumns}
                dataSource={data}
                pagination={false}
                style={{ width: '100%', height: '100px', overflowY: 'scroll' }}
                className="custom-table"
              ></Table>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '1rem',
              }}
            >
              <Pagination
                defaultCurrent={1}
                total={50}
                style={{ textAlign: 'center' }}
              ></Pagination>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
