import { useMemo, useCallback, useRef } from 'react';
import { Properties } from 'types';

import { useQueryParams } from './useQueryParams';
import { useQueryUpdate } from './useQueryUpdate';

export const useFilters = (defaultFilters?: Properties): [Properties, Function] => {
  const _defaultFilters = useRef(defaultFilters);
  const queryParams = useQueryParams();
  const { updateQuery } = useQueryUpdate();

  const filters = useMemo(() => ({ ..._defaultFilters.current, ...queryParams }), [queryParams]);

  const setFilters = useCallback(
    (action: object | Function) => {
      if (typeof action === 'function') {
        return updateQuery({ ...filters, ...action(filters) });
      }
      return updateQuery({ ...filters, ...action });
    },
    [filters, updateQuery],
  );

  return [filters, setFilters];
};
