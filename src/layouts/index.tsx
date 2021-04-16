import React, { FC, useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, BarChartOutlined, SettingOutlined, GlobalOutlined } from '@ant-design/icons';
import Styles from './index.less';
import IconFont, { IconTypeEnum } from '@/components/IconFont';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const { Sider, Content, Header } = Layout;
declare type mode = 'inline' | 'horizontal';

const BasicLayout: FC = ({ children }) => {
  const { pathname } = useLocation();
  const [menuMode, setMenuMode] = useState<mode>('horizontal');
  const selectKey = pathname.split('/')[1];
  const renderMenu = () => {
    return (
      <Menu selectedKeys={[selectKey]} mode={menuMode} theme="dark">
        <Menu.Item key="blog" title="博客管理" icon={<IconFont type={IconTypeEnum.博客} />}>
          <Link to="/blog">博客管理</Link>
        </Menu.Item>
        <Menu.Item key="progress" title="小程序管理" icon={<IconFont type={IconTypeEnum.小程序} />}>
          <Link to="/progress">小程序管理</Link>
        </Menu.Item>
        <Menu.Item key="datav" title="数据大屏" icon={<BarChartOutlined />}>
          <Link to="/datav">数据大屏</Link>
        </Menu.Item>
        <Menu.Item key="setting" title="系统管理" icon={<SettingOutlined />}>
          <Link to="/setting">系统管理</Link>
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout className={Styles.layout}>
      <div className={Styles.header}>
        <Header>
          <div
            style={{
              height: 48,
              color: '#3977b1',
              textAlign: 'center',
              lineHeight: '48px',
              fontSize: '24px',
              float: 'left',
              width: 208,
            }}
          >
            <GlobalOutlined />
          </div>
          <Menu selectedKeys={[selectKey]} mode={menuMode} theme="dark">
            <Menu.Item key="blog" title="博客管理" icon={<IconFont type={IconTypeEnum.博客} />}>
              <Link to="/blog">博客管理</Link>
            </Menu.Item>
            <Menu.Item key="progress" title="小程序管理" icon={<IconFont type={IconTypeEnum.小程序} />}>
              <Link to="/progress">小程序管理</Link>
            </Menu.Item>
            <Menu.Item key="datav" title="数据大屏" icon={<BarChartOutlined />}>
              <Link to="/datav">数据大屏</Link>
            </Menu.Item>
            <Menu.Item key="setting" title="系统管理" icon={<SettingOutlined />}>
              <Link to="/setting">系统管理</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
      <Content>{children}</Content>
    </Layout>
  );
};
export default BasicLayout;
