import React, { useEffect } from 'react';
import { useDispatch } from '@hooks';
import { setName, setEmail, setStep, setFbToken } from '@modules/user/actions';
import { setImgFiles } from '@modules/review/actions';
import { db } from 'src/db';
// import { initStore } from 'src/store';

async function getDexieImages() {
  const files = await db.files.toArray();

  return files.map((file) => file.content);
}

function ReduxInitiator({ children }: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setName({ payload: localStorage.getItem('name') || '' }));
    dispatch(setEmail({ payload: localStorage.getItem('email') || '' }));
    dispatch(setStep({ payload: parseFloat(localStorage.getItem('step') || '0') }));
    dispatch(setFbToken({ payload: { access_token: localStorage.getItem('fb_token') || null } }));

    getDexieImages().then((imgFiles) => dispatch(setImgFiles({ payload: imgFiles })));

    // window.onbeforeunload = () => {
    //   const { user } = initStore.getState();

    //   localStorage.setItem('name', user.name);
    //   localStorage.setItem('email', user.email);
    //   localStorage.setItem('order', user.order);
    //   localStorage.setItem('step', user.step.toString());
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}

export default ReduxInitiator;
