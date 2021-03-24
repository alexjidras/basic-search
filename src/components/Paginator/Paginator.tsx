import React, { FC, useMemo } from 'react';
import { Properties } from 'types';

import { PaginatorContainer, PageButton, Label, Select } from './Paginator.styled';

export interface PaginatorProps {
  data: Properties,
  filters: Properties,
  setFilters: Function
}

export const Paginator : FC<PaginatorProps> = ({ filters, setFilters, data }) => {
  const options = useMemo(() => [{
    value: 10,
    label: '10'
  }, {
    value: 25,
    label: '25'
  }, {
    value: 999,
    label: 'All'
  }], []);

  return (
    <PaginatorContainer>
      <span>
        <Label>Items:</Label>
        <Select
          value={filters.limit}
          onChange={(e) => {
            setFilters({ limit: e.target.value })
          }}
        >
          {options.map((option) => (
            <option value={option.value} key={option.label}>
              {option.label}
            </option>
          ))}
        </Select>
      </span>
      <Label>
        Page
        {' '}
        {filters.page}
      </Label>
      <span>
        <PageButton
          disabled={data.isLoading}
          onClick={() => {
            setFilters({ page: Math.max(+filters.page - 1, 1) })
          }}
        >
          Previous
        </PageButton>
        <PageButton
          disabled={data.isLoading}
          onClick={() => {
            setFilters({ page: +filters.page + 1 })
          }}
        >
          Next
        </PageButton>
      </span>
    </PaginatorContainer>
  )
};