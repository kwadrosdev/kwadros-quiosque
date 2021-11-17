import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100vh;
    padding: 40px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
`;

export const Box = styled.div`
  position: relative;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 20%);
  width: 100%;
  height: 100%;
  max-width: 1400px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    border-radius: 5px;
  }

  @media screen and (min-width: 960px) {
    background: ${({ theme }) => `linear-gradient(180deg, ${theme.colors.primary} 55%, rgba(246,246,246,1) 45%);`};
  }
`;

export const CardBox = styled.form`
  display: flex;
  width: 100%;
  max-width: 800px;
  min-height: 360px;
  padding: 0px 20px;

  @media screen and (min-width: 960px) {
    width: 100%;
    max-width: 620px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 16%);
    min-height: 360px;
    padding: 100px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background: #fff;
  border: none;
  margin-bottom: 12px;
  padding: 0px 16px;
  font-size: 16px;
  font-weight: 600;
  outline: none;

  @media screen and (min-width: 960px) {
    background: #f7f7f7;
  }
`;

export const MainBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  height: 60px;
  width: 100%;
  transition: box-shadow 0.3s ease 0s, background-color 0.3s ease 0s;

  &:hover {
    box-shadow: 0 3px 12px ${({ theme }) => `${theme.colors.primary}4C`};
  }
`;

export const StepsHeader = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;

  & svg {
    fill: #222;
  }

  & > span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: bold;
    color: #222;
  }

  @media screen and (min-width: 960px) {
    & svg {
      fill: #fff;
    }

    & > span {
      color: #fff;
    }
  }
`;

export const Transition1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-name: ${fadeInUp};

  & > h2 {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;

export const Transition2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-name: ${fadeInUp};

  & > h2 {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;
