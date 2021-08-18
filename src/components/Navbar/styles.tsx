import styled from 'styled-components';
import { IconButton as CustomIconBtn } from '@material-ui/core';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 16px 0px 32px;

  @media screen and (min-width: 960px) {
    width: 100%;
    height: 90px;
    padding: 0px 50px;
    overflow: hidden;
  }
`;

export const Logo = styled.div`
  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    padding-left: 50px;
    flex-grow: 3;
  }
`;

export const ImgContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 120px;
  height: 40px;

  @media screen and (min-width: 960px) {
    width: 150px;
    height: 50px;
  }
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

export const TitleSpace = styled.div`
  position: relative;
  height: 80px;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;

  & button {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ListContainer = styled.div`
  width: 280px;

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItemIcon = styled.div`
  min-width: 40px;
  height: 24px;
`;

export const ListItemText = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const IconButton = styled(CustomIconBtn)<{ isblack: string }>`
  padding: 0px;
  height: 36px;
  width: 36px;

  & svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme, isblack }) => (isblack === "true" ? '#222' : theme.colors.primary)};
  }
`;
