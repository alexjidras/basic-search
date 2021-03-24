import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
    min-height: 100vh;
`;

export const SearchInput = styled.input`
    width: 100%;
    font-size: 2rem;
    padding: 1rem 1.6rem;
    border: 1px solid black;
    margin: 2rem 0;
    &:focus {
        outline: none;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const ResultsContainer = styled.div`
    flex-grow: 1;
    padding-top: 1.6rem;
`;

export const Item = styled.li`
    font-size: 1.6rem;
    border: 1px solid lightblue;
    padding: 1.6rem;
    &:not(:last-of-type) {
        margin-bottom: 1.8rem;
    }
`;

export const Spinner = styled.div`
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    font-size: 1rem;
    position: relative;
    text-indent: -9999em;
    border-top: .8rem solid rgba(65, 105, 225, 0.2);
    border-right: .8rem solid rgba(65, 105, 225, 0.2);
    border-bottom: .8rem solid rgba(65, 105, 225, 0.2);
    border-left: .8rem solid royalblue;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: spin 1.1s infinite linear;
    animation: spin 1.1s infinite linear;

    &:after {
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
    }
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export const Error = styled.div`
    color: red;
    font-size: 1.8rem;
    background: rgb(255, 0, 0, 0.4);
`;

export const Info = styled.h1`
    margin: 0;
    font-weight: 500;
`;
