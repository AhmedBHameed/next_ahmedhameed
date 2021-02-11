import Head from 'next/head';
import React from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
  articleId: string;
  articleBy: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({articleUrl, title, imageUrl, description, articleId, articleBy}) => {
  return (
    <Head>
      <title>{title}</title>

      {/* Essential META Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={articleUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content={title.replace(' ', '_')} />

      {/* Non-Essential, But Recommended */}

      <meta property="og:site_name" content="www.ahmedhameed.dev" />
      <meta name="twitter:image:alt" content={title} />

      {/* Non-Essential, But Required for Analytics */}

      <meta property="fb:app_id" content={articleId} />
      <meta name="twitter:site" content={articleBy} />
    </Head>
  );
};

export default MetaTags;
