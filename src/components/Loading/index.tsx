import React from 'react';
import { Container } from './styles';
import { useSelector } from '@hooks';

import LoadingAnimation from './animation';

export default function LoadingPage() {
  const loading = useSelector((state) => state.review.loadingCheckout);

  if (!loading) return <></>;

  return (
    <Container>
      <LoadingAnimation checkout />
    </Container>
  );
}
