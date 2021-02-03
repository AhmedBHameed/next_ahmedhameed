import {NextPage} from 'next';

import AdminNavigation from '../../../components/AsideBar/AdminNavigation/AdminNavigation';
import AsideBar from '../../../components/AsideBar/AsideBar';
import ArticleContainer from '../../../components/Dashboard/Articles/ArticlesContainer';
import Toolbar from '../../../components/Dashboard/Toolbar/Toolbar';

const Articles: NextPage = () => {
  return (
    <AsideBar asideNavigationComponent={<AdminNavigation />}>
      <Toolbar />
      <div className="px-8">
        <ArticleContainer />
      </div>
    </AsideBar>
  );
};

export default Articles;
