import styled from "styled-components";

export const HomeContainer = styled.main`
    //para ocupar todo tamanho da div
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${props => props.theme['gray-100']};

    font-size: 1.125rem;
    font-weight: bold;
    //para quebrar em telas menores
    flex-wrap: wrap;
`

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;

    font-weight: bold;
    font-size: 1.125rem;

    border: none;
    border-bottom: 2px solid ${props => props.theme['gray-500']};

    color: ${props => props.theme['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }

    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
`

//Herdando uma estilização base
export const TaskInput = styled(BaseInput)`
    flex: 1;
`
//Herdando uma estilização base
export const MinutesAmountInput = styled(BaseInput)`
    width: 4.5rem;
`


export const CountdownContainer = styled.div`
    display: flex;
    gap:1rem;

    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;

    color: ${props => props.theme['gray-100']};

    span {
        background: ${props => props.theme['gray-700']};

        padding: 2rem 1rem;

        border-radius: 8px;
    }
`

export const Separator = styled.div`
    width: 4rem;

    padding: 2rem 0;

    color: ${props => props.theme['green-500']};

    display: flex;
    justify-content: center;
    
    overflow: hidden;
`

export const StartCountdownButton = styled.button`
    width: 100%;

    padding: 1rem;

    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
    }
`