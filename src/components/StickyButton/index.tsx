import React from 'react';
import Link from 'next/link';
import { Container, Button } from './styles';

function StickyButton() {
  return (
    <Container>
      <Link href="/get-started" passHref>
        <Button>Vamos lá</Button>
      </Link>
    </Container>
  );
}

export default StickyButton;
