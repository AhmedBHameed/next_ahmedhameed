import React from 'react';

import Showdown from 'showdown';
import {loadSuggestions} from './util/tagSuggestions';
import ReactMde, {SaveImageHandler} from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

interface GithubMdEditorProps {
  className?: string;
}

const GithubMdEditor: React.FC<GithubMdEditorProps> = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>('write');

  const save: SaveImageHandler = async function* (data: ArrayBuffer) {
    // Promise that waits for "time" milliseconds
    const wait = function (time: number) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield 'https://picsum.photos/300';
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  return (
    <ReactMde
      value={value}
      onChange={setValue}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
      loadSuggestions={loadSuggestions}
      childProps={{
        writeButton: {
          tabIndex: -1,
        },
      }}
      paste={{
        saveImage: save,
      }}
    />
  );
};

export default GithubMdEditor;
