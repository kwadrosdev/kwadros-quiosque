import styled, { keyframes } from 'styled-components';
import { AddRounded, CameraAlt, Facebook, Instagram, DeleteOutline, Crop } from '@material-ui/icons';
import { IconButton, Dialog } from '@material-ui/core';

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

export const ResponsiveButtons = styled(Dialog)`
  @media screen and (min-width: 1024px) {
    display: none;
  }

  .MuiDialog-scrollPaper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  & .MuiPaper-root {
    border-radius: 10px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    margin: 16px !important;
  }
`;

export const ResponsiveBtn = styled.div`
  background-color: #fff;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 48px;
  padding: 0px 12px;
  display: flex;
  align-items: center;

  & > span {
    margin-left: 16px;
    font-weight: 600;
  }

  &:hover {
    background-color: #efefef;
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

  @media screen and (min-width: 1024px) {
    &:hover {
      .tile_btns {
        visibility: visible;
      }
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

export const ImgContainer = styled('div')<{ hasPadding: boolean; orientation: string }>`
  position: relative;
  margin-left: -5px;
  margin-top: -13px;
  width: ${({ hasPadding }) => (hasPadding ? '177px' : '236px')};
  height: ${({ hasPadding }) => (hasPadding ? '177px' : '236px')};
  padding-top: ${({ hasPadding }) => (hasPadding ? '1px' : '0px')};
  overflow: hidden;
  animation: ${fade_in_up} 0.4s;

  & .reactEasyCrop_Container {
    position: absolute;
    inset: 0px;
    overflow: hidden;
    user-select: none;
    touch-action: none;
    cursor: move;
    transform: translateZ(0);

    & > img {
      transition: transform 0.1s ease-out, opacity 0.3s 0.3s, -webkit-transform 0.1s ease-out;
      bottom: 0px !important;
      left: -9999px !important;
      right: -9999px !important;

      height: ${({ hasPadding, orientation }) => (orientation === 'portrait' ? 'unset' : hasPadding ? '177px' : '223px')};
      width: ${({ hasPadding, orientation }) => (orientation === 'landscape' ? 'unset' : hasPadding ? '177px' : '223px')};

      max-width: unset !important;
      max-height: unset !important;
      z-index: -1;
      margin: auto;
      position: absolute;
      inset: 0px;
      will-change: transform;
    }

    & > div {
      z-index: 1;
      color: #f5f5f5 !important;
      border: none !important;
      /* margin-left: -3px;
      margin-top: -7px; */

      &::after {
        display: none;
      }

      &::before {
        display: none;
      }
    }
  }
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
  overflow: hidden;

  &:hover {
    border: 4px dashed ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: 900px) {
    border: unset;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px hsl(0deg 0% 50% / 17%);

    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      border: none;

      .add_icon {
        display: none;
      }

      .add_option {
        display: flex;
        justify-content: flex-start;
      }
    }
  }
`;

export const AddWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
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
  cursor: pointer;
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

export const TileBtnsContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 20px;
  right: 30px;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
`;

export const TileBtn = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }

  & > svg {
    width: 20px !important;
    height: 20px !important;
    fill: #000 !important;
  }
`;

export const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    background-color: #f5f5f5;

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

export const CropModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 960px) {
    width: 600px;
    min-height: 560px;
  }
`;

export const CropModalTitle = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  background-color: #fff;

  & > h3 {
    font-size: 20px;
  }
`;

export const CloseBtn = styled(IconButton)`
  position: absolute !important;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;

  & svg {
    fill: rgba(0, 0, 0, 0.4) !important;
  }
`;

export const DoneBtn = styled.div`
  position: absolute !important;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 8px;
  right: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    padding: 0px 8px 2px 8px;
    font-weight: 700;
  }
`;

export const CropModalContent = styled('div')<{ hasPadding: boolean; orientation: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 960px) {
    min-width: 600px;
    min-height: 500px;
  }

  & .reactEasyCrop_Container {
    position: absolute;
    inset: 0px;
    overflow: hidden;
    user-select: none;
    touch-action: none;
    cursor: move;
    transform: translateZ(0);
    bottom: 80px !important;

    & > img {
      transition: transform 0.1s ease-out, opacity 0.3s 0.3s, -webkit-transform 0.1s ease-out;
      bottom: 16px !important;
      left: -9999px !important;
      right: -9994px !important;

      height: ${({ hasPadding, orientation }) => (orientation === 'portrait' ? 'unset' : hasPadding ? '212.25px' : '262px')};
      width: ${({ hasPadding, orientation }) => (orientation === 'landscape' ? 'unset' : hasPadding ? '212.25px' : '262px')};

      max-width: unset !important;
      max-height: unset !important;
      z-index: -1;
      margin: auto;
      position: absolute;
      inset: 0px;
      will-change: transform;
    }

    & > div {
      z-index: 1;
      color: #f5f5f5 !important;
      border: none !important;
      margin-left: -3px;
      margin-top: -7px;

      &::after {
        display: none;
      }

      &::before {
        display: none;
      }
    }
  }
`;

export const CropTile = styled.div`
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  height: 300px;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 80px !important;
  z-index: 1;
  pointer-events: none;
`;

export const CropTileFrame = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CropTileBase = styled.div`
  position: absolute;
  top: 1px;
  right: 10px;
  box-shadow: 4px 18px 15px 0 rgb(0 0 0 / 30%), 1px 15px 20px 2px rgb(0 0 0 / 30%);
  left: 6px;
  bottom: 15px;
  background-image: unset;
`;

export const CropImgContainer = styled('div')<{ hasPadding: boolean }>`
  width: fit-content;
`;

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 70px;
  width: 310px;

  @media screen and (min-width: 960px) {
    width: 380px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SliderBtn = styled.div`
  border-radius: 50%;
  box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
  transition: all 0.3s;
  flex-shrink: 0;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ecf0f1;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 15%);
  }

  & svg {
    width: 20px !important;
    height: 20px !important;
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (min-width: 960px) {
    width: 40px;
    height: 40px;

    & svg {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;

export const CropperText = styled('div')<{ responsive: boolean }>`
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 14px;
  color: #8c8c8c;
  font-weight: 700;
  letter-spacing: 1.6px;
  z-index: 2;
  pointer-events: none;

  transition: transform 0.001s linear !important;
  transition-delay: 0.001s !important;
  animation-timing-function: step-end !important;
  animation-iteration-count: 1 !important;

  @media screen and (max-width: 500px) {
    display: ${({ responsive }) => (responsive ? 'block' : 'none')};
  }
  @media screen and (min-width: 501px) {
    display: ${({ responsive }) => (responsive ? 'none' : 'block')};
  }
`;
