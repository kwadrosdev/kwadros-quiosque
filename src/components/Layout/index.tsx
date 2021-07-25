import React from 'react';
import { Container, Content } from './styles';

import Navbar from '../Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
