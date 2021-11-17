import React from 'react';
import { AnimationContainer, LoadingSpinner } from './styles';

function LoadingAnimation({ instagram, fill }: { instagram?: boolean; fill?: boolean }) {
  return (
    <AnimationContainer fill={fill}>
      <LoadingSpinner color="inherit" />
      {instagram && <span>Aguarde... Carregando as imagens</span>}
    </AnimationContainer>
  );
}

export default LoadingAnimation;
