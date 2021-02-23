import {NextPage} from 'next';
import AsideBar from '../../components/AsideBar/AsideBar';
import BlogNavigation from '../../components/AsideBar/BlogNavigation/BlogNavigation';
import {useDetectLanguage} from '../../components/shared/hooks/useDetectLanguageHook';

const Blog: NextPage = () => {
  const {dir} = useDetectLanguage();

  return (
    <AsideBar asideNavigationComponent={<BlogNavigation />} dir={dir}>
      <div className="p-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0 overflow-hidden">
            <img
              className="h-48 w-full object-cover transform duration-300 transition-transform hover:scale-110 hover:rotate-3"
              src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=SZJAtUKbmT&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt=""
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-subject">
                <a
                  href="#"
                  className="hover:underline inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"
                >
                  Video
                </a>
              </p>
              <a href="#" className="block mt-2">
                <h6 className="text-xl font-semibold text-primary">
                  How to use search engine optimization to drive sales
                </h6>

                <p className="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat
                  doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo
                  laudantium.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <span className="sr-only text-subject">Brenna Goyette</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=SZJAtUKbmT&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:underline text-subject">
                    Ahmed HAMEED
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10">Mar 10, 2020</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AsideBar>
  );
};

export default Blog;
