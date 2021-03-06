import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';
import { OpenInNew } from '@mui/icons-material';

import Layout from '@components/Layout/index';

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & a {
    font-size: 24px;
    font-weight: bold;
    margin-right: 8px;
    color: rgba(0, 0, 0, 0.5);

    & :hover {
      color: rgba(0, 0, 0, 0.87);
    }

    &:visited {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  & svg {
    fill: rgba(0, 0, 0, 0.5);
  }
`;

function TermsOfUso() {
  return (
    <Layout>
      <Head>
        <title>Kwadros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pdf-container">
        <h1>Perguntas Frequentes</h1>
        <ul>
          <li>
            <h3>Como funciona?</h3>
            <span>
              Você seleciona fotos da sua galeria ou Instagram, escolhe a moldura e finaliza o pedido inserindo os dados de envio e
              realizando o pagamento
            </span>
          </li>
          <li>
            <h3>O que exatamente vou receber?</h3>
            <span>Os quadrinhos completos, com suas fotos e moldura selecionada</span>
          </li>
          <li>
            <h3>As fotos são impressas com qualidade?</h3>
            <span>
              Com certeza. Mantemos a foto o mais próximo possível do que você nos enviou. Portanto, quanto melhor a foto, mais bonita ela
              ficará impressa. Evite fotos muito escuras ou de baixíssima resolução
            </span>
          </li>
          <li>
            <h3>Quando o pedido será enviado?</h3>
            <span>
              Postamos no dia útil seguinte ao seu pedido e você receberá o código de rastreio para acompanhar passo a passo a sua entrega
            </span>
          </li>
          <li>
            <h3>Quando vou receber?</h3>
            <span>Depende do seu cep. Basta inseri-lo no carrinho de compras e você terá as opções e prazos de envio.</span>
          </li>
          <li>
            <h3>Qual o valor do frete?</h3>
            <span>Frete grátis para capitais e regiões metropolitanas, as demais regiões tem frete fixo de R$25</span>
          </li>
          <li>
            <h3>Quais são os tamanhos dos quadros?</h3>
            <span>Todos os nossos quadros tem medida padrão de 20x20cm</span>
          </li>
          <li>
            <h3>Quais cores disponíveis?</h3>
            <span>Preto e branco</span>
          </li>
          <li>
            <h3>Quais as formas de pagamento?</h3>
            <span>Cartão (em até 12 vezes sem juros), Pix ou boleto</span>
          </li>
          <li>
            <h3>De qual material os quadros são feitos?</h3>
            <span>São fabricados em plástico Abs. Qualidade muito superior à madeira em design e durabilidade</span>
          </li>
          <li>
            <h3>Como coloco na parede?</h3>
            <span>Basta retirar a película da nossa fita dupla face especial e escolher um cantinho para decorar</span>
          </li>
          <li>
            <h3>Como não danificam a parede?</h3>
            <span>
              Por não usar prego e sim uma fita dupla face especial, você pode remover sem danificar e sem deixar vestígios na parede. Basta
              seguir as orientações que enviamos no seu pedido
            </span>
          </li>
          <li>
            <h3>Posso mudar de ambiente?</h3>
            <span>Sim, basta retirar os quadrinhos e colocá-los em uma nova posição ou ambiente</span>
          </li>
          <li>
            <h3>Vocês são fabricantes?</h3>
            <span>
              Sim, somos fabricantes. Por isso temos o melhor preço e qualidade garantidos. Se você não gostar, devolvemos o seu dinheiro.
            </span>
          </li>
        </ul>

        <LinkContainer>
          <Link href="/politicas-de-privacidade">Políticas de Privacidade</Link>
          <OpenInNew />
        </LinkContainer>
        <LinkContainer>
          <Link href="/termos-de-uso">Termos de Uso</Link>
          <OpenInNew />
        </LinkContainer>
      </div>
    </Layout>
  );
}

export default TermsOfUso;
