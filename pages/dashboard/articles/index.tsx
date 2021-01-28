import {NextPage} from 'next';
import React from 'react';
import AdminPageContainer from '../../../components/Dashboard/AdminPageContainer';
import ArticleContainer from '../../../components/Dashboard/Articles/ArticlesContainer';
import Toolbar from '../../../components/Dashboard/Toolbar/Toolbar';

const Articles: NextPage = () => {
  return (
    <AdminPageContainer>
      <Toolbar />
      <div className="px-8">
        <ArticleContainer />
      </div>
    </AdminPageContainer>
  );
};

export default Articles;
