import styled from 'styled-components';
import { IconButton as MuiIconButton } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

export const Navbar = styled.nav`
  position: relative;
  min-height: 56px;
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #fff;

  @media screen and (min-width: 1024px) {
    min-height: 72px;
    box-shadow: 0 4px 9px rgb(0 0 0 / 5%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    align-items: center;
  }

  & span {
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  /* & span {
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0px;
  } */

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const IconButton = styled(MuiIconButton)`
  width: 36px;
  height: 36px;
  padding: 0px !important;

  & svg {
    width: 20px;
    height: 20px;
  }
`;
