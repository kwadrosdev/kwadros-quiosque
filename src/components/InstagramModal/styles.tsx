import styled from 'styled-components';
import { Dialog, IconButton } from '@mui/material';

export const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    background-color: #f5f5f5;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 959px) {
      width: 100%;
      height: 100%;
      margin: 0px;
      max-width: unset;
      max-height: unset;
      border-radius: 0px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  padding: 8px;
  background: #eee;
`;

export const Content = styled.div`
  width: 100%;
  max-height: calc(100vh - 142px);
  height: calc(100vh - 142px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;

  @media screen and (min-width: 960px) {
    max-height: 600px;
    height: calc(100vh - 206px);
  }
`;

export const ImagesContainer = styled.div`
  width: fit-content;
  max-width: 760px;
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 54px;
  box-shadow: 0 0 6px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  & span {
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 600;
    font-size: 17px;
  }
`;

export const CloseBtn = styled(IconButton)`
  position: absolute !important;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  & svg {
    fill: rgba(0, 0, 0, 0.4);
  }
`;

export const LogoutBtn = styled(IconButton)`
  position: absolute !important;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);

  & svg {
    fill: rgba(0, 0, 0, 0.4);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 72px;
  padding: 0px 24px;
  box-shadow: 0 0 6px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    color: #222;
    font-weight: 600;
  }
`;

export const ModalBtn = styled.button`
  width: fit-content;
  padding: 0px 16px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;

  color: #fff;
  font-size: 15px;
  font-weight: 500;

  &:disabled {
    background-color: #ddd;
  }
`;

export const InstaImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 160px;
  height: 160px;
  background-color: #fff;
  padding: 4px;
  box-shadow: 0 0 12px rgb(0 0 0 / 30%);
`;

export const InstaImgFrame = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const SelectedBorder = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
  background-color: ${({ theme }) => `${theme.colors.primary}1C`};
  border: ${({ theme }) => `6px solid ${theme.colors.primary}`};
`;

export const SelectedIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => `${theme.colors.primary}`} !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    fill: #fff;
    width: 16px;
    height: 16px;
  }
`;

export const LoadMoreBtn = styled.button`
  margin-bottom: 60px;
  width: fit-content;
  padding: 0px 16px;
  min-height: 36px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;

  color: #fff;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}EF`};
  }
`;
