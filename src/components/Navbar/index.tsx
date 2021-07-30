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
  TitleSpace,
  ListContainer,
  ListItemText,
  ListItemIcon,
  IconButton,
} from './styles';

import { SwipeableDrawer, List, ListItem, Divider, makeStyles } from '@material-ui/core';

import {
  Menu as MenuIcon,
  HelpOutlineOutlined as HelpIcon,
  PlayCircleOutlineOutlined as PlayIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: '16px',
  },
}));

function Navbar() {
  const classes = useStyles();
  const anchor = 'right';
  const { responsive } = useSelector((state) => state.platform);
  const [openDrawer, setOpenDrawer] = useState(false);

  function NavList() {
    return (
      <ListContainer>
        <TitleSpace>
          KWADROS
          <IconButton>
            <CloseIcon onClick={() => setOpenDrawer(false)} />
          </IconButton>
        </TitleSpace>
        <Divider />
        <List>
          <Link href="/faq" passHref>
            <ListItem className={classes.listItem} button key={'faq'}>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText>FAQ</ListItemText>
            </ListItem>
          </Link>
          <Link href="/get-started" passHref>
            <ListItem className={classes.listItem} button key={'get-starded'}>
              <ListItemIcon>
                <PlayIcon />
              </ListItemIcon>
              <ListItemText>Selecionar Fotos</ListItemText>
            </ListItem>
          </Link>
        </List>
      </ListContainer>
    );
  }

  return (
    <Container>
      <Logo>
        <Link href="/" passHref>
          <ImgContainer>
            <Image src={logoImg} alt="logoImg" layout="fill" objectFit="contain" quality={100} />
          </ImgContainer>
        </Link>
      </Logo>
      {!responsive ? (
        <Menu>
          <Link href="/faq" passHref>
            <MenuItem>FAQ</MenuItem>
          </Link>
          <Link href="/get-started" passHref>
            <MenuButton>Vamos Lá</MenuButton>
          </Link>
        </Menu>
      ) : (
        <React.Fragment key={anchor}>
          <IconButton onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer anchor={anchor} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
            <NavList />
          </SwipeableDrawer>
        </React.Fragment>
      )}
    </Container>
  );
}

export default Navbar;
