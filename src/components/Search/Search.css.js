import styled from "styled-components";

export const Input = styled.input`
    background: ${(props) => props.theme.tertiary};
    color: inherit;
    width: 450px;
    height: 63px;
    padding: 0;
    padding-left: 60px;
    margin-right: 27px;
    border: 2px solid ${(props) => props.theme.secondary};
    border-radius: 20px;
    font-size: 1.1rem;
    
    &::placeholder {
      color: inherit;
      font-size: 1.1rem;
    }
    &:focus {
      outline: none;
      border: 2px solid #737373;
      border-radius: 20px;
    }
`;