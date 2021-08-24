import React, { SetStateAction, Dispatch } from 'react';
import Link from 'next/link';

import {
  Menu as MenuIcon,
  HelpOutlineOutlined as HelpIcon,
  PlayCircleOutlineOutlined as PlayIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import { SwipeableDrawer, List, ListItem, Divider, makeStyles } from '@material-ui/core';
import { TitleSpace, ListContainer, ListItemText, ListItemIcon, IconButton } from './styles';

interface SwipeableProps {
  isblack: boolean;
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: '16px',
  },
}));

function Swipeable({ isblack = false, openDrawer, setOpenDrawer }: SwipeableProps) {
  const classes = useStyles();
  const anchor = 'right';

  const renderNavList = () => {
    return (
      <ListContainer>
        <TitleSpace>
          KWADROS
          <IconButton isblack={'false'}>
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
  };

  return (
    <React.Fragment key={anchor}>
      <IconButton isblack={isblack.toString()} onClick={() => setOpenDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer anchor={anchor} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        {renderNavList()}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default Swipeable;