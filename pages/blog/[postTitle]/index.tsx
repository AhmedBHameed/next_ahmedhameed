import {NextPage} from 'next';
import AsideBar from '../../../components/AsideBar/AsideBar';
import BlogNavigation from '../../../components/AsideBar/BlogNavigation/BlogNavigation';
import {useDetectLanguage} from '../../../components/shared/hooks/useDetectLanguageHook';
import renderToString from 'next-mdx-remote/render-to-string';
import MDPreview, {Source, components} from '../../../components/MDPreview/MDPreview';

const Blog: NextPage<{source: Source}> = ({source}) => {
  const {dir} = useDetectLanguage();
  // const router = useRouter();
  // console.log('🚀 ~ file: index.tsx ~ line 7 ~ router', router.query);

  return (
    <AsideBar asideNavigationComponent={<BlogNavigation />} dir={dir}>
      <div className="relative py-10 bg-primary overflow-hidden font-kufiRegular">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              {/* <span className="block text-base text-center text-subject font-semibold tracking-wide uppercase">
                Introducing
              </span> */}
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-subject sm:text-4xl">
                تعلم الجافاسكربت من الصفر
              </span>
            </h1>
            {/* <p className="mt-8 text-xl text-gray-500 leading-8">خلينا نجرب الفونت الجديد ونشوق شلون يطلع شكلة</p> */}
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-primary mx-auto">
            <MDPreview markdown={source} />
          </div>
        </div>
      </div>
    </AsideBar>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       '/blog/unknown',
//       // Object variant:
//       {params: {postTitle: 'unknown'}},
//     ],
//     fallback: true,
//   };
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const apolloClient = initializeApollo();

//   const data = await apolloClient.query({
//     query: PROFILE_QUERY,
//   });
//   console.log('🚀 ~ file: BlogNavbar.tsx ~ line 68 ~ constgetStaticProps:GetStaticProps= ~ data', data);

//   // const {data} = useProfileQuery({ssr: true});

//   return addApolloState(apolloClient, {
//     props: {profile: 123},
//     revalidate: 1,
//   });
// };

export async function getServerSideProps() {
  // MDX text - can be from a local file, database, anywhere
  let source = `
  # شلونة الحجي
  A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  \`\`\`jsx
  function test() {
    console.log('This is jsx sample');
  }
  \`\`\`
  
  \`\`\`css
  .test {
    color: red;
  }
  \`\`\`
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |

  <Audio src="http://localhost:5000/media/shlon_alhaji.mp3" />

  ![image](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3)
  `;

  let mdxSource;

  setTimeout(() => {
    source += `
    
      <Audio src="http://localhost:5000/media/shlon_alhaji.mp3" />
    `;
  }, 5000);

  try {
    mdxSource = await renderToString(source, {components});
  } catch (error) {
    mdxSource = await renderToString('Markdown syntex error!', {components});
  }
  return {props: {source: mdxSource}};
}

export default Blog;
