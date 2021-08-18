import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '/public/images/logo.png';
import { useSelector } from '@hooks';

import {
  Container,
  Logo,
  Menu,
  ImgContainer,
  MenuItem,
  MenuButton,
} from './styles';

import SwipeableMenu from './swipeable';

function Navbar() {
  const { responsive } = useSelector((state) => state.platform);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Container>
      <Logo>
        <Link href="/" passHref>
          <ImgContainer>
            <Image src={logoImg} alt="logoImg" layout="fill" objectFit="contain" quality={100} />
          </ImgContainer>
        </Link>
      </Logo>
      {responsive ? (
        <SwipeableMenu isblack={false} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      ) : (
        <Menu>
          <Link href="/faq" passHref>
            <MenuItem>FAQ</MenuItem>
          </Link>
          <Link href="/get-started" passHref>
            <MenuButton>Vamos Lá</MenuButton>
          </Link>
        </Menu>
      )}
    </Container>
  );
}

export default Navbar;
