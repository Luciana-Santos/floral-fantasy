import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.accent};
    color: ${theme.colors.white};
    padding: 1rem;
  `}
`;
