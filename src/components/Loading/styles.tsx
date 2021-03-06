import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
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

export const AnimationContainer = styled('div')<{ fill?: boolean }>`
  width: 100%;
  height: ${({ fill }) => (!fill && '600px')};
  flex: ${({ fill }) => (fill && 1)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    margin-top: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }
  
  & h3 {
    margin-top: 24px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 0px 16px;

  }
`;

export const LoadingSpinner = styled(CircularProgress)`
  & * {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
