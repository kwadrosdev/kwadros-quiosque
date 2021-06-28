import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.nav`
  width: 100%;
  height: 90px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
`;

export const ImgContainer = styled.div`
  cursor: pointer;
  margin-left: 36px;
  position: relative;
  width: 150px;
  height: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const MenuItem = styled.a`
  font-size: 16px;
  color: #000;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export const MenuButton = styled.button`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  min-width: 120px;
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
