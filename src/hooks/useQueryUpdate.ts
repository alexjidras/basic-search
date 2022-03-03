import { useCallback } from 'react';
import { default as queryString } from 'query-string';

import { history } from 'libs';
import { Properties } from 'types';

export const useQueryUpdate = (): Properties => {
    const { location } = history;
  
    const updateQuery = useCallback(
      (filters, replace = false) =>
        (replace ? history.replace : history.push)(
          `${location.pathname}?${queryString.stringify(filters, {
            skipEmptyString: true,
            skipNull: true,
            arrayFormat: 'comma',
          })}`,
        ),
      [location.pathname],
    );
  
    return {
      updateQuery,
    };
  };