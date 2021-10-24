import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 10;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    margin-top: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const LoadingSpinner = styled(CircularProgress)`
  & * {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
