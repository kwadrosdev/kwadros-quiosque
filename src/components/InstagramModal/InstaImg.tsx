import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '@hooks';
import Image from 'next/image';

import { InstaImgContainer, SelectedBorder, SelectedIcon, InstaImgFrame } from './styles';
import { Check } from '@mui/icons-material';

import { setInstagramSelected, removeInstagramSelected } from '@modules/review/actions';

function InstaImg({ url, alt, id }: { url: string; alt: string; id: string }) {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.review.instagramModal);
  const selectedCount = useSelector((state) => state.review.files.length);
  const max_kwadros = useSelector((state) => state.review.max_kwadros);

  function handleSelected() {
    if (isSelected) {
      return dispatch(removeInstagramSelected({ payload: id }));
    }

    if (selectedCount + selected.length + 1 > max_kwadros) {
      return window.alert(`O máximo de quadros é ${max_kwadros}`);
    }

    return dispatch(setInstagramSelected({ payload: { id, url } }));
  }

  useEffect(() => {
    if (selected.length) {
      if (selected.findIndex((instaImg) => instaImg.id === id) !== -1) {
        return setIsSelected(true);
      }
    }
    return setIsSelected(false);
  }, [selected, id]);

  return (
    <InstaImgContainer onClick={() => handleSelected()}>
      {isSelected && (
        <>
          <SelectedBorder />
          <SelectedIcon>
            <Check />
          </SelectedIcon>
        </>
      )}
      <InstaImgFrame />
      <Image id={id} src={url} alt={alt} layout="intrinsic" width={160} height={160} objectFit={'contain'} quality={100} />
    </InstaImgContainer>
  );
}

export default InstaImg;
