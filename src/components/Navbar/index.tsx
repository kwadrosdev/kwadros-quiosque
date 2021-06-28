import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '/public/images/logo.png';
import { Container, Logo, Menu, ImgContainer, MenuItem, MenuButton } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Link href="/" passHref>
          <ImgContainer>
            <Image src={logoImg} alt="logoImg" layout="fill" objectFit="contain" />
          </ImgContainer>
        </Link>
      </Logo>
      <Menu>
        <Link href="/faq" passHref>
          <MenuItem>FAQ</MenuItem>
        </Link>
        <Link href="/get-started" passHref>
          <MenuButton>Vamos Lá</MenuButton>
        </Link>
      </Menu>
    </Container>
  );
};

export default Navbar;
