import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';

import img1 from 'public/images/hero_image_1@2x.jpg';

const Container = styled.div`
  overflow: hidden;
  min-width: 335px;
  width: 335px;
  height: 460px;
  border-radius: 8px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 464px) {
      min-width: 290px;
      width: 290px;
    }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 335px;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const Subtitle = styled.p`
  margin: 0px;
  color: #222;
  font-size: 15px;
  height: 78px;
  line-height: 26px;
  font-weight: 500;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserNickname = styled.span`
  color: rgba(0, 0, 0, 0.4);
  margin-top: 6px;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
`;

function Home({ imgSrc = img1 }: { imgSrc: any }) {
  return (
    <Container className="noselect">
      <ImgContainer>
        <Image draggable={false} src={imgSrc} alt="gif_img" layout="fill" objectFit="cover" quality={100} />
      </ImgContainer>
      <TextContainer>
        <Subtitle>
          Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Si u mundo
          tá muito paradis? Toma um mé que o mundo vai girarzis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
          Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
        </Subtitle>
        <UserNickname>@fulana_de_tal</UserNickname>
      </TextContainer>
    </Container>
  );
};

export default Home;
