import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Player from 'react-player/youtube';

import { useSelector } from '@hooks';

import img1 from 'public/images/hero_image_1.jpg';
import img2 from 'public/images/hero_image_2.jpg';
import img3 from 'public/images/hero_image_3.jpg';
import img_mobile from 'public/images/hero_image_mobile.jpg';
import wall_kwadros from 'public/images/wall_kwadros.jpg';

import {
  MainSection,
  TextSection,
  ImagesSection,
  MainText,
  MainBtn,
  ShippingInfo,
  ChangeIcon,
  ShippingIcon,
  NailIcon,
  WarrantyIcon,
  InfoSection,
  Divider,
  SubText,
  GifSection,
  VideoContainer,
  GifSectionText,
  GifImg,
  FilledImg,
  FeedbackSection,
  ResponsiveImage,
  VideoSection,
  Col,
  Row,
} from '../components/Home/styles';

import Layout from '@components/Layout/index';
import InfoCard from '@components/Home/InfoCard';
import PostsCarousel from '@components/Home/PostsCarousel';
import StickyButton from '@components/StickyButton';

function Home() {
  const { responsive } = useSelector((state) => state.platform);

  if (responsive) {
    return (
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainSection>
          <TextSection>
            <MainText>{'Seu cantinho decorado\n com recordações e \nbons sentimentos'}</MainText>
          </TextSection>
          <ResponsiveImage>
            <Image src={img_mobile} priority alt="logoImg" layout="fill" objectFit="cover" quality={100} />
          </ResponsiveImage>
        </MainSection>
        <InfoSection>
          <InfoCard icon={<ChangeIcon width="48px" height="48px" />} mainText="Removível" subText="Mude de ambiente quando quiser" />
          <InfoCard icon={<NailIcon />} mainText="Não precisa de prego" subText="Ou seja, não danifica sua parede" />
          <InfoCard icon={<WarrantyIcon />} mainText="Satisfação garantida" subText="Você ama, ou devolvemos o seu dinheiro" />
        </InfoSection>
        <Divider responsive margin={'15px'} />
        <GifSection>
          <GifImg>
            <Image src={wall_kwadros} alt="gif_img" layout="fill" objectFit="cover" quality={100} />
          </GifImg>
          <GifSectionText>
            <h3>{'Três "Kwadros" por R$99,00'}</h3>
            <span>{'Kwadro adicional: R$19,90'}</span>
            <span>{'Frete grátis* 💜  '}</span>
            <span className="subscript">{'* para capitais e regiões metropolitanas. Demais regiões frete fixo R$25'}</span>
          </GifSectionText>
        </GifSection>
        <FeedbackSection>
          <h4>Clientes da Kwadros</h4>
          <span>Quem comprou ou presenteou, recomenda</span>
          <PostsCarousel />
        </FeedbackSection>
        <VideoSection>
          <h4>
            Escolha suas fotos, selecione a <span>moldura</span> e faça seu pedido 💜
          </h4>
          <VideoContainer>
            <div className="player-wrapper">
              <Player url="https://youtu.be/COdeMJLvlME" className="react-player" width="100%" height="100%" />
            </div>
          </VideoContainer>
        </VideoSection>
        <StickyButton />
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <ImagesSection>
          <Col dir="left">
            <FilledImg>
              <Image src={img1} alt="heroImg1" layout="fill" objectFit="cover" quality={100} />
            </FilledImg>
          </Col>
          <Col dir="right">
            <Row className="row up">
              <Image src={img2} alt="heroImg2" layout="intrinsic" />
            </Row>
            <Row className="row down">
              <Image src={img3} alt="heroImg3" layout="intrinsic" />
            </Row>
          </Col>
        </ImagesSection>
        <TextSection>
          <MainText>{'Seu cantinho decorado\n com recordações e \nbons sentimentos'}</MainText>
          <SubText>{'Acessíveis, de qualidade única e que não\n danificam a parede'}</SubText>
          <Link passHref href="/get-started">
            <MainBtn>Selecionar Fotos</MainBtn>
          </Link>
          <ShippingInfo>
            <ShippingIcon width="24px" height="24px" />
            <span>Entregamos em todo o Brasil</span>
          </ShippingInfo>
        </TextSection>
      </MainSection>
      <Divider responsive={false} margin={'0px'} />
      <InfoSection>
        <InfoCard icon={<ChangeIcon width="48px" height="48px" />} mainText="Removível" subText="Mude de ambiente quando quiser" />
        <InfoCard icon={<NailIcon />} mainText="Não precisa de pregos" subText="Preserve suas paredes" />
        <InfoCard icon={<WarrantyIcon />} mainText="Satisfação garantida" subText="Você ama, ou devolvemos o seu dinheiro" />
      </InfoSection>
      <GifSection>
        <GifSectionText>
          <h3>{'Três "Kwadros" por R$99,00'}</h3>
          <span>{'Kwadro adicional: R$19,90'}</span>
          <span>{'Frete grátis* 💜  '}</span>
          <span className="subscript">{'* para capitais e regiões metropolitanas. Demais regiões frete fixo R$25'}</span>
        </GifSectionText>
        <GifImg>
          <Image src={wall_kwadros} alt="gif_img" layout="fill" objectFit="cover" quality={100} />
        </GifImg>
      </GifSection>
      <FeedbackSection>
        <h4>Clientes da Kwadros</h4>
        <span>Quem comprou ou presenteou, recomenda</span>
        <PostsCarousel />
      </FeedbackSection>
      <VideoSection>
        <h4>
          Escolha suas fotos, selecione a <span>moldura</span> e faça seu pedido 💜
        </h4>
        <VideoContainer>
          <div className="player-wrapper">
            <Player controls={false} loop url="https://youtu.be/COdeMJLvlME" className="react-player" width="100%" height="100%" />
          </div>
        </VideoContainer>
      </VideoSection>
    </Layout>
  );
}

export default Home;
