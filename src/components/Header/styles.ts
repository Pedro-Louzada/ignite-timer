import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme['gray-100']};
            /*
            ⚠️ Como teremos uma borda inferior ao passar o mouse, já iremos criar
            uma trasparente pois desta forma quando passarmos o mouse o ícone 
            que está dentro do link não irá pular pra cima, se deixando ele
            em um cenário onde já existe uma borda, porém transparente.
            Contudo além da inferior eu adiciono a superior para conseguir deixar
            meu ícone no centro do link novamente.
            */
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            //o "&" representa o próprio elemento que estou utilizando
            &:hover {
                border-bottom: 3px solid ${props => props.theme['green-500']};
            }

            &.active{
                color: ${props => props.theme['green-500']};
            }
        }
    }
`