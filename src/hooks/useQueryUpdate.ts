import { useCallback } from 'react';
import { default as queryString } from 'query-string';

import { history } from 'libs';
import { Properties } from 'types';

export const useQueryUpdate = (): Properties => {
    const { push, location } = history;
  
    const updateQuery = useCallback(
      (filters) =>
        push(
          `${location.pathname}?${queryString.stringify(filters, {
            skipEmptyString: true,
            skipNull: true,
            arrayFormat: 'comma',
          })}`,
        ),
      [push, location.pathname],
    );
  
    return {
      updateQuery,
    };
  };