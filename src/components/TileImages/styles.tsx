import styled, { keyframes } from 'styled-components';
import { AddRounded, CameraAlt, Facebook, Instagram } from '@material-ui/icons';

const appear = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    width: 240px;
    opacity: 0;
    -webkit-transform: scale(.7);
    transform: scale(.7);
  }
  100% {
    width: 240px;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const fade_in_up = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 50px 16px 30px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    & .add_responsive {
      display: none;
    }
  }
`;

export const TileContainer = styled.div`
  position: relative;
  margin: 15px;
  min-width: 253px;
  min-height: 253px;
  width: 253px;
  height: 253px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${appear} 0.6s;
  cursor: pointer;

  &:hover {
    .tile_base,
    .tile_img {
      filter: brightness(0.77);
      transition: filter 0.2s;
    }
  }
`;

export const TileFrame = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TileBase = styled.div`
  cursor: pointer;
  position: absolute;
  width: 238px;
  height: 238px;
  top: 1px;
  left: 5px;
  right: 10px;
  bottom: 14px;
  box-shadow: 4px 18px 15px 0 rgb(0 0 0 / 30%), 1px 15px 20px 2px rgb(0 0 0 / 30%);
  background-image: linear-gradient(to right bottom, #fff, #fbfbfb, #f8f8f8, #f4f4f4, #f1f1f1);

  @media screen and (min-width: 900px) {
    box-shadow: 8px 18px 15px 0 rgb(0 0 0 / 20%), 1px 7px 15px 2px rgb(0 0 0 / 10%);
  }

  @media screen and (min-width: 1024px) {
    box-shadow: 2.02px 24.24px 24.24px rgb(0 0 0 / 30%), 6.06px 29.28px 56.55px rgb(0 0 0 / 20%);
  }
`;

export const ImgContainer = styled('div')<{ hasPadding: boolean }>`
  position: relative;
  margin-left: -5px;
  margin-top: -13px;
  width: ${({ hasPadding }) => (hasPadding ? '177px' : '236px')};
  height: ${({ hasPadding }) => (hasPadding ? '177px' : '236px')};
  padding-top: ${({ hasPadding }) => (hasPadding ? '1px' : '0px')};
  overflow: hidden;
  animation: ${fade_in_up} 0.4s;
`;

export const AddImages = styled.div`
  cursor: pointer;
  margin: 20px;
  min-width: 240px;
  min-height: 240px;
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px dashed #b0b0b0;
  border-radius: 16px;
  animation: ${appear} 0.6s;

  &:hover {
    .add_icon {
      display: none;
    }

    .add_option {
      display: flex;
      justify-content: flex-start;
    }
  }

  @media screen and (min-width: 900px) {
    border: unset;
    border-radius: 4px;
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 0 4px 7px hsl(0deg 0% 50% / 17%);
  }
`;

export const AddIcon = styled(AddRounded)`
  width: 82px !important;
  height: 82px !important;
  fill: #b0b0b0 !important;

  @media screen and (min-width: 900px) {
    fill: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const CameraIcon = styled(CameraAlt)`
  width: 24px !important;
  height: 24px !important;
  fill: ${({ theme }) => theme.colors.primary} !important;
`;

export const FacebookIcon = styled(Facebook)`
  width: 24px !important;
  height: 24px !important;
  fill: ${({ theme }) => theme.colors.primary} !important;
`;

export const InstagramIcon = styled(Instagram)`
  width: 24px !important;
  height: 24px !important;
  fill: ${({ theme }) => theme.colors.primary} !important;
`;

export const AddOption = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  padding-left: 20px;
  display: none;
  align-items: center;
  background-color: #fff;

  & span {
    margin-left: 16px;
    font-weight: 600;
    font-size: 15px;
    line-height: 15px;
  }

  @media screen and (max-width: 899px) {
    &:first-of-type {
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
    }

    &:last-of-type {
      border-bottom-right-radius: 16px;
      border-bottom-left-radius: 16px;
    }
  }

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}0F`};
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
