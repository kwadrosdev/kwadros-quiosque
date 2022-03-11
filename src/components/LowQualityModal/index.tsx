import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from '@hooks';

import { CustomDialog, LowQualityImgContainer, LowQualityImg, ButtonsContainer, BtnOption, appear } from './styles';

import { handleDeleteTile, keepImgTile } from '@modules/review/actions';
import { db } from 'src/db';

function InstagramModal() {
  const dispatch = useDispatch();

  const { files: images } = useSelector((state) => state.review);
  const [smallImages, setSmallImages] = useState<any[]>([]);

  useEffect(() => {
    const _smallImages = images.filter((img) => img.small);

    setSmallImages(_smallImages);
  }, [images]);

  function animate() {
    const elementContainer = document.getElementById('low-quality-container');
    elementContainer?.classList.add('appear-container');
    setTimeout(() => elementContainer?.classList.remove('appear-container'), 600);
  }

  function keepImage(id: string) {
    animate();
    dispatch(keepImgTile({ payload: id }));
  }

  function removeImage(id: string) {
    animate();
    dispatch(handleDeleteTile({ payload: id }));
    db.files.delete(id).then(() => {});
  }

  if (smallImages.length > 0) {
    return (
      <CustomDialog open={true}>
        <LowQualityImgContainer id="low-quality-container">
          <h3>Imagem de Qualidade Baixa</h3>
          <LowQualityImg>
            <Image src={smallImages[0] ? smallImages[0].src : ''} alt="smallImg" layout="fill" objectFit="cover" />
          </LowQualityImg>
          <span>A resolução da foto é muito baixa! O kwadro provavelmente ficará embaçado.</span>
        </LowQualityImgContainer>

        <ButtonsContainer>
          <BtnOption highlighted onClick={() => keepImage(smallImages[0].id)}>
            Manter Mesmo Assim
          </BtnOption>
          <BtnOption onClick={() => removeImage(smallImages[0].id)}>Remover Do Pedido</BtnOption>
        </ButtonsContainer>
      </CustomDialog>
    );
  }

  return <></>;
}

export default InstagramModal;
