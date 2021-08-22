// eslint-disable-next-line import/no-duplicates
import {format} from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import {arSA} from 'date-fns/locale';

import React from 'react';
import {clsx} from '../../util/clsx';

interface PostAuthorAndReadingTimeProps {
  post_created_at: Date;
  reading_time: number;
  isRtl?: boolean;
  author: {
    name: string;
    profile_image: string;
    url: string;
  };
}

const PostAuthorAndReadingTime: React.FC<PostAuthorAndReadingTimeProps> = ({
  post_created_at,
  reading_time,
  author,
  isRtl,
}) => (
  <div className="flex items-center" dir={isRtl ? 'rtl' : 'ltr'}>
    <a
      className={clsx([
        'my-5 w-12 h-12 rounded-full overflow-hidden',
        isRtl ? 'ml-5' : 'mr-5',
      ])}
      href={author.url}
    >
      <img alt="author" className="w-100" src={author.profile_image} />
    </a>
    <div className="font-medium text-lg leading-6 space-y-1">
      <a href={author.url}>
        <h3>{author.name}</h3>
      </a>
      <small className="text-gray-400">
        {isRtl
          ? `${format(new Date(post_created_at), 'dd MMMM yyyy', {
              locale: isRtl ? arSA : undefined,
            })} • ${reading_time} دقيقة للقراءة`
          : `${format(
              new Date(post_created_at),
              'MMM, dd, yyyy'
            )} • ${reading_time} min read`}
      </small>
    </div>
  </div>
);

export default PostAuthorAndReadingTime;
