import React from 'react';
import AdminPageContainer from '../../../components/Dashboard/AdminPageContainer';
import CategoryContainer from '../../../components/Dashboard/Categories/CategoryContainer';
import Toolbar from '../../../components/Dashboard/Toolbar/Toolbar';

const Categories: React.FC = () => {
  return (
    <AdminPageContainer>
      <Toolbar />
      <div className="px-8">
        <CategoryContainer />
      </div>
    </AdminPageContainer>
  );
};

export default Categories;
