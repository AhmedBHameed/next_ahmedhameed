import {ChatAltIcon, TagIcon, UserCircleIcon} from '@heroicons/react/solid';
import {Fragment, useCallback} from 'react';
import {clsx} from '../../util/clsx';

export interface HistoryTimelineModel {
  id: string;
  type: 'assignment' | 'comment' | 'tags';
  person: {name: string; href: string};
  assigned?: {name: string; href: string};
  tags?: {
    name: string;
    href: string;
    color: string;
  }[];
  fromTo?: string;
  imageUrl?: string;
  comment?: string;
  date: string;
  year: string;
}

interface TimelineProps {
  historyTimeline: HistoryTimelineModel[];
}

const Timeline: React.FC<TimelineProps> = ({historyTimeline}) => {
  const renderTimelineType = useCallback(
    (timelineInfo: HistoryTimelineModel) => {
      switch (timelineInfo.type) {
        case 'comment':
          return (
            <>
              <div className="relative">
                <img
                  alt=""
                  className="ring-subject h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-4 ring-white"
                  src={timelineInfo.imageUrl}
                />

                <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                  <ChatAltIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-100"
                  />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm">
                    <a
                      className="font-medium text-primary"
                      href={timelineInfo.person.href}
                    >
                      {timelineInfo.person.name}
                    </a>
                  </div>
                  <p className="mt-0.5 text-sm text-secondary">
                    Commented {timelineInfo.date}
                  </p>
                </div>
                <div className="mt-2 text-sm text-secondary">
                  <p>{timelineInfo.comment}</p>
                </div>
              </div>
            </>
          );
        case 'assignment':
          return (
            <>
              <div>
                <div className="relative px-1">
                  <div className="ring-subject h-8 w-8 bg-aside rounded-full ring-4 ring-white flex items-center justify-center">
                    <UserCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-secondary"
                    />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 py-1.5">
                <div className="text-sm text-secondary">
                  <a
                    className="font-medium text-primary"
                    href={timelineInfo.person.href}
                  >
                    {timelineInfo.person.name}
                  </a>{' '}
                  assigned{' '}
                  <a
                    className="font-medium text-primary"
                    href={timelineInfo.assigned.href}
                  >
                    {timelineInfo.assigned.name}
                  </a>{' '}
                  <span className="whitespace-nowrap">{timelineInfo.date}</span>
                </div>
              </div>
            </>
          );
        case 'tags':
          return (
            <>
              <div>
                <div className="relative px-1">
                  <div className="ring-subject h-8 w-8 bg-aside rounded-full ring-4 ring-white flex items-center justify-center">
                    <TagIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-secondary"
                    />
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1 py-0">
                <div className="text-sm leading-8 text-secondary">
                  <span className="mr-0.5">
                    <a
                      className="font-medium text-primary"
                      href={timelineInfo.person.href}
                    >
                      {timelineInfo.person.name}
                    </a>{' '}
                    added tags
                  </span>{' '}
                  <span className="mr-0.5">
                    {timelineInfo.tags.map((tag) => (
                      <Fragment key={tag.name}>
                        <a
                          className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                          href={tag.href}
                        >
                          <span className="absolute flex-shrink-0 flex items-center justify-center">
                            <span
                              aria-hidden="true"
                              className={clsx('h-1.5 w-1.5 rounded-full')}
                              style={{backgroundColor: tag.color}}
                            />
                          </span>
                          <span className="ml-3.5 font-medium text-primary">
                            {tag.name}
                          </span>
                        </a>{' '}
                      </Fragment>
                    ))}
                  </span>
                  <span className="whitespace-nowrap">{timelineInfo.date}</span>
                </div>
              </div>
            </>
          );
        default:
          return null;
      }
    },
    []
  );

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {historyTimeline.map((historyTimelineInfo, index) => (
          <li key={historyTimelineInfo.id}>
            <div className="relative pb-8">
              {index !== historyTimeline.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {renderTimelineType(historyTimelineInfo)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
