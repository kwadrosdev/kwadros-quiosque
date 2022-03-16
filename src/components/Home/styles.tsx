import styled, { keyframes, css } from 'styled-components';
import { Cached, LocalShippingOutlined } from '@mui/icons-material';
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
`;

export const MainSection = styled.section`
  @media screen and (min-width: 960px) {
    flex-direction: row;
    margin: 50px 0px;
    max-width: 1524px;
    overflow: hidden;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
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

export const ResponsiveImage = styled.div`
  width: calc(86vw);
  height: calc(86vw);
  margin: 0px 7%;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
`;

export const ImagesSection = styled.section`
  @media screen and (min-width: 960px) {
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
          max-height: 357px;
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

export const FilledImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 220px;

  @media screen and (min-width: 960px) {
    min-width: 200px;
    min-height: 400px;

    & img {
      border-radius: 8px;
    }
  }
`;

export const MainText = styled.h1`
  @media screen and (min-width: 960px) {
    font-size: 62px;
    line-height: 62px;
    margin-bottom: -10px;
  }

  @media screen and (min-width: 460px) {
    font-size: 42px;
    line-height: 45px;
  }

  font-size: 30px;
  line-height: 34px;
  margin: 20px 0;
  letter-spacing: -0.06em;
  font-style: normal;
  font-weight: 700;
`;

export const SubText = styled.h2`
  padding: 30px 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`;

export const MainBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  height: 60px;
  width: 290px;
  transition: box-shadow 0.3s ease 0s, background-color 0.3s ease 0s;

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

  & span {
    margin-left: 16px;
  }

  color: ${({ theme }) => theme.colors.black};
`;

export const ChangeIcon = styled(Cached)<{ width: string; height: string }>`
  width: ${({ width }) => width} !important;
  height: ${({ height }) => height} !important;
`;

export const ShippingIcon = styled(LocalShippingOutlined)<{ width: string; height: string }>`
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
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin: 50px 0px;
    max-width: 1524px;
    width: 100%;
  }
  @media screen and (max-width: 959px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
      padding-top: 70px;
    }
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;

  & > .mainText {
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

export const Divider = styled('div')<{ margin: string; responsive: boolean }>`
  width: 100%;
  height: ${({ responsive }) => (responsive ? '0px' : '1px')};
  background-color: #f7f7f7;
  margin: ${({ margin }) => `${margin} 0px`};
`;

Divider.defaultProps = {
  responsive: false,
  margin: '0px',
};

export const GifSection = styled.section`
  margin: 30px;
  width: calc(100% - 60px);
  background-color: #e9deea;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  @media screen and (min-width: 960px) {
    padding: 40px 0px;
    justify-content: center;
    flex-direction: row;
  }
`;

export const GifSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #4c3f4e;
  padding: 35px;

  & > h3 {
    font-size: 24px;
    line-height: 25px;
    white-space: pre-wrap;
    letter-spacing: -0.04em;
    max-width: 440px;
  }

  & > span {
    padding-top: 8px;
    font-size: 16px;
    white-space: pre-wrap;
    font-weight: 500;
  }

  & .subscript {
    padding-top: 4px;
    font-size: 11px;
    line-height: 13px;
  }

  @media screen and (min-width: 960px) {
    padding: 0px;

    & > h3 {
      font-size: 44px;
      line-height: 46px;
      white-space: pre-wrap;
      letter-spacing: -0.04em;
      max-width: 440px;
    }

    & > span {
      padding-top: 18px;
      font-size: 18px;
      white-space: pre-wrap;
      font-weight: 600;
    }
  }
`;

export const GifExtraPadding = styled.div`
  flex-grow: 8;
`;

export const GifImg = styled.div`
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 959px) {
    width: 100%;
    height: calc(100vw - 90px);
  }

  @media screen and (min-width: 960px) {
    min-width: 300px;
    min-height: 300px;

    & img {
      border-radius: 8px;
    }
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
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    padding-bottom: 13px;
    text-align: center;
  }

  & > span {
    text-align: center;
    line-height: 18px;
    font-size: 18px;
  }

  @media screen and (min-width: 960px) {
    & > h4 {
      font-size: 30px;
      line-height: 30px;
    }
    & > span {
      margin-top: 5px;
      font-weight: 600;
    }
  }
`;

export const VideoSection = styled.section`
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;

  & > h4 {
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    padding-bottom: 13px;

    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (min-width: 400px) {
    & > h4 {
      font-size: 17px;
    }
  }

  @media screen and (min-width: 600px) {
    margin: 40px 0px;

    & > h4 {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 960px) {
    margin: 50px 0px;

    & > h4 {
      font-size: 30px;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  max-height: 720px;
  @media screen and (min-width: 960px) {
    margin-top: 30px;
  }
`;
