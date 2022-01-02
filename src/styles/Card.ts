import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.colors.asideBoxShadow};
`;

export const StyledCardTitle = styled.div`
  width: 100%;
  padding: 10px;
  background-color: teal;
  border-radius: 4px;
`;

export const StyledCardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.formBg};
  border: 2px solid ${({ theme }) => theme.colors.borderLight};
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StyledCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2.5rem;
  row-gap: 0.75rem;
`;

export const StyledCardListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
  img {
    width: 30%;
  }
`;
