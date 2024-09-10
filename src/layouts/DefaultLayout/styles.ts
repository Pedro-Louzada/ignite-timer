import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 70rem;
    //quando eu quiser que a div ocupe toda minha altura
    height: calc(100vh);

    margin: 5rem auto;

    display: flex;
    flex-direction: column;

    background: ${props => props.theme['gray-800']};
    border-radius: 8px;

    padding: 2.5rem;
`