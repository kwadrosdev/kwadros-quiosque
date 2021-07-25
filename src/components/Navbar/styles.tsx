import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  overflow: hidden;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  flex-grow: 3;
`;

export const ImgContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  
`;

export const MenuItem = styled.a`
  font-size: 16px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
`;

export const MenuButton = styled.button`
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 17px;
  font-weight: 600;
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s, box-shadow 0.3s;
  height: 48px;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}19`};
  }
`;
