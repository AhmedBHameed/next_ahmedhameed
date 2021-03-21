import {NextPage} from 'next';
import renderToString from 'next-mdx-remote/render-to-string';

import AsideBar from '../../../components/AsideBar/AsideBar';
import BlogNavigation from '../../../components/AsideBar/BlogNavigation/BlogNavigation';
import FIND_POST_BY_TITLE_QUERY from '../../../components/Blog/graphql/findPostByTitle.graphql';
import MDPreview, {components, Source} from '../../../components/MDPreview/MDPreview';
import MetaTags from '../../../components/MetaTags/MetaTags';
import {useDetectLanguage} from '../../../components/shared/hooks/useDetectLanguageHook';
import {FindPostByTitleQuery, QueryFindPostByTitleArgs} from '../../../graphql/queries';
import {getStandaloneApolloClient} from '../../../util/apolloClient';

const Blog: NextPage<{source: Source; title: string}> = ({source, title}) => {
  const {dir} = useDetectLanguage();

  return (
    <AsideBar asideNavigationComponent={<BlogNavigation />} dir={dir}>
      <article itemScope itemType="article" className="relative py-10 bg-primary overflow-hidden font-kufiRegular">
        <MetaTags
          title="Testing social media cards"
          description="This description must be revealed in social media platforms"
          imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
          articleUrl="https://www.ahmedhameed.dev/"
          articleBy="Ahmed HAMEED"
          articleId="123456789a"
        />

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              {/* <span className="block text-base text-center text-subject font-semibold tracking-wide uppercase">
                Introducing
              </span> */}
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-subject sm:text-4xl">
                {title}
              </span>
            </h1>
            {/* <p className="mt-8 text-xl text-gray-500 leading-8">خلينا نجرب الفونت الجديد ونشوق شلون يطلع شكلة</p> */}
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-primary mx-auto">
            <MDPreview markdown={source} />
          </div>
        </div>
      </article>
    </AsideBar>
  );
};

export async function getServerSideProps(props) {
  const isArabicPage = props.locale === 'ar';
  const apolloClient = await getStandaloneApolloClient();

  let mdxSource;

  try {
    const {data} = await apolloClient.query<FindPostByTitleQuery, QueryFindPostByTitleArgs>({
      query: FIND_POST_BY_TITLE_QUERY,
      fetchPolicy: 'network-only',
      variables: {
        title: props.query.postTitle,
      },
    });

    mdxSource = await renderToString(isArabicPage ? data.findPostByTitle.arBody : data.findPostByTitle.enBody, {
      components,
    });
    return {
      props: {source: mdxSource, title: isArabicPage ? data.findPostByTitle.arTitle : data.findPostByTitle.enTitle},
    };
  } catch (error) {
    console.log('🚀 ~ file: index.tsx ~ line 71 ~ getServerSideProps ~ error', error);
    mdxSource = await renderToString('Markdown syntex error!', {components});
  }

  return {
    props: {source: mdxSource, title: 'Oops! something went wrong'},
  };
}

export default Blog;
