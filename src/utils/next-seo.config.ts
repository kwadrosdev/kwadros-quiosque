import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Kwadros - Seu cantinho decorado com recordações e bons sentimentos',
  defaultTitle: 'Kwadros - Seu cantinho decorado com recordações e bons sentimentos',
  description: 'Quadros que não danificam a parede e não usam prego',
  canonical: 'https://kwadros.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://kwadros.com/',
    site_name: 'Kwadros',
    title: 'Kwadros - Seu cantinho decorado com recordações e bons sentimentos',
    description: 'Quadros que não danificam a parede e não usam prego',
    images: [
      {
        url: 'https://res.cloudinary.com/kwadros/image/upload/v1644177460/assets/logo_purple_pmhec6.png',
        width: 492,
        height: 492,
        alt: 'Kwadros',
      },
    ],
  },
};

export default config;
