import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Styles from './index.less';
import Avatar from 'antd/lib/avatar/avatar';

const { Sider, Content } = Layout;

const BasicLayout: FC = ({ children }) => {
  return (
    <Layout className={Styles.layout}>
      <Sider
        width={64}
        collapsible
        collapsed={false}
        trigger={<Avatar size={48} icon={<UserOutlined />} />}
      >
        <div
          style={{
            height: 64,
            color: '#fff',
            textAlign: 'center',
            lineHeight: '64px',
          }}
        >
          Logo
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item
            key="1"
            title="博客"
            icon={<PieChartOutlined />}
          ></Menu.Item>
          <Menu.Item key="2" title="小程序" icon={<DesktopOutlined />} />
          <Menu.Item key="3" title="图表" icon={<ContainerOutlined />} />
        </Menu>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
};
export default BasicLayout;
