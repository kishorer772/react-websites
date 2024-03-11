import { Select } from 'antd';
export const roles = [
  {
    label: 'Admin',
    value: 'Admin',
  },
  {
    label: 'Operator',
    value: 'Operator',
  },
  {
    label: 'Monitor',
    value: 'Monitor',
  },
];
export const data = [
  {
    sno: 1234,
    mail: 'user1@gmail.com',
    lastname: 'mmm',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1231,
    mail: 'janedoe@gmail.com',
    lastname: 'doe',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1232,
    mail: 'peterjohn@gmail.com',
    lastname: 'peter',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1233,
    mail: 'chrisevans@gmail.com',
    lastname: 'chris',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1235,
    mail: 'chrishemsworth@gmail.com',
    lastname: 'chris',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1232,
    mail: 'peterjohn@gmail.com',
    lastname: 'peter',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1233,
    mail: 'chrisevans@gmail.com',
    lastname: 'chris',
    role: 'admin',
    group: 'dev',
  },
  {
    sno: 1235,
    mail: 'chrishemsworth@gmail.com',
    lastname: 'chris',
    role: 'admin',
    group: 'dev',
  },
];

export const tableColumns = [
  {
    key: 'sno',
    dataIndex: 'sno',
  },
  {
    key: 'mail',
    dataIndex: 'mail',
  },
  {
    key: 'lastname',
    dataIndex: 'lastname',
  },
  {
    key: 'role',
    dataIndex: 'role',
    render: (text, record) => (
      <Select value={roles[0]} style={{ width: 120 }} options={roles}></Select>
    ),
  },
  {
    key: 'group',
    dataIndex: 'group',
  },
];
