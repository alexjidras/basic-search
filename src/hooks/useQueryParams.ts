import { useMemo } from 'react';
import { default as queryString } from 'query-string';

import { history } from 'libs';
import { Properties } from 'types';

export const useQueryParams = (): Properties => {
  const { location: { search } } = history;
  return useMemo(() => queryString.parse(search, { arrayFormat: 'comma' }), [search]);
};


