import { useLocation } from 'umi';

const LoginPage = () => {
  const { state } = useLocation();
  console.log(state);
  return <div>LoginPage</div>;
};
export default LoginPage;
