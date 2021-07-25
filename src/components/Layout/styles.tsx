import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 100px;

  @media screen and (min-width: 960px) {
    margin: auto;
    width: 85%;
  }
`