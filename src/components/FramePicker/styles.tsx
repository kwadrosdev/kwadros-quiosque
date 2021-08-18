import styled from 'styled-components';

import popularBadge from '/public/images/popular.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: fit-content;
  box-shadow: 0 4px 9px rgb(0 0 0 / 5%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 1024px) {
    border-bottom: none;
    box-shadow: none;
    width: 360px;
    height: calc(100vh - 72px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const FrameList = styled.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  overflow-x: auto;

  @media screen and (min-width: 1024px) {
    padding: 16px 24px;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
  }
`;

export const Frame = styled('div')<{ selected: boolean }>`
  min-width: 80px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  margin: 0px 2px;
  background-color: ${({ selected }) => (selected ? '#f4f4f4' : '#fff')};
  padding: 8px 0px;

  & img {
    transition: opacity 0.2s;
    border-radius: 5px;
    opacity: ${({ selected }) => (selected ? 1 : 0.8)};
  }

  & span {
    font-weight: ${({ selected }) => selected && 700};
    color: ${({ selected, theme }) => selected && theme.colors.primary};
  }

  &:hover {
    & img {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 0px 8px;
    margin: 0px;
  }
`;

export const FrameName = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px 0px 0px 0px;

  & span {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
    font-weight: 600;
    text-transform: capitalize;
  }

  @media screen and (min-width: 1024px) {
    margin: 0px 0px 0px 20px;
    align-items: flex-start;
  }
`;

export const PopularTag = styled('div')<{ img: any }>`
  font-size: 10px;
  letter-spacing: 0.5px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  text-transform: uppercase;

  @media screen and (max-width: 1023px) {
    top: 0px;
    padding: 5px 0px 0px 0px;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 72px;
    height: 23px;
    transform: translateY(-70px);
    background-image: url('/images/popular.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    margin-top: 5px;
    padding: 0 6px;
    line-height: 18px;
    border-radius: 2px;
  }
`;
