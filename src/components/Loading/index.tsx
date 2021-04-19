import { Spin } from 'antd';

interface ILoadingProps {
  isLoading: boolean;
}

const Loading = (props: ILoadingProps) => {
  return (
    <Spin
      size="large"
      spinning={props.isLoading}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}
    />
  );
};
export default Loading;
