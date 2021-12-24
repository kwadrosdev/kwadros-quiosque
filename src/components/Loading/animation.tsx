import React from 'react';
import { AnimationContainer, LoadingSpinner } from './styles';

function LoadingAnimation({ instagram, fill, checkout }: { instagram?: boolean; fill?: boolean; checkout?: boolean }) {
  return (
    <AnimationContainer fill={fill}>
      <LoadingSpinner color="inherit" />
      {instagram && <span>Aguarde... Carregando as imagens</span>}
      {checkout && (
        <h3 style={{ marginTop: '24px' }}>
          Aguarde... estamos processando as imagens selecionadas, você será levado ao carrinho em instantes.
        </h3>
      )}
    </AnimationContainer>
  );
}

export default LoadingAnimation;
