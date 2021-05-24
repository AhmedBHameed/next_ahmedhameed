import {format} from 'date-fns';
import {useRouter} from 'next/router';
import React from 'react';
import {Post} from '../../graphql/queries';
import Image from '../Image/Image';

interface BlogCardProps {
  post?: Post;
  dir?: 'rtl' | 'ltr';
}

const BlogCard: React.FC<BlogCardProps> = ({post, dir}) => {
  const isArabicPage = dir === 'rtl';
  const {locale, pathname} = useRouter();

  const postUrl = `/${locale}${pathname}/${encodeURIComponent(
    isArabicPage ? post.arTitle : post.enTitle
  )}`;
  const postDate = format(new Date(post.createdAt), 'MMMM dd, yyyy');

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-300">
      <div className="flex-shrink-0 overflow-hidden">
        <a href={postUrl}>
          <Image
            alt="article banner"
            className="h-48 w-full object-cover transform duration-300 transition-transform hover:scale-110 hover:rotate-3"
            fit
            src={post.banner}
          />
        </a>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex space-x-1 text-sm text-gray-500">
            <i>
              <time dateTime={postDate}>{postDate}</time>
              {' -- '}
              <span>
                {isArabicPage ? post.arReadingTime : post.enReadingTime}
              </span>
            </i>
            <span aria-hidden="true">&middot;</span>
          </div>

          <a className="block mt-2" href={postUrl}>
            <h6 className="text-xl font-semibold text-primary">
              {isArabicPage ? post.arTitle : post.enTitle}
            </h6>

            <p className="mt-3 text-base text-gray-500">
              {`${(isArabicPage ? post.arBody : post.enBody).substr(
                0,
                50
              )} ...`}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <p className="text-sm font-medium text-subject">
            {post.postCategoryTags.map((category) => (
                <span className="inline-flex items-center px-3 mr-1 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  {category.name}
                </span>
              ))}
            {/* <a
              href="#"
              className="hover:underline inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"
            > */}
            {/* </a> */}
          </p>
          {/* <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only text-subject">{getFullName(post.author.name)}</span>
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
                {getFullName(post.author.name)}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-10">
                {format(new Date(post.createdAt), 'MMMM dd, yyyy', {locale: isArabicPage ? ar : enUS})}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{isArabicPage ? post.arReadingTime : post.enReadingTime}</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;