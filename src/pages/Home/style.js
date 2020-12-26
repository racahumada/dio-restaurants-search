import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Img = styled.img`
  width: 166px;
`;