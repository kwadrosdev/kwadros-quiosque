import React from 'react';
import { useSelector, useDispatch } from '@hooks';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './materialStyles';

import { setImgFiles } from '@modules/review/actions';

import TileImages from '@components/TileImages';

import {
  Container,
  GetStartedContainer,
  OptionsContainer,
  FullOptionInput,
  FullOptionInputMask,
  FullOption,
  CameraIcon,
  FacebookIcon,
  InstagramIcon,
  Divider,
  CloudOption,
  CloudOptionsGroup,
} from './styles';

interface HTMLInputEvent extends React.ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

function SelectionSection() {
  const dispatch = useDispatch();

  const imgFiles = useSelector((state) => state.review.files);

  const onFileChange = async (e: HTMLInputEvent) => {
    const _imgFiles = [];

    if (e?.target?.files && e.target.files.length > 0) {
      for (let i = 0; i < e.target.files.length; i++) {
        let fileData: any = await readFile(e.target.files[i]);
        _imgFiles.push({ src: fileData, dimensions: { x: 0, y: 0, zoom: 1 } });
      }
      dispatch(setImgFiles({ payload: _imgFiles }));
    }
  };

  return (
    <Container>
      {imgFiles.length > 0 ? (
        <TileImages selectedImages={imgFiles} />
      ) : (
        <GetStartedContainer>
          <h3>Escolha algumas fotos para começar</h3>
          <OptionsContainer>
            <FullOption>
              <FullOptionInputMask tabIndex={0}>
                <FullOptionInput type="file" onChange={onFileChange} multiple accept="image/*" tabIndex={-1} />
              </FullOptionInputMask>
              <CameraIcon />
              <span>Carregar fotos</span>
            </FullOption>
            <Divider>Ou</Divider>
            <CloudOptionsGroup>
              <CloudOption>
                <FacebookIcon />
                <span>Importar do Facebook</span>
              </CloudOption>
              <CloudOption>
                <InstagramIcon />
                <span>Importar do Instagram</span>
              </CloudOption>
            </CloudOptionsGroup>
          </OptionsContainer>
        </GetStartedContainer>
      )}
    </Container>
  );
}

function readFile(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default withStyles(styles)(SelectionSection);
