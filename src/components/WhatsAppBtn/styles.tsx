import styled from 'styled-components';

export const WppBtn = styled('a')<{ bottom?: number; hide?: boolean }>`
  cursor: pointer;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  text-decoration: none;
  appearance: none;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  position: fixed !important;
  z-index: 10;
  bottom: ${({ bottom }) => (bottom ? `${bottom + 48}px` : '48px')};
  right: 16px !important;
  background-color: #25d366 !important;
  color: #fff !important;
  border: none;
  border-radius: 50%;
  
  @media screen and (min-width: 1024px) {
    bottom: 48px;
    right: 24px !important;
  }

  &:hover {
    background-color: #28b85d !important;
  }

  & svg {
    fill: #fff !important;
  }
`;
