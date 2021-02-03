import {NextPage} from 'next';
import AdminNavigation from '../../components/AsideBar/AdminNavigation/AdminNavigation';
import AsideBar from '../../components/AsideBar/AsideBar';

const Dashboard: NextPage = () => {
  return (
    <AsideBar asideNavigationComponent={<AdminNavigation />}>
      This is articles page <span className="bg-white dark:bg-black">Test</span>
    </AsideBar>
  );
};

export default Dashboard;
