import styled, { keyframes } from 'styled-components';
import { Dialog } from '@mui/material';

export const appear = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    width: 300px;
    opacity: 0;
    -webkit-transform: scale(.7);
    transform: scale(.7);
  }
  100% {
    width: 100%;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const CustomDialog = styled(Dialog)`
  .MuiDialog-scrollPaper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  & .MuiPaper-root {
    background-color: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    max-width: 680px;
    width: 100%;
    margin: 10px !important;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    animation: ${appear} 0.6s;
  }
`;

export const LowQualityImgContainer = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 10px;

  & h3 {
    font-size: 20px;
    font-weight: 700;
  }

  & span {
    font-weight: 700;
    color: #8c8c8c;
    text-align: center;
  }
`;

export const LowQualityImg = styled.div`
  margin: 24px 0px;
  position: relative;
  width: 130px;
  height: 130px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.32);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const ButtonsContainer = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
`;

export const BtnOption = styled('button')<{ highlighted?: true }>`
  width: 100%;
  padding: 12px 0px;
  border: none;
  border-radius: 0px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ highlighted }) => (highlighted ? '#e64d00' : 'rgba(0,0,0,0.87)')};

  &:first-child {
    border-bottom: 1px solid #ccc;
  }
`;
