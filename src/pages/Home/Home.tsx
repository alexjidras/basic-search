import React, { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useDebounce, useMount } from 'react-use';

import { Api } from 'libs';
import { Paginator } from 'components';
import { useFilters } from 'hooks';
import {
  Container,
  SearchInput,
  ResultsContainer,
  List,
  Item,
  Spinner,
  Error,
  Info
} from './Home.styled';

export const Home: React.FC = () => {
  const defaultFilters = { page: 1, limit: 10, search: '' };
  const [filters, setFilters] = useFilters(defaultFilters);
  const [search, setSearch] = useState(filters.search);

  const names = useQuery<string[], Error|null>(['names', filters], () => Api.getNames(filters));

  const [, cancel] = useDebounce(
    () => setFilters({ search, page: 1 }),
    200,
    [search]
  );
  useMount(cancel);

  const hasData = useMemo(() => !names.isFetched || !!names.data?.length, [names]);

  return (
    <Container>
      <SearchInput
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ResultsContainer>
        {names.isLoading && <Spinner/>}
        {names.isError && <Error>{names.error?.message ?? 'Unknown error'}</Error>}
        {hasData ? (
          <List>
            {names.data?.map((name) => <Item key={name}>{name}</Item>)}
          </List>
        ) : (
          <Info>Nothing found</Info>
        )}
      </ResultsContainer>
      <Paginator
        data={names}
        filters={filters}
        setFilters={setFilters}
      />
    </Container>
  );
}
