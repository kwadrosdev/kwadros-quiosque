import styled, { keyframes, css } from 'styled-components';
import { LocalShippingOutlined } from '@material-ui/icons';
import nailsvg from 'public/icons/nail_icon.svg';
import warrantysvg from 'public/icons/warranty_icon.svg';

import Image from 'next/image';

const fadeInUp = keyframes`
    0% {
      transform: translate3d(0, 40px, 0);
      opacity: 0; 
    }

    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

export const MainSection = styled.section`
  display: flex;
  margin: 50px 0px;
  width: 100%;
  max-width: 1524px;
  overflow: hidden;
`;

export const TextSection = styled.section`
  @media screen and (min-width: 960px) {
    max-width: 50%;
    flex-grow: 1;
    margin: 0;
    padding-left: 35px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-line;
  margin: 0 7%;
  color: #333;

  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-name: ${fadeInUp};
`;

export const ImagesSection = styled.section`
  @media screen and (min-width: 960px) {
    min-height: 570px;
    width: 50%;
    padding-right: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
  }

  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-name: ${fadeInUp};
`;

export const Col = styled('div')<{ dir: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 960px) {
    & .row {
      margin: 10px;

      & img {
        border-radius: 6px;
      }
    }
  }

  ${({ dir }) =>
    dir === 'left' &&
    css`
      @media screen and (min-width: 960px) {
        & .row {
          max-width: 228px;
          max-height: 228px;
        }
      }
      @media screen and (min-width: 1440px) {
        & .row {
          max-width: 257px;
          max-height: 257px;
        }
      }
    `}

  ${({ dir }) =>
    dir === 'right' &&
    css`
      @media screen and (min-width: 960px) {
        & .up {
          max-width: 143px;
          max-height: 143px;
        }

        & .down {
          max-width: 285px;
          max-height: 285px;
        }
      }

      @media screen and (min-width: 1440px) {
        & .up {
          max-width: 200px;
          max-height: 200px;
        }
      }
    `}
`;

export const Row = styled.div``;

export const MainText = styled.h2`
  @media screen and (min-width: 960px) {
    font-size: 62px;
    line-height: 62px;
    margin-bottom: -10px;
  }

  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 45px;
  margin: 20px 0;
  letter-spacing: -0.06em;
`;

export const SubText = styled.h4`
  @media screen and (min-width: 960px) {
    padding: 30px 0;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
  }
`;

export const MainBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  height: 60px;
  width: 290px;

  &:hover {
    box-shadow: 0 3px 12px ${({ theme }) => `${theme.colors.primary}4C`};
  }
`;

export const ShippingInfo = styled.div`
  @media screen and (min-width: 960px) {
    font-weight: 700;
    display: flex;
    align-items: center;
    overflow: hidden;
    min-height: 27px;

    padding: 30px 0;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
  }

  color: ${({ theme }) => theme.colors.black};
`;

export const ShippingIcon = styled(LocalShippingOutlined)<{ width: string; height: string }>`
  margin-right: 16px;
  width: ${({ width }) => width} !important;
  height: ${({ height }) => height} !important;
`;

export function NailIcon() {
  return <Image src={nailsvg} alt="nail_icon" width={48} height={48} />;
}

export function WarrantyIcon() {
  return <Image src={warrantysvg} alt="warranty_icon" width={48} height={48} />;
}

export const InfoSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 50px 0px;
  max-width: 1524px;
  width: 100%;
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;

  & > h5 {
    font-size: 18px;
    font-weight: 700;
    padding: 5px 0px;
    text-align: center;
  }

  & > span {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    white-space: pre-line;
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f7f7f7;
`;

export const GifSection = styled.section`
  width: 100%;
  padding: 40px 0px;
  border-radius: 4px;
  background-color: #e9deea;
  display: flex;
  justify-content: center;

  align-items: center;
`;

export const GifSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h3 {
    font-size: 44px;
    line-height: 46px;
    white-space: pre-wrap;
    letter-spacing: -0.04em;
    max-width: 440px;
    color: #4c3f4e;
  }

  & > span {
    padding-top: 18px;
    font-size: 18px;
    white-space: pre-wrap;
    font-weight: 600;
    color: #4c3f4e;
  }
`;

export const GifExtraPadding = styled.div`
  flex-grow: 8;
`;

export const GifImg = styled.div`
  position: relative;
  overflow: hidden;
  
  @media screen and (min-width: 960px) {
    min-width: 300px;
    min-height: 300px;
  }

  & img {
    border-radius: 8px;
  }
`;

export const FeedbackSection = styled.section`
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;

  & > h4 {
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 13px;
  }

  & > span {
    margin-top: 5px;
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const VideoSection = styled.section`
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;

  & > h4 {
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 13px;

    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const VideoContainer = styled.div`
  max-width: 1280px;
  max-height: 720px;
  width: 100%;
  margin-top: 30px;
`;