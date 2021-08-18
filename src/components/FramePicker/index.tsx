import React from 'react';

import { Container, FrameList, Frame, FrameName, PopularTag } from './styles';
import { useSelector, useDispatch } from '@hooks';

import { setCurrentFrame } from '@modules/review/actions'

import FrameImg from 'next/image';

import boldFrame from 'public/images/frames/boldIcon.png'
import classicFrame from 'public/images/frames/classicIcon.png'
import cleanFrame from 'public/images/frames/cleanIcon.png'
import everFrame from 'public/images/frames/everIcon.png'
import popularBadge from 'public/images/popular.svg'

function FramePicker() {
  const dispatch = useDispatch();
  const currentFrame = useSelector(state => state.review.currentFrame);

  return (
    <Container>
      <FrameList>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'ever'}))} selected={currentFrame === 'ever'}>
          <FrameImg src={everFrame} draggable={false} width={"65px"} height={"65px"} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>ever</span>
            <PopularTag img={popularBadge}>Popular</PopularTag>
          </FrameName>
        </Frame>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'clean'}))} selected={currentFrame === 'clean'}>
          <FrameImg src={cleanFrame} draggable={false} width={"65px"} height={"65px"} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>clean</span>
          </FrameName>
        </Frame>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'classic'}))} selected={currentFrame === 'classic'}>
          <FrameImg src={classicFrame} draggable={false} width={"65px"} height={"65px"} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>classic</span>
          </FrameName>
        </Frame>
        <Frame onClick={() => dispatch(setCurrentFrame({ payload: 'bold'}))} selected={currentFrame === 'bold'}>
          <FrameImg src={boldFrame} draggable={false} width={"65px"} height={"65px"} objectFit="contain" layout="fixed" />
          <FrameName>
            <span>bold</span>
          </FrameName>
        </Frame>
      </FrameList>
    </Container>
  );
}

export default FramePicker;