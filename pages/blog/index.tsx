import {NextPage} from 'next';
import AsideBar from '../../components/AsideBar/AsideBar';
import BlogNavigation from '../../components/AsideBar/BlogNavigation/BlogNavigation';
import BlogCard from '../../components/Blog/BlogCard';
import POSTS_QUERY from '../../components/shared/graphql/posts.graphql';
import {useDetectLanguage} from '../../components/shared/hooks/useDetectLanguageHook';
import Typography from '../../components/Typography/Typography';
import {Post, PostsQuery} from '../../graphql/queries';
import {getStandaloneApolloClient} from '../../util/apolloClient';

interface BlogProps {
  posts?: Post[];
}

const Blog: NextPage<BlogProps> = ({posts}) => {
  const {dir} = useDetectLanguage();

  return (
    <AsideBar asideNavigationComponent={<BlogNavigation />} dir={dir}>
      <div className="p-12">
        <Typography>
          <h1 className="mb-0">Blog</h1>
          <h4 className="mb-0">All my posts</h4>
        </Typography>
        <div className="mt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-none">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} dir={dir} />
          ))}
        </div>
      </div>
    </AsideBar>
  );
};

export async function getServerSideProps() {
  const apolloClient = await getStandaloneApolloClient();

  const {data} = await apolloClient.query<PostsQuery>({query: POSTS_QUERY});

  return {
    props: {
      posts: data?.posts,
    },
  };
}

export default Blog;
