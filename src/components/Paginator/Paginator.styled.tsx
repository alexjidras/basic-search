import styled from '@emotion/styled';

export const PageButton = styled.button`
    padding: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    &:not(:last-of-type) {
        margin-right: 2rem;
    }
`;

export const PaginatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

export const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 500;
`;

export const Select = styled.select`
    font-size: 1.4rem;
    margin-left: 1rem;
    &:focus {
        outline: none;
    }
`;