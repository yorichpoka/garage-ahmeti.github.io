import { ENVIRONMENT_VARIABLES, EMPTY } from 'constant';
import { useEffect } from 'react';

const useSetTitleDocument = (title = EMPTY, appendToTitle = true) => {

  // Triggered when value's changing.
  useEffect(
    () => {
      // Update content of document title.
      document.title =  appendToTitle
                          ? `${ENVIRONMENT_VARIABLES.appName}${title ? (' - ' + title) : EMPTY}`
                          : title;
    },
    [
      title,
      appendToTitle
    ]
  );

};

export default useSetTitleDocument;
