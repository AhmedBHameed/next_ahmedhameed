import {NextPage} from 'next';
import AdminPageContainer from '../../components/Dashboard/AdminPageContainer';

const Dashboard: NextPage = () => {
  return (
    <AdminPageContainer>
      This is articles page <span className="bg-white dark:bg-black">Test</span>
    </AdminPageContainer>
  );
};

export default Dashboard;
