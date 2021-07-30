/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setResponsive } from '@modules/platform/actions';

function ResizeListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;

    function updateSize() {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        const width = window.innerWidth;

        dispatch(setResponsive({ payload: width < 960 }));
      }, 250);
    }
    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      if (window) window.removeEventListener('resize', updateSize);
    };
  }, []);

  return <></>;
}

export default ResizeListener;
