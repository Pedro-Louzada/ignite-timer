import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    border-radius: 4px;
    border: 0;

    margin: 8px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
`