import styled from 'styled-components';
import { CameraAlt, Facebook, Instagram } from '@mui/icons-material';

export const Container = styled.div`
  flex: 0 1 auto;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1024px) {
    width: calc(100% - 360px);
    height: calc(100vh - 72px);
    padding-top: 0px;
    padding-bottom: 80px;
    /* align-items: center; */
  }
`;

export const GetStartedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h3 {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 360px) {
    & > h3 {
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 120px;
    justify-content: center;

    & > h3 {
      font-size: 24px;
      line-height: 31px;
      margin-bottom: 60px;
      font-weight: 800;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: fit-content;
    max-width: 1000px;
  }
`;

export const FullOptionInputMask = styled.div`
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

export const FullOptionInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const FullOption = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 60px;
  background: #fff;
  border: 3px solid hsla(0, 0%, 100%, 0.9);
  box-shadow: 0 4px 7px hsl(0deg 0% 50% / 17%);
  border-radius: 6px;
  transition: background 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  padding: 0px 16px;

  & span {
    margin-left: 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
  }

  &:hover {
    box-shadow: 0 15px 20px rgb(0 0 0 / 6%), 0 4px 7px hsl(0deg 0% 50% / 17%);
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
    height: 160px;
    flex-direction: column;
    justify-content: center;
    padding: 0px;

    & span {
      margin-top: 8px;
      margin-left: 0px;
      font-size: 15px;
      line-height: 15px;
      font-weight: 700;
    }
  }
`;

export const CloudOptionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    height: 160px;
    width: 260px;
  }
`;

export const CloudOption = styled.div`
  cursor: pointer;
  width: 100%;
  height: 60px;
  background: #fff;
  border: 3px solid hsla(0, 0%, 100%, 0.9);
  box-shadow: 0 4px 7px hsl(0deg 0% 50% / 17%);
  border-radius: 6px;
  transition: background 0.3s, box-shadow 0.3s;
  display: flex;
  justify-content: flex-start;
  padding: 0px 16px;
  align-items: center;

  & span {
    margin-left: 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
  }

  &:hover {
    box-shadow: 0 15px 20px rgb(0 0 0 / 6%), 0 4px 7px hsl(0deg 0% 50% / 17%);
  }

  @media screen and (min-width: 1024px) {
    width: 260px;
    height: 74px;
  }
`;

export const Divider = styled.span`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
  line-height: 14px;
  color: #c4c4c4;
  padding: 20px 0px;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    padding: 0px 20px;
  }
`;

export const CameraIcon = styled(CameraAlt)`
  fill: ${({ theme }) => theme.colors.primary} !important;

  @media screen and (min-width: 1024px) {
    width: 36px !important;
    height: 36px !important;
  }
`;

export const FacebookIcon = styled(Facebook)`
  fill: ${({ theme }) => theme.colors.primary} !important;
`;

export const InstagramIcon = styled(Instagram)`
  fill: ${({ theme }) => theme.colors.primary} !important;
`;
