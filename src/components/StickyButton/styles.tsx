import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 8px;
  background-color: rgb(255, 255, 255);
  transition: all 5s ease 0s;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  height: 100%;
  max-width: 400px;
  width: 100%;
  transition: box-shadow 0.3s ease 0s, background-color 0.3s ease 0s;

  &:hover {
    box-shadow: 0 3px 12px ${({ theme }) => `${theme.colors.primary}4C`};
  }
`;
