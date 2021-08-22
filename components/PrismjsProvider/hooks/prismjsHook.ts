import Prismjs from 'prismjs';
import React, {useEffect} from 'react';

import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; /* add plugin css */

// Require all needed languages
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

// Require all needed plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
/* or your own custom theme */

const usePrismjs = <T extends HTMLElement>(
  target: React.RefObject<T>,
  plugins: string[] = [],
  isDarkTheme: boolean
) => {
  useEffect(() => {
    if (target.current) {
      if (plugins.length > 0) {
        target.current.classList.add(...plugins);
      }
      // Highlight all <pre><code>...</code></pre> blocks contained by this element

      Prismjs.highlightAllUnder(target.current);
    }
  }, [isDarkTheme, target, plugins]);
};

export default usePrismjs;
