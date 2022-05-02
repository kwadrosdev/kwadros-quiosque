import styled from 'styled-components';

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

  & span {
    margin-top: 24px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }

  & h3 {
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font-weight: 500;
    padding: 0px 16px;
  }

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
    width: 48px;
    height: 48px;
    margin-bottom: 24px;
  }
`;

export const DismissBtn = styled.button`
  margin-top: 24px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  width: 120px;
  transition: box-shadow 0.3s ease 0s, background-color 0.3s ease 0s;

  &:hover {
    box-shadow: 0 3px 12px ${({ theme }) => `${theme.colors.primary}4C`};
  }
`;

export const ScreenContainer = styled('div')<{ fill?: boolean }>`
  width: 100%;
  flex: 1;
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
