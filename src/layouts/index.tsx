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
  const [menuMode, setMenuMode] = useState<mode>('inline');
  const selectKey = pathname.split('/')[1];
  const renderMenu = () => {
    return (
      <Menu selectedKeys={[selectKey]} mode={menuMode} theme="dark">
        <Menu.Item key="blog" title="博客" icon={<IconFont type={IconTypeEnum.博客} />}>
          <Link to="/blog">博客</Link>
        </Menu.Item>
        <Menu.Item key="progress" title="小程序" icon={<IconFont type={IconTypeEnum.小程序} />}>
          <Link to="/progress">小程序</Link>
        </Menu.Item>
        <Menu.Item key="datav" title="图表" icon={<BarChartOutlined />}>
          <Link to="/datav">大屏</Link>
        </Menu.Item>
        <Menu.Item key="setting" title="设置" icon={<SettingOutlined />}>
          <Link to="/setting"> 设置</Link>
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout className={Styles.layout}>
      {menuMode === 'inline' ? (
        <Sider
          className={Styles.slider}
          width={64}
          collapsible
          collapsed={false}
          trigger={<Avatar size={48} icon={<UserOutlined />} />}
        >
          <div
            style={{
              height: 48,
              color: '#3977b1',
              textAlign: 'center',
              lineHeight: '48px',
              fontSize: '24px',
            }}
          >
            <GlobalOutlined />
          </div>
          {renderMenu()}
        </Sider>
      ) : (
        <Header style={{ height: 48 }}>{renderMenu()}</Header>
      )}

      <Content>
        <div>{children}</div>
      </Content>
    </Layout>
  );
};
export default BasicLayout;
