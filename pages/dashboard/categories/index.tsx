import React from 'react';
import AdminNavigation from '../../../components/AsideBar/AdminNavigation/AdminNavigation';
import AsideBar from '../../../components/AsideBar/AsideBar';
import CategoryContainer from '../../../components/Dashboard/Categories/CategoryContainer';
import Toolbar from '../../../components/Dashboard/Toolbar/Toolbar';

const Categories: React.FC = () => {
  return (
    <AsideBar asideNavigationComponent={<AdminNavigation />}>
      <Toolbar />
      <div className="px-8">
        <CategoryContainer />
      </div>
    </AsideBar>
  );
};

export default Categories;
