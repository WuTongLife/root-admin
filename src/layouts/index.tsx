import { FC } from 'react';
import { Link } from 'umi';
import './index.less';
import { Layout, Menu } from 'antd';
import { MailOutlined, SettingOutlined, GlobalOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const layoutPrefixcls = 'root-layout';

const BasicLayout: FC = ({ children }) => {
  return (
    <Layout className={layoutPrefixcls}>
      <Header>
        <div className={`${layoutPrefixcls}-title`}>
          <Link to="/">
            <GlobalOutlined style={{ marginRight: 12, fontSize: '24px' }} />
            <span>QianKun</span>
          </Link>
        </div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="1" icon={<MailOutlined />}>
            <Link to="/dataV">数据大屏</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MailOutlined />}>
            <Link to="/blog">Blog管理</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/setting">系统管理</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default BasicLayout;
