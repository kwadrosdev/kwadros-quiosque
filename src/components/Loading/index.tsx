import React from 'react';
import { Container } from './styles';
import { useSelector } from '@hooks';

import LoadingAnimation from './animation';

export default function LoadingPage({ fb_token = false }) {
  const loading = useSelector((state) => (fb_token ? state.review.loadingFbToken : state.review.loadingCheckout));

  if (!loading) return <></>;

  return (
    <Container>
      <LoadingAnimation checkout={!fb_token} />
    </Container>
  );
}
