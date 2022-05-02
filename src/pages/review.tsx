import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from '@hooks';
import axios from 'axios';

import { closeCropModal, setOpenCheckoutPreview, setFbTokenLoading } from '@modules/review/actions';
import { setFbToken, setStep } from '@modules/user/actions';

import { ArrowBack } from '@mui/icons-material';
import { Container, Navbar, IconButton, Content } from '@components/Review/styles';
import SwipeableMenu from '@components/Navbar/swipeable';
import FramePicker from '@components/FramePicker';
import SelectionSection from '@components/SelectionSection';
import CropModal from '@components/TileImages/CropModal';
import InstagramModal from '@components/InstagramModal';
import LowQualityModal from '@components/LowQualityModal';
import Loading from '@components/Loading';
import PurchaseScreen from '@components/PurchaseScreen';

import api from 'src/services/api';

function Review() {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { open: openCropModal } = useSelector((state) => state.review.cropModal);
  const openInstagram = useSelector((state) => state.review.instagramModal.open);

  const [openDrawer, setOpenDrawer] = useState(false);

  async function handleFbCode() {
    try {
      dispatch(setFbTokenLoading({ payload: true }));
      const bodyFormData = new FormData();

      bodyFormData.append('grant_type', 'authorization_code');
      bodyFormData.append('client_id', process.env.NEXT_PUBLIC_FB_CLIENT_ID ?? '');
      bodyFormData.append('client_secret', process.env.NEXT_PUBLIC_FB_CLIENT_SECRET ?? '');
      bodyFormData.append('redirect_uri', `${process.env.NEXT_PUBLIC_APP_BASE_URL}/review/`);
      bodyFormData.append('code', String(router.query.code));

      const { data } = await api.post('https://api.instagram.com/oauth/access_token', bodyFormData);
      const { data: tokenData } = await api.get(
        `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.NEXT_PUBLIC_FB_CLIENT_SECRET}&access_token=${data.access_token}`
      );

      history.pushState('', '', `${location.origin}${location.pathname}`);
      
      localStorage.setItem('fb_token', tokenData.access_token);
      dispatch(setFbToken({ payload: tokenData }));
      dispatch(setFbTokenLoading({ payload: false }));
    } catch (error: any) {
      if (axios.isAxiosError(error) && error?.request?.status !== 400) {
        dispatch(setFbToken({ payload: { access_token: '' } }));
      } else {
        dispatch(setFbToken({ payload: { access_token: '' } }));
      }
      dispatch(setFbTokenLoading({ payload: false }));
    }
  }

  useEffect(() => {
    dispatch(closeCropModal());
    dispatch(setOpenCheckoutPreview({ payload: { open: false, url: '', price: null, extraPrice: null, extraKwadros: null } }));

    const name = user.name || localStorage.getItem('name');
    const email = user.email || localStorage.getItem('email');
    if (!name || !email) {
      dispatch(setStep({ payload: 0 }));
      router.push('/get-started');
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (router.query?.code) {
      handleFbCode();
    }

    //eslint-disable-next-line
  }, [router?.query]);

  return (
    <>
      <Head>
        <title>Kwadros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar>
          <IconButton onClick={() => router.push('/')}>
            <ArrowBack />
          </IconButton>
          <span>KWADROS</span>
          <SwipeableMenu isblack={true} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </Navbar>
        <Content>
          <SelectionSection />
          <FramePicker />
        </Content>
        {openCropModal && <CropModal />}
        {openInstagram && <InstagramModal />}
        <LowQualityModal />
        <Loading />
        <Loading fb_token={true} />
        <PurchaseScreen />
      </Container>
    </>
  );
}

export default Review;
