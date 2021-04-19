import { ConfigProvider } from 'antd';
import React, { FC } from 'react';

const ConfigLayout: FC = ({ children }) => {
  return <ConfigProvider prefixCls="root">{children}</ConfigProvider>;
};
export default ConfigLayout;
