import { FC } from 'react';
import { Link } from 'umi';

const BasicLayout: FC = ({ children }) => {
  return (
    <div>
      <div>Layout</div>
      <header>
        <Link to="/">index</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/setting">setting</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/blog">blog</Link>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default BasicLayout;
