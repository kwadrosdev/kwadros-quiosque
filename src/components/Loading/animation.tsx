import React from 'react';
import { AnimationContainer, LoadingSpinner } from './styles';

function LoadingAnimation({ instagram }: { instagram?: boolean }) {
  return (
    <AnimationContainer>
      <LoadingSpinner color="inherit" />
      {instagram && <span>Aguarde... Carregando as imagens</span>}
    </AnimationContainer>
  );
}

export default LoadingAnimation;
